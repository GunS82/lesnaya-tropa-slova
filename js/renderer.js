(function (global) {
  "use strict";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function Renderer(root, game) {
    this.root = root;
    this.game = game;
    this.data = game.data;
    this.progress = game.progress;
    this.view = {};
    this.soundOn = game.progress.state.sound !== false;
    this.pendingMedal = null;
  }

  Renderer.prototype.el = function (id) {
    return this.root.querySelector("#" + id) || document.getElementById(id);
  };

  Renderer.prototype.showScreen = function (name) {
    var screens = this.root.querySelectorAll(".screen");
    for (var i = 0; i < screens.length; i += 1) {
      var screen = screens[i];
      var active = screen.getAttribute("data-screen") === name;
      screen.hidden = !active;
      screen.classList.toggle("is-active", active);
    }
  };

  Renderer.prototype.setOwl = function (text) {
    this.el("owl-speech").textContent = text || "";
  };

  Renderer.prototype.sceneHtml = function (name, alt) {
    var meta = (this.data.scenes && this.data.scenes[name]) || {};
    var caption = meta.caption || "";
    var emoji = meta.emoji || "🌲";
    var label = alt || meta.alt || caption;
    return (
      '<figure class="scene-frame">' +
      '<img class="scene-photo" alt="' +
      escapeHtml(label) +
      '" src="assets/scenes/' +
      encodeURIComponent(name) +
      '.jpg" width="1400" height="788" decoding="async" data-scene="' +
      escapeHtml(name) +
      '">' +
      '<div class="scene-fallback" hidden data-scene="' +
      escapeHtml(name) +
      '">' +
      '<div class="hero">' +
      emoji +
      "</div>" +
      "<figcaption>" +
      escapeHtml(caption || label) +
      "</figcaption>" +
      "</div></figure>"
    );
  };

  Renderer.prototype.bindSceneImages = function (scope) {
    var imgs = (scope || this.root).querySelectorAll("img.scene-photo[data-scene]");
    for (var i = 0; i < imgs.length; i += 1) {
      this.loadScene(imgs[i]);
    }
  };

  Renderer.prototype.loadScene = function (img) {
    var fallback = img.nextElementSibling;

    function showPhoto() {
      img.hidden = false;
      if (fallback) fallback.hidden = true;
    }

    function showFallback() {
      img.hidden = true;
      if (fallback) fallback.hidden = false;
    }

    img.addEventListener("load", showPhoto);
    img.addEventListener("error", showFallback);
    if (img.complete) {
      if (img.naturalWidth) showPhoto();
      else showFallback();
    }
  };

  Renderer.prototype.highlightSentence = function (sentence, marks) {
    if (!sentence) return "";
    var html = escapeHtml(sentence);
    if (!marks) return html;
    Object.keys(marks).forEach(function (word) {
      var role = marks[word];
      var re = new RegExp("(" + escapeRegExp(escapeHtml(word)) + ")", "i");
      html = html.replace(re, '<span class="mark mark-' + role + '">$1</span>');
    });
    return html;
  };

  Renderer.prototype.renderMenu = function () {
    this.showScreen("menu");
    var has = this.progress.hasProgress();
    this.el("btn-continue").hidden = !has;
    this.el("btn-reset").hidden = !has;
  };

  Renderer.prototype.renderTopics = function () {
    this.showScreen("topics");
    var box = this.el("topic-list");
    box.innerHTML = this.data.topics
      .map(function (topic) {
        var inner =
          escapeHtml(topic.title) +
          "<small>" +
          escapeHtml(topic.subtitle || "") +
          "</small>";
        if (topic.href) {
          return '<a class="btn topic-btn" href="' + escapeHtml(topic.href) + '">' + inner + "</a>";
        }
        var locked = !topic.available;
        return (
          '<button type="button" class="btn topic-btn' +
          (locked ? " is-locked" : "") +
          '" data-action="' +
          (locked ? "noop" : "open-topic") +
          '" data-id="' +
          escapeHtml(topic.id) +
          '"' +
          (locked ? " disabled" : "") +
          ">" +
          inner +
          "</button>"
        );
      })
      .join("");
  };

  Renderer.prototype.renderMap = function () {
    this.showScreen("map");
    this.el("map-stars").textContent = "★ " + this.progress.state.totalStars;
    var current = this.progress.firstOpenId();
    var self = this;
    this.el("trail").innerHTML = this.progress
      .trail()
      .map(function (node) {
        if (node.kind === "bridge") {
          return (
            '<li class="trail-bridge">' +
            node.icon +
            " " +
            escapeHtml(node.title) +
            "</li>"
          );
        }
        var unlocked = self.progress.isUnlocked(node.id);
        var done =
          node.kind === "start" ||
          (node.kind === "finish"
            ? current === "finish"
            : self.progress.isCompleted(node.id));
        var isCurrent = node.id === current || (current === "finish" && node.kind === "finish" && done);
        var stars = node.kind ? "" : self.starString(self.progress.starsFor(node.id));
        var cls = "trail-stop";
        if (done) cls += " is-done";
        if (isCurrent && node.kind !== "start") cls += " is-current";
        if (!unlocked) cls += " is-locked";
        if (node.zone) cls += " zone-" + node.zone;
        var action = "noop";
        if (unlocked && !node.kind) action = "play";
        if (node.kind === "finish" && done) action = "finish";
        var canPress = action !== "noop";
        return (
          '<li class="' +
          cls +
          '">' +
          '<div class="trail-dot">' +
          node.icon +
          "</div>" +
          '<button type="button" class="btn trail-btn" data-action="' +
          action +
          '" data-id="' +
          escapeHtml(node.id) +
          '"' +
          (canPress ? "" : " disabled") +
          ">" +
          escapeHtml(node.title) +
          "</button>" +
          "<span>" +
          stars +
          "</span></li>"
        );
      })
      .join("");
  };

  Renderer.prototype.starString = function (count) {
    if (!count) return "";
    return "★".repeat(count);
  };

  Renderer.prototype.prepareFooter = function (midRound) {
    var btn = this.el("game-footer").querySelector("button");
    if (!btn) return;
    if (midRound) {
      btn.setAttribute("data-action", "round-next");
      btn.textContent = "Дальше";
    } else {
      btn.setAttribute("data-action", "next");
      btn.textContent = "Дальше →";
    }
  };

  Renderer.prototype.renderExercise = function (id) {
    var exercise = this.game.begin(id);
    if (!exercise) return;
    this.showScreen("game");
    this.prepareFooter(false);
    this.el("game-footer").hidden = true;
    var ids = this.progress.exerciseIds();
    var index = ids.indexOf(id) + 1;
    this.el("progress-label").textContent = "Задание " + index + " из " + ids.length;
    this.view = { id: id, step: 0, type: exercise.type, selected: null, extra: {} };
    this.renderPlaying();
    this.updateSoundButton();
  };

  Renderer.prototype.renderPlaying = function () {
    var parent = this.game.exercise(this.view.id);
    var step = parent.type === "rounds" ? parent.rounds[this.view.step] : parent;
    this.parentExercise = parent;
    this.view.type = step.type;
    this.view.selected = null;
    this.view.chosen = {};
    this.view.placed = {};
    this.view.left = null;
    this.setOwl(step.owl || parent.owl || "Давай попробуем!");
    var html = "";
    if (parent.type === "rounds") {
      html +=
        '<p class="round-label">Шаг ' +
        (this.view.step + 1) +
        " из " +
        parent.rounds.length +
        "</p>";
    }
    html += this.renderByType(step);
    this.el("exercise").innerHTML = html;
    this.bindSceneImages(this.el("exercise"));
  };

  Renderer.prototype.renderByType = function (exercise) {
    switch (exercise.type) {
      case "singleChoice":
        return this.renderSingleChoice(exercise);
      case "insertWord":
        return this.renderInsertWord(exercise);
      case "buildSentence":
        return this.renderBuildSentence(exercise);
      case "expandSentence":
        return this.renderExpandSentence(exercise);
      case "wordRelation":
        return this.renderWordRelation(exercise);
      case "classification":
        return this.renderClassification(exercise);
      case "findMultiple":
        return this.renderFindMultiple(exercise);
      case "matchPairs":
        return this.renderMatchPairs(exercise);
      case "sceneChoice":
        return this.renderSceneChoice(exercise);
      case "sceneMultiple":
        return this.renderSceneMultiple(exercise);
      default:
        return "<p>Неизвестный тип задания.</p>";
    }
  };

  Renderer.prototype.miniScene = function (name, label) {
    var meta = (this.data.scenes && this.data.scenes[name]) || {};
    var emoji = meta.emoji || "🌲";
    var text = label || meta.alt || meta.caption || name;
    return (
      '<span class="mini-scene">' +
      '<img class="scene-photo" alt="' +
      escapeHtml(text) +
      '" src="assets/scenes/' +
      encodeURIComponent(name) +
      '.jpg" data-scene="' +
      escapeHtml(name) +
      '">' +
      '<span class="scene-fallback mini-fallback" hidden data-scene="' +
      escapeHtml(name) +
      '">' +
      emoji +
      "</span></span>"
    );
  };

  Renderer.prototype.titleBlock = function (exercise) {
    var parent = this.parentExercise || exercise;
    var title = exercise.title || parent.title || "";
    var question = exercise.question || "";
    var gallery = exercise.gallery || [];
    var galleryHtml = gallery.length
      ? '<div class="scene-gallery">' +
        gallery
          .map(function (name) {
            return this.miniScene(name, name);
          }, this)
          .join("") +
        "</div>"
      : "";
    var scene = !gallery.length ? exercise.scene || (!exercise.prompt && parent.scene) : "";
    if (exercise.scene === false) scene = "";
    return (
      "<h1>" +
      escapeHtml(title) +
      "</h1>" +
      (scene ? this.sceneHtml(scene, title) : "") +
      galleryHtml +
      (exercise.prompt ? '<p class="word-hero">' + escapeHtml(exercise.prompt) + "</p>" : "") +
      (question ? '<p class="exercise-question">' + escapeHtml(question) + "</p>" : "")
    );
  };

  Renderer.prototype.renderSceneChoice = function (exercise) {
    this.view.options = ForestGame.shuffle(exercise.options.slice());
    var self = this;
    return (
      this.titleBlock(exercise) +
      '<div class="scene-choices">' +
      this.view.options
        .map(function (option) {
          var label = option.label || "";
          return (
            '<button type="button" class="scene-choice answer" data-action="choose" data-value="' +
            escapeHtml(option.id) +
            '">' +
            self.miniScene(option.scene, label || option.id) +
            (option.showLabel === false
              ? ""
              : '<span class="choice-label">' + escapeHtml(label) + "</span>") +
            "</button>"
          );
        })
        .join("") +
      "</div>"
    );
  };

  Renderer.prototype.renderSceneMultiple = function (exercise) {
    this.view.selected = [];
    this.view.options = ForestGame.shuffle(exercise.options.slice());
    var self = this;
    return (
      this.titleBlock(exercise) +
      '<div class="scene-choices" id="scene-multi">' +
      this.view.options
        .map(function (option) {
          var label = option.label || "";
          return (
            '<button type="button" class="scene-choice answer" data-action="toggle-scene" data-value="' +
            escapeHtml(option.id) +
            '">' +
            self.miniScene(option.scene, label || option.id) +
            (option.showLabel === false
              ? ""
              : '<span class="choice-label">' + escapeHtml(label) + "</span>") +
            "</button>"
          );
        })
        .join("") +
      '</div><div class="check-row"><button type="button" class="btn btn-primary" data-action="check-scenes">Готово</button></div>'
    );
  };

  Renderer.prototype.showHintGallery = function (scenes) {
    var old = document.getElementById("hint-gallery");
    if (old) old.remove();
    if (!scenes || !scenes.length) return;
    var html =
      '<div class="hint-gallery" id="hint-gallery">' +
      scenes
        .map(function (name) {
          return this.miniScene(name, name);
        }, this)
        .join("") +
      "</div>";
    this.el("exercise").insertAdjacentHTML("beforeend", html);
    this.bindSceneImages(this.el("exercise"));
  };

  Renderer.prototype.optionButtons = function (options, action) {
    return (
      '<div class="answers">' +
      options
        .map(function (option) {
          return (
            '<button type="button" class="answer" data-action="' +
            action +
            '" data-value="' +
            escapeHtml(option) +
            '">' +
            escapeHtml(option) +
            "</button>"
          );
        })
        .join("") +
      "</div>"
    );
  };

  Renderer.prototype.renderSingleChoice = function (exercise) {
    this.view.options = ForestGame.shuffle(exercise.options.slice());
    return (
      this.titleBlock(exercise) +
      '<div class="sentence" id="sentence-view">' +
      escapeHtml(exercise.sentence || "") +
      "</div>" +
      this.optionButtons(this.view.options, "choose")
    );
  };

  Renderer.prototype.renderInsertWord = function (exercise) {
    this.view.options = ForestGame.shuffle(exercise.options.slice());
    this.view.blank = exercise.sentence;
    return (
      this.titleBlock(exercise) +
      '<div class="sentence" id="sentence-view">' +
      this.blankHtml(exercise.sentence, "□") +
      "</div>" +
      this.optionButtons(this.view.options, "choose")
    );
  };

  Renderer.prototype.blankHtml = function (sentence, fill) {
    return escapeHtml(sentence).replace("□", '<span class="slot">' + escapeHtml(fill) + "</span>");
  };

  Renderer.prototype.renderBuildSentence = function (exercise) {
    this.view.bank = ForestGame.shuffle(exercise.words.slice());
    this.view.chosen = [];
    return (
      this.titleBlock(exercise) +
      '<div class="built-sentence" id="built-sentence">Собери предложение здесь</div>' +
      '<div class="word-bank" id="word-bank">' +
      this.chipsHtml(this.view.bank, "pick-word") +
      "</div>"
    );
  };

  Renderer.prototype.chipsHtml = function (words, action) {
    return words
      .map(function (word, index) {
        return (
          '<button type="button" class="chip" data-action="' +
          action +
          '" data-index="' +
          index +
          '">' +
          escapeHtml(word) +
          "</button>"
        );
      })
      .join("");
  };

  Renderer.prototype.renderExpandSentence = function (exercise) {
    this.view.placed = [];
    return (
      this.titleBlock(exercise) +
      '<div class="expand-line" id="expand-line">' +
      escapeHtml(this.game.buildExpanded(exercise, [])) +
      "</div>" +
      '<div class="word-bank" id="word-bank">' +
      exercise.extra
        .map(function (item, index) {
          return (
            '<button type="button" class="chip" data-action="add-extra" data-index="' +
            index +
            '">' +
            escapeHtml(item.text) +
            "</button>"
          );
        })
        .join("") +
      "</div>"
    );
  };

  Renderer.prototype.renderWordRelation = function (exercise) {
    this.view.step = 0;
    this.view.done = [];
    return this.relationStepHtml(exercise);
  };

  Renderer.prototype.relationStepHtml = function (exercise) {
    var rel = exercise.relations[this.view.step];
    var options = ForestGame.shuffle(exercise.options.slice());
    var scheme = this.view.done
      .map(function (item) {
        return (
          "<div><strong>" +
          escapeHtml(item.from) +
          '</strong><div class="arrow">↓ ' +
          escapeHtml(item.question) +
          " ↓</div>" +
          escapeHtml(item.to) +
          "</div>"
        );
      })
      .join("");
    return (
      this.titleBlock(exercise) +
      '<div class="sentence">' +
      escapeHtml(exercise.sentence) +
      "</div>" +
      '<p class="relation-prompt">' +
      escapeHtml(rel.from) +
      " → ?</p>" +
      this.optionButtons(options, "relation") +
      (scheme ? '<div class="scheme" id="scheme">' + scheme + "</div>" : '<div class="scheme" id="scheme" hidden></div>')
    );
  };

  Renderer.prototype.renderClassification = function (exercise) {
    this.view.placed = {};
    this.view.selected = null;
    var items = ForestGame.shuffle(exercise.items.slice());
    var self = this;
    return (
      this.titleBlock(exercise) +
      '<div class="word-bank" id="class-bank">' +
      items
        .map(function (item) {
          var face = item.scene
            ? self.miniScene(item.scene, item.text)
            : item.emoji
              ? '<span class="card-emoji">' + item.emoji + "</span>"
              : "";
          return (
            '<button type="button" class="sentence-card" data-action="pick-item" data-id="' +
            escapeHtml(item.id) +
            '">' +
            face +
            escapeHtml(item.text) +
            "</button>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="baskets' +
      (exercise.groups.length > 2 ? " baskets-many" : "") +
      '">' +
      exercise.groups
        .map(function (group) {
          return (
            '<div class="basket" role="button" tabindex="0" data-action="put-basket" data-id="' +
            escapeHtml(group.id) +
            '"><h3>' +
            escapeHtml(group.title) +
            '</h3><div data-drop="' +
            escapeHtml(group.id) +
            '"></div></div>'
          );
        })
        .join("") +
      "</div>"
    );
  };

  Renderer.prototype.renderFindMultiple = function (exercise) {
    this.view.selected = [];
    return (
      this.titleBlock(exercise) +
      '<div class="sentence">' +
      escapeHtml(exercise.sentence) +
      "</div>" +
      '<div class="tokens" id="tokens">' +
      exercise.tokens
        .map(function (token, index) {
          return (
            '<button type="button" class="token" data-action="toggle-token" data-index="' +
            index +
            '" data-text="' +
            escapeHtml(token.text) +
            '">' +
            escapeHtml(token.text) +
            "</button>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="check-row"><button type="button" class="btn btn-primary" data-action="check-multiple">Готово</button></div>'
    );
  };

  Renderer.prototype.pairFace = function (item) {
    var picture = item.scene ? this.miniScene(item.scene, item.text || item.id) : "";
    var text = item.text ? "<span>" + escapeHtml(item.text) + "</span>" : "";
    return picture + text;
  };

  Renderer.prototype.renderMatchPairs = function (exercise) {
    this.view.chosen = {};
    this.view.left = null;
    var left = ForestGame.shuffle(exercise.left.slice());
    var right = ForestGame.shuffle(exercise.right.slice());
    var self = this;
    return (
      this.titleBlock(exercise) +
      '<div class="pair-columns">' +
      '<div class="pair-col" id="pair-left">' +
      left
        .map(function (item) {
          return (
            '<button type="button" class="pair-item" data-action="pair-left" data-id="' +
            escapeHtml(item.id) +
            '">' +
            self.pairFace(item) +
            "</button>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="pair-col" id="pair-right">' +
      right
        .map(function (item) {
          return (
            '<button type="button" class="pair-item" data-action="pair-right" data-id="' +
            escapeHtml(item.id) +
            '">' +
            self.pairFace(item) +
            "</button>"
          );
        })
        .join("") +
      "</div></div>"
    );
  };

  Renderer.prototype.optionIsCorrect = function (exercise, value) {
    if (exercise.answers) return exercise.answers.indexOf(value) !== -1;
    return this.game.checkSingle(exercise, value);
  };

  Renderer.prototype.applyHint = function (exercise, parent) {
    var level = this.game.hintLevel;
    this.setOwl("Попробуй ещё раз. " + this.game.hintText(exercise, parent || this.parentExercise));
    if (level >= 2) this.reduceOptions(exercise);
    if (level >= 3) this.glowCorrect(exercise);
  };

  Renderer.prototype.reduceOptions = function (exercise) {
    var answers = this.el("exercise").querySelectorAll(".answer");
    var hidden = 0;
    for (var i = 0; i < answers.length; i += 1) {
      var value = answers[i].getAttribute("data-value");
      var correct = this.optionIsCorrect(exercise, value);
      if (!correct && hidden === 0 && answers.length > 2) {
        answers[i].classList.add("is-disabled");
        answers[i].disabled = true;
        hidden += 1;
      }
    }
  };

  Renderer.prototype.glowCorrect = function (exercise) {
    var type = exercise.type;
    var root = this.el("exercise");
    if (type === "singleChoice" || type === "insertWord" || type === "sceneChoice") {
      var answers = root.querySelectorAll(".answer");
      for (var i = 0; i < answers.length; i += 1) {
        if (this.optionIsCorrect(exercise, answers[i].getAttribute("data-value"))) {
          answers[i].classList.add("is-glow");
        }
      }
    }
    if (type === "sceneMultiple") {
      var pictures = root.querySelectorAll(".scene-choice");
      for (var s = 0; s < pictures.length; s += 1) {
        if (this.optionIsCorrect(exercise, pictures[s].getAttribute("data-value"))) {
          pictures[s].classList.add("is-glow");
        }
      }
    }
    if (type === "matchPairs" && this.view.left && exercise.pairs) {
      var rightId = exercise.pairs[this.view.left];
      var pairNode = root.querySelector('#pair-right .pair-item[data-id="' + rightId + '"]');
      if (pairNode) pairNode.classList.add("is-glow");
    }
    if (type === "buildSentence") {
      var next = this.game.nextExpectedWord(exercise, this.view.chosen || []);
      var chips = root.querySelectorAll(".chip");
      for (var c = 0; c < chips.length; c += 1) {
        if (ForestGame.normalize(chips[c].textContent) === ForestGame.normalize(next)) {
          chips[c].classList.add("is-glow");
        }
      }
    }
    if (type === "findMultiple") {
      var tokens = exercise.tokens;
      var buttons = root.querySelectorAll(".token");
      for (var t = 0; t < buttons.length; t += 1) {
        if (tokens[t] && tokens[t].role === "secondary") buttons[t].classList.add("is-glow");
      }
    }
    if (type === "wordRelation") {
      var rel = exercise.relations[this.view.step];
      var opts = root.querySelectorAll(".answer");
      for (var r = 0; r < opts.length; r += 1) {
        if (this.game.checkRelation(rel, opts[r].getAttribute("data-value"))) {
          opts[r].classList.add("is-glow");
        }
      }
    }
    if (type === "expandSentence") {
      var extras = root.querySelectorAll(".chip");
      for (var e = 0; e < extras.length; e += 1) {
        if (!extras[e].classList.contains("is-used")) {
          extras[e].classList.add("is-glow");
          break;
        }
      }
    }
  };

  Renderer.prototype.holdForNextRound = function (text) {
    this.setOwl(text || "Верно!");
    this.prepareFooter(true);
    this.el("game-footer").hidden = false;
    var buttons = this.el("exercise").querySelectorAll("button");
    for (var i = 0; i < buttons.length; i += 1) buttons[i].disabled = true;
    this.playTone(true);
  };

  Renderer.prototype.succeed = function (exercise, extraHtml) {
    this.prepareFooter(false);
    this.setOwl(exercise.success || "Верно!");
    this.el("game-footer").hidden = false;
    if (exercise.marks) {
      var sentence = this.el("sentence-view");
      if (sentence) sentence.innerHTML = this.highlightSentence(exercise.sentence, exercise.marks);
    }
    if (extraHtml) {
      var box = this.el("exercise");
      box.insertAdjacentHTML("beforeend", extraHtml);
    }
    var buttons = this.el("exercise").querySelectorAll("button");
    for (var i = 0; i < buttons.length; i += 1) {
      if (buttons[i].getAttribute("data-action") !== "next") buttons[i].disabled = true;
    }
    this.playTone(true);
    this.popStars();
  };

  Renderer.prototype.fail = function (exercise, node, message) {
    this.game.registerMistake();
    if (node) {
      node.classList.add("is-wrong");
      var el = node;
      setTimeout(function () {
        el.classList.remove("is-wrong");
      }, 450);
    }
    this.playTone(false);
    if (message) this.setOwl(message);
    else this.applyHint(exercise, this.parentExercise);
  };

  Renderer.prototype.popStars = function () {
    var pop = document.createElement("div");
    pop.className = "star-pop";
    pop.textContent = "★";
    this.el("game-card").appendChild(pop);
    setTimeout(function () {
      pop.remove();
    }, 900);
  };

  Renderer.prototype.updateSoundButton = function () {
    var btn = this.el("btn-sound");
    if (btn) btn.textContent = this.soundOn ? "🔔" : "🔕";
  };

  Renderer.prototype.playTone = function (ok) {
    if (!this.soundOn || !global.AudioContext && !global.webkitAudioContext) return;
    try {
      var Ctx = global.AudioContext || global.webkitAudioContext;
      if (!this.audioCtx) this.audioCtx = new Ctx();
      var ctx = this.audioCtx;
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = ok ? "triangle" : "sine";
      osc.frequency.value = ok ? 660 : 220;
      gain.gain.value = 0.05;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (ok ? 0.18 : 0.22));
    } catch (err) {
      /* ignore */
    }
  };

  Renderer.prototype.speak = function (exercise) {
    if (!global.speechSynthesis) {
      this.setOwl("В этом браузере нет чтения вслух, но задание видно на экране.");
      return;
    }
    var text = exercise.speak || [exercise.title, exercise.question, exercise.sentence].filter(Boolean).join(". ");
    var utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ru-RU";
    utter.rate = 0.92;
    global.speechSynthesis.cancel();
    global.speechSynthesis.speak(utter);
  };

  Renderer.prototype.renderMedal = function (medal) {
    this.showScreen("medal");
    this.el("medal-icon").textContent = medal.icon;
    this.el("medal-title").textContent = medal.title;
    this.el("medal-text").textContent = medal.text || "Медаль «" + medal.title + "» теперь твоя!";
  };

  Renderer.prototype.renderFinish = function () {
    this.showScreen("finish");
    var finish = this.data.finish || {};
    if (finish.title && this.el("finish-title")) this.el("finish-title").textContent = finish.title;
    if (finish.lead && this.el("finish-lead")) this.el("finish-lead").textContent = finish.lead;
    this.el("finish-stars").textContent = "★ " + this.progress.state.totalStars;
    var notes = finish.notes || [];
    if (this.el("finish-notes")) {
      this.el("finish-notes").innerHTML = notes
        .map(function (note) {
          return (
            "<li><strong>" +
            escapeHtml(note.title) +
            "</strong><span>" +
            escapeHtml(note.text) +
            "</span></li>"
          );
        })
        .join("");
    }
    var medals = this.data.medals;
    var state = this.progress.state.medals;
    this.el("medal-shelf").innerHTML = medals
      .map(function (medal) {
        var got = state.indexOf(medal.id) !== -1;
        return "<li>" + medal.icon + " " + escapeHtml(medal.title) + (got ? "" : " (ещё впереди)") + "</li>";
      })
      .join("");
  };

  global.ForestRenderer = Renderer;
})(window);
