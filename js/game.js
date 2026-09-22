(function (global) {
  "use strict";

  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function normalize(text) {
    return String(text)
      .replace(/\s+/g, " ")
      .replace(/[!.?]+$/g, "")
      .trim()
      .toLowerCase()
      .replace(/ё/g, "е");
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var left = a.slice().sort();
    var right = b.slice().sort();
    for (var i = 0; i < left.length; i += 1) {
      if (left[i] !== right[i]) return false;
    }
    return true;
  }

  function starsFromMistakes(mistakes, steps) {
    var room = Math.max(1, Math.floor((steps || 1) / 2));
    if (mistakes <= 0) return 3;
    if (mistakes <= room) return 2;
    return 1;
  }

  function Game(data, progress) {
    this.data = data;
    this.progress = progress;
    this.currentId = null;
    this.mistakes = 0;
    this.hintLevel = 0;
  }

  Game.prototype.exercise = function (id) {
    return this.data.exercises[id];
  };

  Game.prototype.begin = function (id) {
    this.currentId = id;
    this.mistakes = 0;
    this.hintLevel = 0;
    return this.exercise(id);
  };

  Game.prototype.registerMistake = function () {
    this.mistakes += 1;
    this.hintLevel = Math.min(3, this.mistakes);
    return this.hintLevel;
  };

  Game.prototype.hintText = function (exercise, parent) {
    var hint2 = exercise.hint2 || (parent && parent.hint2);
    var hint = exercise.hint || (parent && parent.hint);
    if (this.hintLevel >= 2 && hint2) return hint2;
    return hint || "Попробуй ещё раз.";
  };

  Game.prototype.completeCurrent = function () {
    var exercise = this.exercise(this.currentId);
    var steps = exercise && exercise.rounds ? exercise.rounds.length : 1;
    var stars = starsFromMistakes(this.mistakes, steps);
    this.progress.complete(this.currentId, stars, this.mistakes);
    return stars;
  };

  Game.prototype.medalFor = function (id) {
    var medals = this.data.medals || [];
    for (var i = 0; i < medals.length; i += 1) {
      if (medals[i].afterId === id) return medals[i];
    }
    return null;
  };

  Game.prototype.checkSingle = function (exercise, value) {
    if (Array.isArray(exercise.answer)) {
      return exercise.answer.indexOf(value) !== -1;
    }
    return value === exercise.answer;
  };

  Game.prototype.checkSceneMultiple = function (exercise, selected) {
    var needed = exercise.answers || [];
    var extras = selected.filter(function (id) {
      return needed.indexOf(id) === -1;
    });
    if (extras.length) return { ok: false, reason: "extra" };
    if (!sameSet(selected, needed)) return { ok: false, reason: "missing" };
    return { ok: true };
  };

  Game.prototype.checkBuild = function (exercise, words) {
    var built = words.join(" ") + ".";
    var answers = exercise.answers || [];
    var builtNorm = normalize(built);
    for (var i = 0; i < answers.length; i += 1) {
      if (normalize(answers[i]) === builtNorm) return true;
    }
    return false;
  };

  Game.prototype.nextExpectedWord = function (exercise, chosen) {
    var target = (exercise.answers && exercise.answers[0]) || "";
    var expected = normalize(target).split(" ");
    return expected[chosen.length] || "";
  };

  Game.prototype.checkMultiple = function (exercise, selected) {
    var needed = exercise.tokens
      .filter(function (token) {
        return token.role === "secondary";
      })
      .map(function (token) {
        return token.text;
      });
    var extras = selected.filter(function (text) {
      return needed.indexOf(text) === -1;
    });
    if (extras.length) {
      return { ok: false, reason: "main" };
    }
    if (!sameSet(selected, needed)) {
      return { ok: false, reason: "missing" };
    }
    return { ok: true };
  };

  Game.prototype.checkPairs = function (exercise, chosen) {
    var pairs = exercise.pairs;
    var keys = Object.keys(pairs);
    if (Object.keys(chosen).length !== keys.length) return false;
    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      if (chosen[key] !== pairs[key]) return false;
    }
    return true;
  };

  Game.prototype.checkClass = function (exercise, placed) {
    for (var i = 0; i < exercise.items.length; i += 1) {
      var item = exercise.items[i];
      if (placed[item.id] !== item.group) return false;
    }
    return true;
  };

  Game.prototype.checkRelation = function (relation, question) {
    return normalize(question) === normalize(relation.question);
  };

  Game.prototype.buildExpanded = function (exercise, placedIds) {
    var layout = exercise.layout;
    var parts = [];
    if (layout && layout.length) {
      layout.forEach(function (piece) {
        if (piece.extraIndex === undefined || placedIds.indexOf(piece.extraIndex) !== -1) {
          parts.push(piece.text);
        }
      });
    } else {
      parts = exercise.base.slice();
    }
    if (!parts.length) return "";
    var first = parts[0];
    parts[0] = first.charAt(0).toUpperCase() + first.slice(1);
    return parts.join(" ") + ".";
  };

  Game.prototype.checkExpand = function (exercise, placedIds) {
    if (placedIds.length !== exercise.extra.length) return false;
    var built = this.buildExpanded(exercise, placedIds);
    var answers = exercise.answers || [exercise.result];
    var builtNorm = normalize(built);
    return answers.some(function (answer) {
      return normalize(answer) === builtNorm;
    });
  };

  Game.shuffle = shuffle;
  Game.normalize = normalize;
  Game.starsFromMistakes = starsFromMistakes;

  global.ForestGame = Game;
})(window);
