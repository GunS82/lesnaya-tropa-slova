(function () {
  "use strict";

  var data = window.FOREST_DATA;
  if (!data) {
    document.body.innerHTML = "<p style='padding:24px;font-family:sans-serif'>Не найден файл data/content.js</p>";
    return;
  }

  var storage = new ForestStorage(data.storageKey || "forestGrammarProgress");
  var progress = new ForestProgress(storage, data);
  var game = new ForestGame(data, progress);
  var ui = new ForestRenderer(document.getElementById("app"), game);

  function playing() {
    var ex = game.exercise(game.currentId);
    var steps = game.currentSteps();
    if (steps && ui.view) return steps[ui.view.step] || ex;
    return ex;
  }

  function afterStepSuccess() {
    var ex = game.exercise(game.currentId);
    var steps = game.currentSteps();
    if (steps && ui.view && !game.isFinishedStep(ex, ui.view.step)) {
      var step = steps[ui.view.step];
      ui.holdForNextRound(step.note || "Верно!", step.link || step.links);
      return;
    }
    afterSuccess();
    ui.succeed(ex);
  }

  function afterSuccess() {
    var stars = game.completeCurrent();
    var medal = game.medalFor(game.currentId);
    ui.view.stars = stars;
    if (medal && progress.awardMedal(medal.id)) {
      ui.pendingMedal = medal;
    } else {
      ui.pendingMedal = null;
    }
  }

  function goNext() {
    if (ui.pendingMedal) {
      var medal = ui.pendingMedal;
      ui.pendingMedal = null;
      ui.renderMedal(medal);
      return;
    }
    var next = progress.firstOpenId();
    if (next === "finish") {
      ui.renderFinish();
      return;
    }
    ui.renderMap();
  }

  function onChoose(value, node) {
    var ex = playing();
    if (game.checkSingle(ex, value)) {
      node.classList.add("is-correct");
      if (ex.type === "insertWord") {
        var view = document.getElementById("sentence-view");
        if (view) view.innerHTML = ui.blankHtml(ex.sentence, value);
      }
      afterStepSuccess();
    } else {
      ui.fail(ex, node);
    }
  }

  function onPickWord(index, node) {
    var ex = playing();
    if (node.classList.contains("is-used")) return;
    var word = (ui.view.bank && ui.view.bank[Number(index)]) || node.textContent.trim();
    ui.view.chosen.push(word);
    node.classList.add("is-used");
    var built = document.getElementById("built-sentence");
    built.textContent = ui.view.chosen.join(" ");
    if (ui.view.chosen.length !== (ex.words || []).length) return;
    if (game.checkBuild(ex, ui.view.chosen)) {
      built.textContent = ui.view.chosen.join(" ") + ".";
      afterStepSuccess();
    } else {
      ui.fail(ex, built, "Попробуй ещё раз. Предложение начинается с заглавной буквы.");
      ui.view.chosen = [];
      var chips = document.querySelectorAll("#word-bank .chip");
      for (var i = 0; i < chips.length; i += 1) chips[i].classList.remove("is-used", "is-glow");
      built.textContent = "Собери предложение здесь";
      if (game.hintLevel >= 2) ui.glowCorrect(ex);
    }
  }

  function onAddExtra(index, node) {
    var ex = playing();
    var idx = Number(index);
    if (ui.view.placed.indexOf(idx) !== -1) return;
    ui.view.placed.push(idx);
    node.classList.add("is-used");
    document.getElementById("expand-line").textContent = game.buildExpanded(ex, ui.view.placed);
    if (game.checkExpand(ex, ui.view.placed)) {
      afterStepSuccess();
    }
  }

  function onRelation(value, node) {
    var ex = playing();
    var rel = ex.relations[ui.view.step];
    if (!game.checkRelation(rel, value)) {
      ui.fail(ex, node);
      return;
    }
    node.classList.add("is-correct");
    ui.view.done.push(rel);
    ui.view.step += 1;
    if (ui.view.step < ex.relations.length) {
      ui.setOwl("Хорошо! Теперь следующее слово.");
      document.getElementById("exercise").innerHTML = ui.relationStepHtml(ex);
      ui.bindSceneImages(document.getElementById("exercise"));
      return;
    }
    var scheme = document.getElementById("scheme");
    if (scheme) {
      scheme.hidden = false;
      scheme.innerHTML = ui.view.done
        .map(function (item) {
          return (
            "<div><strong>" +
            item.from +
            '</strong><div class="arrow">↓ ' +
            item.question +
            " ↓</div>" +
            item.to +
            "</div>"
          );
        })
        .join("<hr>");
    }
    afterStepSuccess();
  }

  function onToggleToken(index, node) {
    var text = node.getAttribute("data-text");
    var selected = ui.view.selected;
    var at = selected.indexOf(text);
    if (at === -1) {
      selected.push(text);
      node.classList.add("is-selected");
    } else {
      selected.splice(at, 1);
      node.classList.remove("is-selected");
    }
  }

  function onCheckMultiple() {
    var ex = playing();
    var result = game.checkMultiple(ex, ui.view.selected);
    if (result.ok) {
      var tokens = document.querySelectorAll(".token");
      for (var i = 0; i < tokens.length; i += 1) {
        if (tokens[i].classList.contains("is-selected")) tokens[i].classList.add("is-correct");
      }
      afterStepSuccess();
      return;
    }
    var message =
      result.reason === "main"
        ? ex.extraHint || "Попробуй ещё раз. Здесь есть лишнее слово."
        : ex.missingHint || "Попробуй ещё раз. Выбери все нужные слова.";
    ui.fail(ex, document.getElementById("tokens"), message);
    if (game.hintLevel >= 3) ui.glowCorrect(ex);
  }

  function onPickItem(id, node) {
    ui.view.selected = id;
    var cards = document.querySelectorAll(".sentence-card");
    for (var i = 0; i < cards.length; i += 1) cards[i].classList.remove("is-selected");
    node.classList.add("is-selected");
  }

  function onPutBasket(groupId) {
    var ex = playing();
    var itemId = ui.view.selected;
    if (!itemId) {
      ui.setOwl("Сначала нажми карточку, потом корзину.");
      return;
    }
    var item = ex.items.filter(function (entry) {
      return entry.id === itemId;
    })[0];
    var card = document.querySelector('.sentence-card[data-id="' + itemId + '"]');
    if (item.group !== groupId) {
      ui.fail(ex, card);
      if (game.hintLevel >= 2 && item.hintScenes) ui.showHintGallery(item.hintScenes);
      if (game.hintLevel >= 3) {
        var basket = document.querySelector('.basket[data-id="' + item.group + '"]');
        if (basket) basket.classList.add("is-glow");
      }
      return;
    }
    ui.view.placed[itemId] = groupId;
    var drop = document.querySelector('[data-drop="' + groupId + '"]');
    if (card && drop) {
      card.classList.remove("is-selected");
      card.disabled = true;
      drop.appendChild(card);
    }
    ui.view.selected = null;
    if (Object.keys(ui.view.placed).length === ex.items.length) {
      afterStepSuccess();
    }
  }

  function onPairLeft(id, node) {
    ui.view.left = id;
    var items = document.querySelectorAll("#pair-left .pair-item");
    for (var i = 0; i < items.length; i += 1) {
      if (!items[i].classList.contains("is-matched")) items[i].classList.remove("is-selected");
    }
    node.classList.add("is-selected");
  }

  function onPairRight(id, node) {
    var ex = playing();
    var left = ui.view.left;
    if (!left) {
      ui.setOwl("Сначала нажми героя слева, потом действие справа.");
      return;
    }
    if (ex.pairs[left] === id) {
      ui.view.chosen[left] = id;
      var leftNode = document.querySelector('#pair-left .pair-item[data-id="' + left + '"]');
      if (leftNode) {
        leftNode.classList.add("is-matched", "is-correct");
        leftNode.classList.remove("is-selected");
        leftNode.disabled = true;
      }
      node.classList.add("is-matched", "is-correct");
      node.disabled = true;
      ui.view.matchCount = (ui.view.matchCount || 0) + 1;
      var mark = String(ui.view.matchCount);
      if (leftNode) leftNode.setAttribute("data-mark", mark);
      node.setAttribute("data-mark", mark);
      ui.view.left = null;
      if (ex.pairNote) ui.setOwl(ex.pairNote);
      if (game.checkPairs(ex, ui.view.chosen)) {
        afterStepSuccess();
      }
    } else {
      ui.fail(ex, node);
    }
  }

  function onToggleScene(value, node) {
    var selected = ui.view.selected || [];
    var at = selected.indexOf(value);
    if (at === -1) {
      selected.push(value);
      node.classList.add("is-selected");
    } else {
      selected.splice(at, 1);
      node.classList.remove("is-selected");
    }
    ui.view.selected = selected;
  }

  function onCheckScenes() {
    var ex = playing();
    var result = game.checkSceneMultiple(ex, ui.view.selected || []);
    if (result.ok) {
      var choices = document.querySelectorAll(".scene-choice.is-selected");
      for (var i = 0; i < choices.length; i += 1) choices[i].classList.add("is-correct");
      afterStepSuccess();
      return;
    }
    ui.fail(ex, document.getElementById("scene-multi"));
  }

  document.getElementById("app").addEventListener("click", function (event) {
    var btn = event.target.closest("[data-action]");
    if (!btn || btn.disabled) return;
    var action = btn.getAttribute("data-action");
    var id = btn.getAttribute("data-id");

    switch (action) {
      case "start":
        progress.useTopic(progress.state.activeTopic || progress.defaultTopic());
        ui.renderMap();
        break;
      case "continue":
        if (!progress.state.activeTopic) progress.useTopic(progress.defaultTopic());
        ui.renderMap();
        break;
      case "topics":
        ui.renderTopics();
        break;
      case "home":
        ui.renderMenu();
        break;
      case "reset":
        if (window.confirm("Начать тропу сначала? Звёзды и медали сбросятся.")) {
          progress.reset();
          ui.renderMenu();
        }
        break;
      case "open-topic":
        progress.useTopic(id);
        ui.renderMap();
        break;
      case "round-next":
        game.hintLevel = 0;
        ui.view.step += 1;
        ui.el("game-footer").hidden = true;
        ui.prepareFooter(false);
        ui.renderPlaying();
        break;
      case "toggle-scene":
        onToggleScene(btn.getAttribute("data-value"), btn);
        break;
      case "check-scenes":
        onCheckScenes();
        break;
      case "play":
        ui.renderExercise(id);
        break;
      case "to-map":
        ui.renderMap();
        break;
      case "finish":
        ui.renderFinish();
        break;
      case "next":
        goNext();
        break;
      case "medal-continue":
        if (progress.firstOpenId() === "finish") ui.renderFinish();
        else ui.renderMap();
        break;
      case "speak":
        ui.speak(playing());
        break;
      case "toggle-sound":
        ui.soundOn = !ui.soundOn;
        progress.state.sound = ui.soundOn;
        progress.save();
        ui.updateSoundButton();
        break;
      case "choose":
        onChoose(btn.getAttribute("data-value"), btn);
        break;
      case "pick-word":
        onPickWord(btn.getAttribute("data-index"), btn);
        break;
      case "add-extra":
        onAddExtra(btn.getAttribute("data-index"), btn);
        break;
      case "relation":
        onRelation(btn.getAttribute("data-value"), btn);
        break;
      case "toggle-token":
        onToggleToken(btn.getAttribute("data-index"), btn);
        break;
      case "check-multiple":
        onCheckMultiple();
        break;
      case "pick-item":
        onPickItem(id, btn);
        break;
      case "put-basket":
        onPutBasket(id);
        break;
      case "pair-left":
        onPairLeft(id, btn);
        break;
      case "pair-right":
        onPairRight(id, btn);
        break;
      default:
        break;
    }
  });

  ui.soundOn = progress.state.sound !== false;
  ui.renderMenu();
})();
