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
const freshIds = [
  "meaning_direct_01",
  "meaning_direct_02",
  "meaning_direct_03",
  "meaning_direct_04",
  "synonym_01",
  "synonym_02",
  "synonym_03",
  "synonym_04",
  "antonym_01",
  "antonym_02",
  "antonym_03",
  "antonym_04",
  "antonym_context_01",
  "words_final_02"
];
assert(ids.length === 26, "26 exercises, got " + ids.length);
ids.forEach(function (id) {
  assert(data.exercises[id], "missing exercise " + id);
});
for (var n = 1; n <= 12; n += 1) {
  var oldId = "word_meaning_" + (n < 10 ? "0" : "") + n;
  assert(ids[n - 1] === oldId, "old order " + oldId);
}
freshIds.forEach(function (id, index) {
  assert(ids[12 + index] === id, "new order " + id);
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

const ships = data.exercises.meaning_direct_01;
assert(ships.type === "multiStep" && ships.steps.length === 2, "ships has two steps");
assert(!game.isFinishedStep(ships, 0), "multiStep waits for the last step");
assert(game.isFinishedStep(ships, 1), "multiStep ends on the last step");
assert(game.checkSingle(ships.steps[0], "ships"), "ships are the direct meaning");
assert(!game.checkSingle(ships.steps[0], "clouds"), "clouds are not the direct meaning");
assert(game.checkSingle(ships.steps[1], "clouds"), "clouds are figurative");

const direct = data.exercises.meaning_direct_02;
const directPlaced = {};
direct.items.forEach(function (item) { directPlaced[item.id] = item.group; });
assert(game.checkClass(direct, directPlaced), "direct and figurative groups");
directPlaced.hands = "direct";
assert(!game.checkClass(direct, directPlaced), "golden hands are figurative");
assert(game.checkSingle(data.exercises.meaning_direct_03, "water"), "running water is figurative");
assert(!game.checkSingle(data.exercises.meaning_direct_03, "horse"), "horse is direct");
assert(game.checkSingle(data.exercises.meaning_direct_04.steps[3], "Нет"), "sunset is not a lamp");

const family = data.exercises.synonym_03.rounds[0];
assert(game.checkMultiple(family, ["ловкий", "шустрый", "юркий"]).ok, "synonym family");
assert(game.checkMultiple(family, ["ловкий", "шустрый", "юркий", "медленный"]).reason === "main", "extra synonym rejected");
assert(game.checkMultiple(family, ["ловкий", "шустрый"]).reason === "missing", "synonym family incomplete");
assert(
  game.checkMultiple(data.exercises.synonym_04, ["зябнет", "мёрзнет", "стынет"]).ok,
  "cold synonyms"
);

const friends = data.exercises.synonym_02;
assert(
  game.checkPairs(friends, { brave: "bold", work: "toil", think: "ponder", right: "true" }),
  "synonym pairs"
);
assert(
  !game.checkPairs(friends, { brave: "toil", work: "bold", think: "ponder", right: "true" }),
  "wrong synonym pair"
);
const opposites = data.exercises.antonym_02;
assert(
  game.checkPairs(opposites, {
    clean: "dirty",
    brave: "coward",
    yesterday: "tomorrow",
    praise: "scold",
    joy: "sadness"
  }),
  "antonym pairs"
);
assert(
  !game.checkPairs(opposites, {
    clean: "coward",
    brave: "dirty",
    yesterday: "tomorrow",
    praise: "scold",
    joy: "sadness"
  }),
  "wrong antonym pair is not accepted"
);

function stepById(exercise, id) {
  return exercise.steps.filter(function (step) { return step.id === id; })[0];
}
const contextTask = data.exercises.antonym_context_01;
assert(game.checkSingle(stepById(contextTask, "pond"), "глубокий"), "shallow pond is deep");
assert(!game.checkSingle(stepById(contextTask, "pond"), "крупный"), "pond is not large-dropped");
assert(game.checkSingle(stepById(contextTask, "rain"), "крупный"), "fine rain is heavy-dropped");
assert(!game.checkSingle(stepById(contextTask, "rain"), "глубокий"), "rain is not deep");
assert(game.checkSingle(stepById(contextTask, "bag"), "тяжёлая"), "light bag is heavy");
assert(!game.checkSingle(stepById(contextTask, "bag"), "трудная"), "bag is not difficult");
assert(game.checkSingle(stepById(contextTask, "task"), "трудная"), "easy task is difficult");
assert(!game.checkSingle(stepById(contextTask, "task"), "тяжёлая"), "task is not heavy");
assert(game.isFinishedStep(contextTask, 5) && !game.isFinishedStep(contextTask, 4), "context task has six steps");

const quiz = data.exercises.words_final_02;
game.begin("words_final_02");
assert(game.currentSteps().length === 12, "quiz draws 12");
assert(!game.isFinishedStep(quiz, 0) && game.isFinishedStep(quiz, 11), "quiz ends after 12");
game.currentSteps().forEach(function (step) {
  assert(quiz.pool.indexOf(step) !== -1, "quiz step comes from the pool");
});
function poolById(id) {
  return quiz.pool.filter(function (item) { return item.id === id; })[0];
}
assert(game.checkSingle(poolById("pond"), "глубокий"), "quiz pond");
assert(game.checkSingle(poolById("rain"), "крупный"), "quiz rain");
assert(game.checkSingle(poolById("bag"), "тяжёлая"), "quiz bag");
assert(game.checkSingle(poolById("task"), "трудная"), "quiz task");
var sample = ["a", "b", "c", "d", "e", "f"];
var moved = false;
for (var spin = 0; spin < 30 && !moved; spin += 1) {
  moved = context.window.ForestGame.shuffle(sample).join() !== sample.join();
}
assert(moved, "answers can leave their original order");

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
assert(data.topics.some(function (item) { return item.id === "sentence" && item.href; }), "sentence trail stays available");

const gate = new context.window.ForestProgress(memory(), data);
gate.useTopic("wordMeaning");
for (var old = 1; old <= 12; old += 1) {
  gate.complete("word_meaning_" + (old < 10 ? "0" : "") + old, 3, 0);
}
assert(gate.isUnlocked("meaning_direct_01"), "new block opens after the old route");
assert(!gate.isUnlocked("meaning_direct_02"), "later new task stays closed");
assert(gate.starsFor("word_meaning_01") === 3, "earlier stars stay");

const replay = new context.window.ForestProgress(memory(), data);
replay.useTopic("wordMeaning");
replay.complete("word_meaning_01", 3, 0);
replay.complete("word_meaning_01", 1, 5);
assert(replay.starsFor("word_meaning_01") === 3, "replay keeps the best stars");
assert(replay.state.totalStars === 3, "replay does not add a weaker result");

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
