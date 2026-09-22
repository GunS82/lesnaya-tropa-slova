/**
 * Проверка урока «Слова и их значения». Запуск: node js/check-logic.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const context = { window: {}, console };
context.window = context;
vm.createContext(context);

function load(rel) {
  vm.runInContext(fs.readFileSync(path.join(root, rel), "utf8"), context);
}

load("data/content.js");
load("js/storage.js");
load("js/progress.js");
load("js/game.js");

const data = context.window.FOREST_DATA;
const game = new context.window.ForestGame(data, { complete: function () {}, state: {} });
const errors = [];

function assert(cond, msg) {
  if (!cond) errors.push(msg);
}

const topic = data.topics.filter(function (item) {
  return item.id === "wordMeaning";
})[0];
assert(topic && topic.available && !topic.href, "word topic is open");
assert(data.maps.wordMeaning, "word map exists");

const ids = data.maps.wordMeaning.filter(function (node) { return !node.kind; }).map(function (node) { return node.id; });
assert(ids.length === 12, "12 exercises, got " + ids.length);
ids.forEach(function (id) {
  assert(data.exercises[id], "missing exercise " + id);
  assert(id.indexOf("word_meaning_") === 0, "id prefix " + id);
});
Object.keys(data.exercises).forEach(function (id) {
  assert(ids.indexOf(id) !== -1, "exercise not on map: " + id);
});
assert(!data.maps.sentence, "sentence route is not inside this lesson");

const birch = data.exercises.word_meaning_03;
assert(game.checkSingle(birch, "birch"), "birch accepted");
assert(!game.checkSingle(birch, "oak"), "oak rejected");

const berries = data.exercises.word_meaning_07;
assert(
  game.checkSceneMultiple(berries, ["cranberry", "strawberry", "currant", "blueberry"]).ok,
  "berries exact"
);
assert(
  game.checkSceneMultiple(berries, ["cranberry", "strawberry", "currant", "blueberry", "apple"]).reason === "extra",
  "berries extra"
);
assert(game.checkSceneMultiple(berries, ["cranberry", "strawberry"]).reason === "missing", "berries missing");

const animals = data.exercises.word_meaning_05;
const placed = {};
animals.items.forEach(function (item) { placed[item.id] = item.group; });
assert(game.checkClass(animals, placed), "animal groups");
placed.beetle = "birds";
assert(!game.checkClass(animals, placed), "animal groups wrong");

const stars = data.exercises.word_meaning_11.rounds[1];
assert(game.checkPairs(stars, { sky: "sky-pic", shape: "shape-pic", person: "person-pic" }), "star pairs");
assert(!game.checkPairs(stars, { sky: "shape-pic", shape: "sky-pic", person: "person-pic" }), "star pairs wrong");

assert(context.window.ForestGame.starsFromMistakes(0, 1) === 3, "stars clean");
assert(context.window.ForestGame.starsFromMistakes(1, 1) === 2, "stars one miss");
assert(context.window.ForestGame.starsFromMistakes(2, 1) === 1, "stars many miss");
assert(context.window.ForestGame.starsFromMistakes(4, 8) === 2, "quiz still two stars");
assert(context.window.ForestGame.starsFromMistakes(5, 8) === 1, "quiz one star");

function memory() {
  const box = {
    value: null,
    read: function () { return this.value; },
    write: function (value) { this.value = JSON.parse(JSON.stringify(value)); return true; },
    clear: function () { this.value = null; }
  };
  return box;
}

const saved = memory();
saved.value = {
  version: 1,
  started: true,
  completed: { word_meaning_01: { stars: 3, mistakes: 0 } },
  medals: [],
  totalStars: 3,
  sound: false
};
const restored = new context.window.ForestProgress(saved, data);
assert(restored.isCompleted("word_meaning_01"), "saved stars stay");
assert(restored.state.sound === false, "saved sound stays");
assert(restored.defaultTopic() === "wordMeaning", "default topic");
assert(restored.trail().some(function (node) { return node.id === "word_meaning_02"; }), "trail opens");

data.maps.other = [
  { id: "start", kind: "start" },
  { id: "other_01" },
  { id: "other_02" },
  { id: "finish", kind: "finish" }
];
const box = memory();
const progress = new context.window.ForestProgress(box, data);
progress.useTopic("wordMeaning");
ids.forEach(function (id) { progress.complete(id, 3, 0); });
progress.useTopic("other");
assert(progress.isCompleted("word_meaning_12"), "word route kept");
assert(!progress.isCompleted("other_01"), "other route not auto-completed");
assert(progress.isUnlocked("other_01"), "first task of a new route is open");
assert(!progress.isUnlocked("other_02"), "second task of a new route stays closed");
progress.useTopic("wordMeaning");
assert(progress.firstOpenId() === "finish", "finished route stays finished");

if (errors.length) {
  console.error("FAIL\n" + errors.join("\n"));
  process.exit(1);
}
console.log("OK " + ids.length + " exercises");
