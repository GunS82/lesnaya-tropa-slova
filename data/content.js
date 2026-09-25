/**
 * Урок «Слова и их значения» и «Семьи слов».
 * Страницы 41–64 учебника Канакиной и Горецкого, 2 класс, часть 1.
 * Слог, ударение и перенос начинаются со страницы 65 и в этот выпуск не входят.
 */
window.FOREST_DATA = {
  title: "Лесная тропа знаний",
  subject: "Русский язык",
  grade: "2 класс",
  storageKey: "forestWordMeaningProgress",

  topics: [
    {
      id: "wordMeaning",
      title: "Слова и их значения",
      subtitle: "Значение · Синонимы · Антонимы · Корень · Окончание",
      available: true
    },
    {
      id: "sentence",
      title: "Предложение",
      subtitle: "Другая тропа",
      available: true,
      href: "https://guns82.github.io/lesnaya-tropa-znaniy/"
    }
  ],

  scenes: {
    meadow: { emoji: "🌲", caption: "Лесная поляна", alt: "Лесная поляна" },
    mushroom: { emoji: "🍄", caption: "Гриб", alt: "Гриб" },
    cup: { emoji: "☕", caption: "Чашка", alt: "Чашка" },
    tree: { emoji: "🌳", caption: "Дерево", alt: "Лиственное дерево" },
    spoon: { emoji: "🥄", caption: "Ложка", alt: "Ложка" },
    girl: { emoji: "👧", caption: "Девочка", alt: "Девочка на поляне" },
    birch: { emoji: "🌿", caption: "Берёза", alt: "Берёза с белой корой" },
    spruce: { emoji: "🌲", caption: "Ель", alt: "Ель" },
    oak: { emoji: "🌳", caption: "Дуб", alt: "Дуб" },
    library: { emoji: "📖", caption: "Лесная библиотека", alt: "Сова и большая книга" },
    highway: { emoji: "🛣️", caption: "Шоссе", alt: "Дорога с твёрдым покрытием" },
    sparrow: { emoji: "🐦", caption: "Воробей", alt: "Воробей" },
    student: { emoji: "🎒", caption: "Ученик", alt: "Ученик" },
    hedgehog: { emoji: "🦔", caption: "Ёж", alt: "Ёж" },
    apple: { emoji: "🍎", caption: "Яблоко", alt: "Яблоко" },
    cranberry: { emoji: "🔴", caption: "Клюква", alt: "Клюква" },
    strawberry: { emoji: "🍓", caption: "Земляника", alt: "Земляника" },
    currant: { emoji: "🟣", caption: "Смородина", alt: "Смородина" },
    blueberry: { emoji: "🫐", caption: "Черника", alt: "Черника" },
    "sewing-needle": { emoji: "🧵", caption: "Швейная игла", alt: "Игла для шитья" },
    "pine-needles": { emoji: "🌲", caption: "Иголки сосны", alt: "Иголки сосны" },
    "hedgehog-needles": { emoji: "🦔", caption: "Иголки ежа", alt: "Иголки ежа" },
    hat: { emoji: "🎩", caption: "Шляпка", alt: "Головной убор" },
    "mushroom-cap": { emoji: "🍄", caption: "Шляпка гриба", alt: "Верхняя часть гриба" },
    "nail-head": { emoji: "🔩", caption: "Шляпка гвоздя", alt: "Верхняя часть гвоздя" },
    "star-sky": { emoji: "⭐", caption: "Звезда на небе", alt: "Звезда на ночном небе" },
    "star-shape": { emoji: "⭐", caption: "Бумажная звезда", alt: "Пятиконечная бумажная звезда" },
    "star-person": { emoji: "🎤", caption: "Артист на сцене", alt: "Артист выступает на сцене" },
    ships: { emoji: "⛵", caption: "Корабли", alt: "Корабли плывут по воде" },
    clouds: { emoji: "☁️", caption: "Облака", alt: "Облака плывут по небу" },
    "running-horse": { emoji: "🐎", caption: "Лошадь", alt: "Лошадь бежит по лугу" },
    "running-water": { emoji: "💧", caption: "Ручей", alt: "Вода бежит по камням" },
    "soft-bread": { emoji: "🍞", caption: "Хлеб", alt: "Мягкий хлеб" },
    "kind-person": { emoji: "🙂", caption: "Человек", alt: "Добрый спокойный человек" },
    "burning-firewood": { emoji: "🔥", caption: "Костёр", alt: "Горят дрова" },
    "red-cheeks": { emoji: "😊", caption: "Щёки", alt: "Румяные щёки" },
    "wall-carpet": { emoji: "🧶", caption: "Ковёр", alt: "Ковёр на стене" },
    "snow-carpet": { emoji: "❄️", caption: "Снег", alt: "Снег укрыл землю" },
    sunset: { emoji: "🌅", caption: "Закат", alt: "Солнце скрывается за горизонтом" },
    "spring-water": { emoji: "💧", caption: "Родник", alt: "Родник в лесу" },
    aspen: { emoji: "🍂", caption: "Осинка", alt: "Осенняя осинка на ветру" },
    "ant-sea": { emoji: "🌊", caption: "Море и муравей", alt: "Огромное море и маленький муравей" },
    woodpecker: { emoji: "🐦", caption: "Дятел", alt: "Дятел на дереве и червяк" },
    "pond-shallow": { emoji: "🏞️", caption: "Пруд", alt: "Небольшой мелкий пруд" },
    "rain-drops": { emoji: "🌧️", caption: "Дождь", alt: "Мелкий дождь" },
    "light-bag": { emoji: "👜", caption: "Сумка", alt: "Лёгкая сумка" },
    "heavy-bag": { emoji: "🎒", caption: "Сумка", alt: "Тяжёлая сумка" },
    "easy-task": { emoji: "🧩", caption: "Задача", alt: "Простая задачка из двух частей" },
    medicine: { emoji: "🥄", caption: "Лекарство", alt: "Пузырёк и ложка" },
    "gold-chain": { emoji: "📿", caption: "Цепочка", alt: "Золотая цепочка" },
    "golden-hands": { emoji: "👐", caption: "Руки", alt: "Умелые руки мастера" },
    "heavy-punishment": { emoji: "🪑", caption: "Угол", alt: "Тихий угол и табурет" },
    "burning-dawn": { emoji: "🌄", caption: "Заря", alt: "Горящая заря" },
    brothers: { emoji: "👦", caption: "Братья", alt: "Три брата рядом" },
    drum: { emoji: "🥁", caption: "Барабан", alt: "Барабан" },
    "mushroom-small": { emoji: "🍄", caption: "Маленький гриб", alt: "Маленький гриб" },
    "mushroom-picker": { emoji: "🧺", caption: "Грибник", alt: "Человек с корзиной грибов" },
    "mushroom-soup": { emoji: "🍲", caption: "Грибной суп", alt: "Миска грибного супа" },
    "family-people": { emoji: "👨‍👩‍👧", caption: "Семья", alt: "Мама, сын, дедушка и тётя" },
    house: { emoji: "🏠", caption: "Дом", alt: "Обычный дом" },
    "house-small": { emoji: "🏚️", caption: "Маленький дом", alt: "Маленький дом" },
    "house-large": { emoji: "🏰", caption: "Огромный дом", alt: "Огромный дом" },
    "house-shabby": { emoji: "🏘️", caption: "Невзрачный домик", alt: "Маленький невзрачный дом" },
    sea: { emoji: "🌊", caption: "Море", alt: "Море" },
    "sea-sailor": { emoji: "⚓", caption: "Моряк", alt: "Моряк у моря" },
    "light-lamp": { emoji: "💡", caption: "Свет", alt: "Зажжённая лампа" },
    "white-hare": { emoji: "🐇", caption: "Белый заяц", alt: "Белый заяц" },
    mountain: { emoji: "⛰️", caption: "Гора", alt: "Гора" },
    grief: { emoji: "🌧️", caption: "Горе", alt: "Грустный человек под дождём" },
    "wasp-aspen": { emoji: "🐝", caption: "Оса и осина", alt: "Оса и осина" },
    fox: { emoji: "🦊", caption: "Лиса", alt: "Лиса" },
    foxes: { emoji: "🦊", caption: "Лисы", alt: "Несколько лис" },
    "feed-bowl": { emoji: "🥣", caption: "Корм", alt: "Миска корма" },
    "apples-many": { emoji: "🍎", caption: "Яблоки", alt: "Несколько яблок" },
    "stars-many": { emoji: "✨", caption: "Звёзды", alt: "Много звёзд на небе" },
    river: { emoji: "🏞️", caption: "Река", alt: "Река" },
    "storm-before": { emoji: "⛈️", caption: "Перед грозой", alt: "Тёмные тучи перед грозой" },
    "storm-after": { emoji: "🌦️", caption: "После грозы", alt: "Лес после грозы" },
    anthill: { emoji: "🐜", caption: "Муравейник", alt: "Муравьи у гнезда" },
    "tree-roots": { emoji: "🌳", caption: "Дерево", alt: "Большое дерево с корнями" },
    "fish-family": { emoji: "🐟", caption: "Рыба и рыбак", alt: "Рыба и рыбак" },
    "elephant-family": { emoji: "🐘", caption: "Слоны", alt: "Слон и слонёнок" }
  },

  words: [
    { word: "берёза", root: "берёз", ending: "а", lemmaId: "bereza" },
    { word: "берёзы", root: "берёз", ending: "ы", lemmaId: "bereza" },
    { word: "берёзе", root: "берёз", ending: "е", lemmaId: "bereza" },
    { word: "берёзой", root: "берёз", ending: "ой", lemmaId: "bereza" },
    { word: "трава", root: "трав", ending: "а", lemmaId: "trava" },
    { word: "травы", root: "трав", ending: "ы", lemmaId: "trava" },
    { word: "травка", root: "трав", ending: "", lemmaId: "travka" },
    { word: "река", root: "рек", ending: "а", lemmaId: "reka" },
    { word: "реки", root: "рек", ending: "и", lemmaId: "reka" },
    { word: "реке", root: "рек", ending: "е", lemmaId: "reka" },
    { word: "рекой", root: "рек", ending: "ой", lemmaId: "reka" },
    { word: "гриб", root: "гриб", ending: "", lemmaId: "grib" },
    { word: "грибок", root: "гриб", ending: "", lemmaId: "gribok" },
    { word: "грибник", root: "гриб", ending: "", lemmaId: "gribnik" },
    { word: "грибной", root: "гриб", ending: "ой", lemmaId: "gribnoy" }
  ],

  relations: [
    { a: "гора", b: "горный", kind: "root" },
    { a: "горе", b: "гористый", kind: "none" },
    { a: "оса", b: "осина", kind: "none" },
    { a: "лиса", b: "леса", kind: "none" },
    { a: "корм", b: "кормить", kind: "root" },
    { a: "смелый", b: "храбрый", kind: "synonym" },
    { a: "смелый", b: "смелость", kind: "root" },
    { a: "берёза", b: "берёзы", kind: "form" },
    { a: "трава", b: "травка", kind: "root" },
    { a: "трава", b: "травы", kind: "form" },
    { a: "лётчик", b: "пилот", kind: "synonym" },
    { a: "быстро", b: "скоро", kind: "synonym" },
    { a: "правильный", b: "верный", kind: "synonym" },
    { a: "быстрый", b: "быстрота", kind: "root" },
    { a: "липнуть", b: "липучий", kind: "root" },
    { a: "грусть", b: "грустный", kind: "root" },
    { a: "рука", b: "руки", kind: "form" },
    { a: "торт", b: "торты", kind: "form" },
    { a: "море", b: "моря", kind: "form" },
    { a: "лес", b: "леса", kind: "form" },
    { a: "роса", b: "росинка", kind: "root" },
    { a: "масло", b: "маслице", kind: "root" }
  ],

  medals: [
    {
      id: "word-knower",
      title: "Знаток слов",
      icon: "🍓",
      afterId: "word_meaning_07",
      text: "Теперь ты умеешь объяснять значение слова и объединять слова по смыслу."
    },
    {
      id: "hidden-sense",
      title: "Мастер скрытого смысла",
      icon: "🌅",
      afterId: "meaning_direct_04",
      text: "Ты научился отличать прямое значение слова от переносного."
    },
    {
      id: "word-friend",
      title: "Друг слов",
      icon: "🤝",
      afterId: "synonym_04",
      text: "Ты умеешь находить слова, близкие по значению."
    },
    {
      id: "root-keeper",
      title: "Хранитель корней",
      icon: "🌳",
      afterId: "family_roots_10",
      text: "Ты умеешь находить родственные слова и их общий корень."
    }
  ],

  finish: {
    title: "Мастер слова",
    lead: "Ты прошёл лес семейных слов: от большого дерева до мастерской окончаний.",
    abilities: [
      { icon: "🌳", text: "Я нахожу корень" },
      { icon: "👨‍👩‍👧", text: "Я узнаю однокоренные слова" },
      { icon: "🔧", text: "Я умею менять форму слова" }
    ],
    notes: [
      {
        title: "Однокоренные слова",
        text: "Имеют общий корень и близкое значение.",
        example: "лес, лесок, лесной, лесник"
      },
      { title: "Корень", text: "Главная общая часть однокоренных слов." },
      {
        title: "Формы одного слова",
        text: "Значение слова остаётся тем же, но часть слова изменяется.",
        example: "река, реки, реке, рекой"
      },
      {
        title: "Окончание",
        text: "Изменяемая часть слова. Помогает связывать слова в предложении."
      }
    ]
  },

  maps: {
    wordMeaning: [
      { id: "start", title: "Старт", icon: "🏠", kind: "start", zone: "words" },
      { id: "word_meaning_01", title: "Что означает слово?", icon: "🍄", zone: "words" },
      { id: "word_meaning_02", title: "Угадай слово", icon: "🔍", zone: "words" },
      { id: "word_meaning_03", title: "Берёза", icon: "🌿", zone: "words" },
      { id: "word_meaning_04", title: "Толковый словарь", icon: "📖", zone: "words" },
      { id: "word_meaning_05", title: "Разложи по группам", icon: "🧺", zone: "words" },
      { id: "word_meaning_06", title: "Кто чем занимается?", icon: "🏡", zone: "words" },
      { id: "word_meaning_07", title: "Ягодная поляна", icon: "🍓", zone: "words" },
      { id: "bridge", title: "Мостик в долину многих значений", icon: "🌉", kind: "bridge" },
      { id: "word_meaning_08", title: "Волшебные иголки", icon: "🧵", zone: "many" },
      { id: "word_meaning_09", title: "Три шляпки", icon: "🎩", zone: "many" },
      { id: "word_meaning_10", title: "Одно или несколько?", icon: "✨", zone: "many" },
      { id: "word_meaning_11", title: "Три звезды", icon: "⭐", zone: "many" },
      { id: "word_meaning_12", title: "Испытание значений", icon: "🦉", zone: "many" },
      { id: "checkpoint_meaning", title: "Долина волшебных слов", icon: "🌅", kind: "bridge" },
      { id: "meaning_direct_01", title: "Корабли и облака", icon: "⛵", zone: "valley" },
      { id: "meaning_direct_02", title: "Прямо или образно?", icon: "✨", zone: "valley" },
      { id: "meaning_direct_03", title: "Бежит, но куда?", icon: "🐎", zone: "valley" },
      { id: "meaning_direct_04", title: "Найди переносный смысл", icon: "🌄", zone: "valley" },
      { id: "bridge_friends", title: "Поляна слов-друзей", icon: "🤝", kind: "bridge" },
      { id: "synonym_01", title: "Родник и ключ", icon: "💧", zone: "friends" },
      { id: "synonym_02", title: "Найди друга слову", icon: "🤝", zone: "friends" },
      { id: "synonym_03", title: "Семья синонимов", icon: "🌿", zone: "friends" },
      { id: "synonym_04", title: "Замёрзшая осинка", icon: "🍂", zone: "friends" },
      { id: "bridge_opposites", title: "Мост противоположностей", icon: "🌉", kind: "bridge" },
      { id: "antonym_01", title: "Большой и маленький", icon: "🌊", zone: "opposites" },
      { id: "antonym_02", title: "Найди противоположность", icon: "↔", zone: "opposites" },
      { id: "antonym_03", title: "Пословицы", icon: "📜", zone: "opposites" },
      { id: "antonym_04", title: "Дятел — друг или враг?", icon: "🐦", zone: "opposites" },
      { id: "antonym_context_01", title: "Антоним меняется", icon: "🦉", zone: "opposites" },
      { id: "words_final_02", title: "Башня слов", icon: "🏰", zone: "opposites" },
      { id: "bridge_forest", title: "Лес семейных слов", icon: "🌳", kind: "bridge" },
      { id: "family_brother_01", title: "Кто родственник?", icon: "👦", zone: "forest" },
      { id: "family_mushroom_02", title: "Грибная семья", icon: "🍄", zone: "forest" },
      { id: "family_names_03", title: "Родственники или слова?", icon: "👨‍👩‍👧", zone: "forest" },
      { id: "family_house_04", title: "Что общего?", icon: "🏠", zone: "forest" },
      { id: "bridge_roots", title: "Поляна корней", icon: "🌱", kind: "bridge" },
      { id: "family_mark_05", title: "Найди корень", icon: "🌿", zone: "roots" },
      { id: "family_hide_06", title: "Спрячь корень", icon: "🍃", zone: "roots" },
      { id: "family_sort_07", title: "Собери семьи", icon: "🌳", zone: "roots" },
      { id: "bridge_maze", title: "Лабиринт похожих слов", icon: "🌀", kind: "bridge" },
      { id: "family_lookalike_08", title: "Похожие, но чужие", icon: "🦊", zone: "maze" },
      { id: "family_synonym_09", title: "Синоним или родственник?", icon: "🧺", zone: "maze" },
      { id: "family_roots_10", title: "Найди корень сам", icon: "⭐", zone: "maze" },
      { id: "bridge_workshop", title: "Мастерская окончаний", icon: "🔧", kind: "bridge" },
      { id: "form_same_11", title: "Одно слово или разные?", icon: "🍎", zone: "workshop" },
      { id: "form_change_12", title: "Измени форму", icon: "🌿", zone: "workshop" },
      { id: "form_ending_13", title: "Найди окончание", icon: "✏️", zone: "workshop" },
      { id: "form_repair_14", title: "Почини предложение", icon: "⛈️", zone: "workshop" },
      { id: "form_vs_root_15", title: "Форма или родственник?", icon: "🌉", zone: "workshop" },
      { id: "family_final_16", title: "Дерево слов", icon: "🌳", zone: "workshop" },
      { id: "finish", title: "Финиш", icon: "🏆", kind: "finish", zone: "workshop" }
    ]
  },

  exercises: {
    word_meaning_01: {
      type: "rounds",
      title: "Что означает слово?",
      owl: "У каждого слова есть своё значение. Найди предмет, который оно называет.",
      hint: "Посмотри на слово вверху и найди такой же предмет.",
      hint2: "Осталась одна подходящая картинка. Она и есть значение слова.",
      success: "У каждого слова есть своё значение.",
      speak: "Что означает слово? Выбери подходящую картинку.",
      rounds: [
        {
          type: "sceneChoice",
          prompt: "ГРИБ",
          question: "Какая картинка подходит к этому слову?",
          options: [
            { id: "tree", scene: "tree", label: "Дерево", showLabel: false },
            { id: "mushroom", scene: "mushroom", label: "Гриб", showLabel: false },
            { id: "cup", scene: "cup", label: "Чашка", showLabel: false }
          ],
          answer: "mushroom",
          note: "Слово «гриб» называет этот предмет. Это его значение.",
          speak: "Гриб. Какая картинка подходит к этому слову?"
        },
        {
          type: "sceneChoice",
          prompt: "ЧАШКА",
          question: "Какая картинка подходит к этому слову?",
          owl: "Теперь другое слово.",
          options: [
            { id: "spoon", scene: "spoon", label: "Ложка", showLabel: false },
            { id: "girl", scene: "girl", label: "Девочка", showLabel: false },
            { id: "cup", scene: "cup", label: "Чашка", showLabel: false }
          ],
          answer: "cup",
          note: "Слово «чашка» называет этот предмет. Это его значение.",
          speak: "Чашка. Какая картинка подходит к этому слову?"
        },
        {
          type: "sceneChoice",
          prompt: "ДЕРЕВО",
          question: "Какая картинка подходит к этому слову?",
          owl: "И ещё одно слово.",
          options: [
            { id: "mushroom", scene: "mushroom", label: "Гриб", showLabel: false },
            { id: "tree", scene: "tree", label: "Дерево", showLabel: false },
            { id: "spoon", scene: "spoon", label: "Ложка", showLabel: false }
          ],
          answer: "tree",
          note: "Слово «дерево» называет этот предмет. Это его значение.",
          speak: "Дерево. Какая картинка подходит к этому слову?"
        }
      ]
    },

    word_meaning_02: {
      type: "rounds",
      title: "Угадай слово",
      owl: "Я объясню значение. Назови слово.",
      hint: "Прочитай описание ещё раз и отбрось то, что ему не подходит.",
      hint2: "Осталось мало вариантов. Выбери слово, которое точно подходит к описанию.",
      success: "По описанию можно узнать слово. Это и есть его значение.",
      speak: "Угадай слово по описанию.",
      rounds: [
        {
          type: "singleChoice",
          question: "Первый месяц осени.",
          options: ["сентябрь", "декабрь", "июль", "март"],
          answer: "сентябрь",
          speak: "Первый месяц осени."
        },
        {
          type: "singleChoice",
          scene: "sparrow",
          question: "Маленькая птица с серо-коричневыми перьями.",
          owl: "Следующее описание.",
          options: ["воробей", "ворона", "утка", "журавль"],
          answer: "воробей",
          speak: "Маленькая птица с серо-коричневыми перьями."
        },
        {
          type: "singleChoice",
          scene: "apple",
          question: "Плод яблони.",
          owl: "Что это за плод?",
          options: ["яблоко", "груша", "слива", "орех"],
          answer: "яблоко",
          speak: "Плод яблони."
        },
        {
          type: "singleChoice",
          scene: "student",
          question: "Тот, кто учится в школе.",
          owl: "Кто это?",
          options: ["ученик", "учитель", "повар", "врач"],
          answer: "ученик",
          speak: "Тот, кто учится в школе."
        },
        {
          type: "singleChoice",
          scene: "hedgehog",
          question: "Маленький зверёк с иглами.",
          owl: "Последнее описание на этой полянке.",
          options: ["ёж", "заяц", "белка", "лиса"],
          answer: "ёж",
          speak: "Маленький зверёк с иглами."
        }
      ]
    },

    word_meaning_03: {
      type: "sceneChoice",
      title: "Узнай берёзу",
      question: "Какое дерево подходит к описанию: лиственное дерево с белой корой?",
      owl: "Слово можно узнать по его признакам.",
      options: [
        { id: "spruce", scene: "spruce", label: "Ель", showLabel: false },
        { id: "birch", scene: "birch", label: "Берёза", showLabel: false },
        { id: "oak", scene: "oak", label: "Дуб", showLabel: false }
      ],
      answer: "birch",
      hint: "Ищи светлую кору и листья, не иголки.",
      hint2: "У ели иголки, у дуба тёмная кора. Остаётся белое дерево.",
      success: "Верно. Так мы объяснили значение слова «берёза».",
      speak: "Какое дерево подходит к описанию: лиственное дерево с белой корой?"
    },

    word_meaning_04: {
      type: "rounds",
      title: "Толковый словарь",
      scene: "library",
      owl: "Если слово незнакомое, его значение можно посмотреть в книге.",
      hint: "Подумай, где объясняют значения слов.",
      hint2: "Нужная книга объясняет, что слово обозначает.",
      success: "Значение неизвестного слова узнают в толковом словаре.",
      speak: "Где можно узнать значение незнакомого слова?",
      rounds: [
        {
          type: "singleChoice",
          scene: "library",
          question: "Где можно узнать точное значение незнакомого слова?",
          options: ["в толковом словаре", "в календаре", "в таблице умножения", "в нотной тетради"],
          answer: "в толковом словаре",
          note: "Толковый словарь объясняет, что обозначает слово.",
          speak: "Где можно узнать точное значение незнакомого слова?"
        },
        {
          type: "singleChoice",
          scene: "highway",
          prompt: "ШОССЕ",
          question: "Какое значение у этого слова?",
          owl: "Вот слово из словаря. Выбери его значение.",
          options: ["дорога с твёрдым покрытием", "узкая лесная тропинка", "мост через реку", "железная дорога"],
          answer: "дорога с твёрдым покрытием",
          note: "Шоссе — это дорога с твёрдым покрытием.",
          speak: "Шоссе. Какое значение у этого слова?"
        }
      ]
    },

    word_meaning_05: {
      type: "classification",
      title: "Разложи по группам",
      scene: "meadow",
      question: "Нажми слово, потом его группу.",
      owl: "Слова можно объединить по общему значению.",
      groups: [
        { id: "insects", title: "Насекомые" },
        { id: "birds", title: "Птицы" },
        { id: "fish", title: "Рыбы" },
        { id: "beasts", title: "Звери" }
      ],
      items: [
        { id: "beetle", text: "жук", emoji: "🐞", group: "insects" },
        { id: "butterfly", text: "бабочка", emoji: "🦋", group: "insects" },
        { id: "mosquito", text: "комар", emoji: "🦟", group: "insects" },
        { id: "pigeon", text: "голубь", emoji: "🐦", group: "birds" },
        { id: "starling", text: "скворец", emoji: "🐦", group: "birds" },
        { id: "carp", text: "карась", emoji: "🐟", group: "fish" },
        { id: "ruffe", text: "ёрш", emoji: "🐟", group: "fish" },
        { id: "hare", text: "заяц", emoji: "🐇", group: "beasts" },
        { id: "bear", text: "медведь", emoji: "🐻", group: "beasts" }
      ],
      hint: "Спроси себя: это летает, плавает или ходит по лесу?",
      hint2: "Жук, бабочка и комар — насекомые. Голубь и скворец — птицы.",
      success: "Ты объединил слова по их значению.",
      speak: "Разложи слова по группам: насекомые, птицы, рыбы и звери."
    },

    word_meaning_06: {
      type: "classification",
      title: "Кто чем занимается?",
      question: "Разложи слова по общим группам.",
      owl: "У каждой группы слов есть своё общее дело.",
      groups: [
        { id: "people", title: "Люди" },
        { id: "tools", title: "Инструменты" },
        { id: "music", title: "Музыка" },
        { id: "sport", title: "Игры и спорт" }
      ],
      items: [
        { id: "teacher", text: "учитель", emoji: "👩‍🏫", group: "people" },
        { id: "builder", text: "строитель", emoji: "👷", group: "people" },
        { id: "pilot", text: "лётчик", emoji: "✈️", group: "people" },
        { id: "hammer", text: "молоток", emoji: "🔨", group: "tools" },
        { id: "shovel", text: "лопата", emoji: "🛠️", group: "tools" },
        { id: "axe", text: "топор", emoji: "🪓", group: "tools" },
        { id: "guitar", text: "гитара", emoji: "🎸", group: "music" },
        { id: "violin", text: "скрипка", emoji: "🎻", group: "music" },
        { id: "accordion", text: "баян", emoji: "🎶", group: "music" },
        { id: "chess", text: "шахматы", emoji: "♟️", group: "sport" },
        { id: "hockey", text: "хоккей", emoji: "🏒", group: "sport" },
        { id: "tennis", text: "теннис", emoji: "🎾", group: "sport" }
      ],
      hint: "Сначала реши, это человек, вещь, музыка или игра.",
      hint2: "Молоток, лопата и топор — инструменты. Гитара, скрипка и баян — музыка.",
      success: "Слова можно объединять в группы по общему значению.",
      speak: "Разложи слова по группам: люди, инструменты, музыка, игры и спорт."
    },

    word_meaning_07: {
      type: "sceneMultiple",
      title: "Ягодная поляна",
      scene: "meadow",
      question: "Какие картинки можно назвать одним словом «ягоды»?",
      owl: "Общее слово называет сразу несколько похожих предметов.",
      options: [
        { id: "cranberry", scene: "cranberry", label: "клюква" },
        { id: "strawberry", scene: "strawberry", label: "земляника" },
        { id: "currant", scene: "currant", label: "смородина" },
        { id: "blueberry", scene: "blueberry", label: "черника" },
        { id: "apple", scene: "apple", label: "яблоко" },
        { id: "mushroom", scene: "mushroom", label: "гриб" }
      ],
      answers: ["cranberry", "strawberry", "currant", "blueberry"],
      hint: "Ягоды маленькие и растут на кустиках. Яблоко и гриб сюда не входят.",
      hint2: "Отметь клюкву, землянику, смородину и чернику.",
      success: "«Ягода» — общее название для разных ягод.",
      speak: "Какие картинки можно назвать одним словом ягоды?"
    },

    word_meaning_08: {
      type: "rounds",
      title: "Волшебные иголки",
      owl: "Одно слово иногда подходит к разным предметам.",
      hint: "Посмотри, как называются все три предмета.",
      hint2: "Названия одинаковые, а сами предметы разные.",
      success: "Одно слово «иголка» может иметь несколько значений.",
      speak: "Посмотри на иголки. Что у них общего в названиях?",
      rounds: [
        {
          type: "singleChoice",
          gallery: ["sewing-needle", "pine-needles", "hedgehog-needles"],
          question: "Что общего в названиях?",
          options: ["все называются иголками", "это один и тот же предмет", "все сделаны из металла"],
          answer: "все называются иголками",
          note: "Игла для шитья, иголки сосны и иголки ежа называются одним словом.",
          speak: "Что общего в названиях этих предметов?"
        },
        {
          type: "singleChoice",
          gallery: ["sewing-needle", "pine-needles", "hedgehog-needles"],
          question: "Предметы одинаковые?",
          owl: "Название одно. А сами предметы?",
          options: ["Нет", "Да"],
          answer: "Нет",
          note: "Одно слово «иголка» может иметь несколько значений.",
          speak: "Эти предметы одинаковые?"
        }
      ]
    },

    word_meaning_09: {
      type: "rounds",
      title: "Три шляпки",
      owl: "Слово «шляпка» любит верхнюю часть предмета.",
      hint: "Посмотри на верх каждой картинки.",
      hint2: "Слово подходит ко всем трём картинкам.",
      success: "У этих частей похожая форма и положение сверху.",
      speak: "Соедини слово шляпка с подходящими картинками.",
      rounds: [
        {
          type: "sceneMultiple",
          question: "К каким картинкам подходит слово «шляпка»?",
          options: [
            { id: "hat", scene: "hat", label: "головной убор" },
            { id: "mushroom-cap", scene: "mushroom-cap", label: "гриб" },
            { id: "nail-head", scene: "nail-head", label: "гвоздь" }
          ],
          answers: ["hat", "mushroom-cap", "nail-head"],
          note: "Это разные предметы, но слово «шляпка» подходит ко всем.",
          speak: "К каким картинкам подходит слово шляпка?"
        },
        {
          type: "singleChoice",
          question: "Почему слово «шляпка» подходит ко всем?",
          owl: "Подумай, чем эти части похожи.",
          options: [
            "У этих частей похожая форма и положение сверху",
            "Они все сшиты из ткани",
            "Это один и тот же предмет",
            "Они все растут в лесу"
          ],
          answer: "У этих частей похожая форма и положение сверху",
          speak: "Почему слово шляпка подходит ко всем этим предметам?"
        }
      ]
    },

    word_meaning_10: {
      type: "classification",
      title: "Одно или несколько?",
      question: "У слова одно значение или несколько?",
      owl: "Если ошибёшься, я покажу картинки. Они подскажут.",
      groups: [
        { id: "one", title: "Одно значение" },
        { id: "many", title: "Несколько значений" }
      ],
      items: [
        { id: "highway", text: "шоссе", emoji: "🛣️", group: "one", hintScenes: ["highway"] },
        { id: "birch", text: "берёза", emoji: "🌿", group: "one", hintScenes: ["birch"] },
        { id: "sparrow", text: "воробей", emoji: "🐦", group: "one", hintScenes: ["sparrow"] },
        {
          id: "needle",
          text: "игла",
          emoji: "🧵",
          group: "many",
          hintScenes: ["sewing-needle", "pine-needles", "hedgehog-needles"]
        },
        {
          id: "hat",
          text: "шляпка",
          emoji: "🎩",
          group: "many",
          hintScenes: ["hat", "mushroom-cap", "nail-head"]
        },
        {
          id: "star",
          text: "звезда",
          emoji: "⭐",
          group: "many",
          hintScenes: ["star-sky", "star-shape", "star-person"]
        }
      ],
      hint: "Если предмет можно показать только одной картинкой, значение одно.",
      hint2: "Игла, шляпка и звезда подходят к разным картинкам. У них несколько значений.",
      success: "Ты отличил слова с одним значением от слов с несколькими значениями.",
      speak: "Разложи слова: у каких одно значение, а у каких несколько?"
    },

    word_meaning_11: {
      type: "rounds",
      title: "Три звезды",
      owl: "Слово «звезда» ждёт тебя в трёх разных местах.",
      hint: "Посмотри на картинки: небо, бумага и сцена — это не одно и то же.",
      hint2: "Соедини каждое значение с его картинкой.",
      success: "Слово «звезда» здесь означает разное: небесное тело, фигуру и знаменитого человека.",
      speak: "Посмотри на три звезды. Везде ли слово означает одно и то же?",
      rounds: [
        {
          type: "singleChoice",
          prompt: "ЗВЕЗДА",
          gallery: ["star-sky", "star-shape", "star-person"],
          question: "Везде ли слово «звезда» означает одно и то же?",
          options: ["Нет", "Да"],
          answer: "Нет",
          note: "Нет. На каждой картинке у слова своё значение.",
          speak: "Везде ли слово звезда означает одно и то же?"
        },
        {
          type: "matchPairs",
          question: "Соедини значение и картинку.",
          owl: "Теперь подбери значение к каждой звезде.",
          left: [
            { id: "sky", text: "небесное тело" },
            { id: "shape", text: "фигура" },
            { id: "person", text: "знаменитый человек" }
          ],
          right: [
            { id: "sky-pic", text: "небо", scene: "star-sky" },
            { id: "shape-pic", text: "бумажная звезда", scene: "star-shape" },
            { id: "person-pic", text: "артист", scene: "star-person" }
          ],
          pairs: {
            sky: "sky-pic",
            shape: "shape-pic",
            person: "person-pic"
          },
          speak: "Соедини значение слова звезда с картинкой."
        }
      ]
    },

    word_meaning_12: {
      type: "rounds",
      title: "Испытание значений",
      owl: "Последняя тропа. Здесь только то, что ты уже умеешь.",
      hint: "Вспомни полянку, словарь и картинки с несколькими значениями.",
      hint2: "Ответ уже встречался на этой тропе.",
      success: "Ты прошёл испытание значений.",
      speak: "Испытание значений. Ответь на короткие вопросы.",
      rounds: [
        {
          type: "singleChoice",
          question: "Где узнают значение неизвестного слова?",
          options: ["в толковом словаре", "в календаре", "в нотной тетради"],
          answer: "в толковом словаре",
          speak: "Где узнают значение неизвестного слова?"
        },
        {
          type: "singleChoice",
          scene: "birch",
          question: "Какое описание подходит к этой картинке?",
          owl: "Посмотри на дерево.",
          options: [
            "Лиственное дерево с белой корой",
            "Хвойное дерево с иголками",
            "Дерево с жёлудями и тёмной корой"
          ],
          answer: "Лиственное дерево с белой корой",
          speak: "Какое описание подходит к этой картинке?"
        },
        {
          type: "singleChoice",
          gallery: ["cranberry", "currant", "strawberry"],
          question: "Какое общее слово подходит?",
          owl: "У этих картинок есть общее имя.",
          options: ["ягоды", "грибы", "инструменты"],
          answer: "ягоды",
          speak: "Какое общее слово подходит к этим картинкам?"
        },
        {
          type: "singleChoice",
          gallery: ["sewing-needle", "hedgehog-needles"],
          question: "Слово «иголка» однозначное или многозначное?",
          owl: "Одно слово — разные предметы.",
          options: ["многозначное", "однозначное"],
          answer: "многозначное",
          speak: "Слово иголка однозначное или многозначное?"
        },
        {
          type: "singleChoice",
          scene: "mushroom-cap",
          question: "Что здесь означает слово «шляпка»?",
          owl: "Посмотри, какая часть выделена самой картинкой.",
          options: ["верхняя часть гриба", "весь лес", "ножка гриба"],
          answer: "верхняя часть гриба",
          speak: "Что здесь означает слово шляпка?"
        },
        {
          type: "singleChoice",
          scene: "highway",
          prompt: "ШОССЕ",
          question: "Сколько значений мы разбирали у этого слова?",
          owl: "Вспомни словарную полянку.",
          options: ["одно", "несколько"],
          answer: "одно",
          speak: "Сколько значений у слова шоссе?"
        },
        {
          type: "singleChoice",
          gallery: ["star-sky", "star-shape", "star-person"],
          question: "Что объединяет картинки?",
          owl: "Три разные картины и одно слово.",
          options: [
            "их можно назвать словом «звезда»",
            "это один и тот же предмет",
            "они все находятся на небе"
          ],
          answer: "их можно назвать словом «звезда»",
          speak: "Что объединяет эти картинки?"
        },
        {
          type: "singleChoice",
          question: "Если у слова несколько значений, как узнать нужное?",
          owl: "Последний вопрос.",
          options: ["посмотреть, как оно употреблено", "сосчитать буквы", "произнести громче"],
          answer: "посмотреть, как оно употреблено",
          speak: "Если у слова несколько значений, как узнать нужное?"
        }
      ]
    },

    meaning_direct_01: {
      type: "multiStep",
      title: "Корабли и облака",
      owl: "Одно и то же слово может называть настоящее действие или только похожее.",
      hint: "Подумай: слово используется буквально или предмет только похож на другой?",
      hint2: "Корабли движутся по воде. Облака только похожи на них.",
      success: "Облака не плавают в воде. Их движение похоже на плавное движение кораблей.",
      speak: "Корабли и облака. Где слово плывут означает настоящее движение по воде?",
      steps: [
        {
          type: "sceneChoice",
          question: "В каком случае слово «плывут» означает настоящее движение по воде?",
          options: [
            { id: "ships", scene: "ships", label: "Корабли плывут." },
            { id: "clouds", scene: "clouds", label: "Облака плывут." }
          ],
          answer: "ships",
          note: "Это прямое значение.",
          hint2: "Настоящее движение по воде — у кораблей.",
          speak: "В каком случае слово плывут означает настоящее движение по воде?"
        },
        {
          type: "sceneChoice",
          question: "Где слово «плывут» используется образно?",
          options: [
            { id: "ships", scene: "ships", label: "Корабли плывут." },
            { id: "clouds", scene: "clouds", label: "Облака плывут." }
          ],
          answer: "clouds",
          note: "Облака не плавают в воде. Их движение похоже на плавное движение кораблей.",
          hint2: "Облака не находятся в воде.",
          speak: "Где слово плывут используется образно?"
        }
      ]
    },

    meaning_direct_02: {
      type: "classification",
      title: "Прямо или образно?",
      owl: "Разложи карточки: где слово называет предмет прямо, а где только сравнивает.",
      hint: "Подумай: предмет настоящий или только похож на другой?",
      hint2: "Цепочка, сумка и костёр — настоящие. Руки, наказание и заря названы образно.",
      success: "Ты отличил прямое значение от переносного.",
      speak: "Разложи карточки на прямое и переносное значение.",
      extraHint: "Эта карточка стоит в другой группе.",
      groups: [
        { id: "direct", title: "Прямое значение" },
        { id: "figurative", title: "Переносное значение" }
      ],
      items: [
        { id: "chain", text: "золотая цепочка", group: "direct", scene: "gold-chain" },
        { id: "hands", text: "золотые руки", group: "figurative", scene: "golden-hands" },
        { id: "bag", text: "тяжёлая сумка", group: "direct", scene: "heavy-bag" },
        { id: "punishment", text: "тяжёлое наказание", group: "figurative", scene: "heavy-punishment" },
        { id: "fire", text: "костёр горит", group: "direct", scene: "burning-firewood" },
        { id: "dawn", text: "заря горит", group: "figurative", scene: "burning-dawn" }
      ]
    },

    meaning_direct_03: {
      type: "sceneChoice",
      title: "Бежит, но куда?",
      owl: "Слово «бежит» не всегда про ноги.",
      question: "Где слово «бежит» употреблено в переносном значении?",
      hint: "Подумай: у кого есть ноги, а кто только быстро движется?",
      hint2: "Вода не бегает ногами.",
      success: "Вода не имеет ног. Её быстрое движение напоминает бег.",
      speak: "Где слово бежит употреблено в переносном значении? Лошадь бежит или вода бежит?",
      options: [
        { id: "horse", scene: "running-horse", label: "Лошадь бежит." },
        { id: "water", scene: "running-water", label: "Вода бежит." }
      ],
      answer: "water"
    },

    meaning_direct_04: {
      type: "multiStep",
      title: "Найди переносный смысл",
      owl: "В каждой паре одно слово употреблено прямо, другое — образно.",
      hint: "Подумай: так бывает на самом деле или это сравнение?",
      hint2: "Образное слово переносит признак с одного предмета на другой.",
      success: "Здесь имеется в виду, что солнце скрылось за горизонтом.",
      speak: "Найди переносное значение.",
      steps: [
        {
          type: "sceneChoice",
          question: "Где значение переносное?",
          options: [
            { id: "bread", scene: "soft-bread", label: "мягкий хлеб" },
            { id: "person", scene: "kind-person", label: "мягкий характер" }
          ],
          answer: "person",
          note: "Характер не трогают руками. «Мягкий» здесь значит добрый и спокойный.",
          hint2: "Хлеб и правда мягкий на ощупь.",
          speak: "Где значение переносное: мягкий хлеб или мягкий характер?"
        },
        {
          type: "sceneChoice",
          question: "Где значение переносное?",
          options: [
            { id: "fire", scene: "burning-firewood", label: "горят дрова" },
            { id: "cheeks", scene: "red-cheeks", label: "горят щёки" }
          ],
          answer: "cheeks",
          note: "Щёки не горят огнём. Так говорят, когда они краснеют.",
          hint2: "Дрова горят по-настоящему.",
          speak: "Где значение переносное: горят дрова или горят щёки?"
        },
        {
          type: "sceneChoice",
          question: "Где значение переносное?",
          options: [
            { id: "carpet", scene: "wall-carpet", label: "ковёр на стене" },
            { id: "snow", scene: "snow-carpet", label: "снежный ковёр" }
          ],
          answer: "snow",
          note: "Снег только похож на ковёр: он укрыл землю.",
          hint2: "На стене висит настоящий ковёр.",
          speak: "Где значение переносное: ковёр на стене или снежный ковёр?"
        },
        {
          type: "singleChoice",
          scene: "sunset",
          question: "Солнце действительно погасло как лампочка?",
          options: ["Нет", "Да"],
          answer: "Нет",
          note: "Здесь имеется в виду, что солнце скрылось за горизонтом.",
          hint2: "Солнце не лампочка. Оно ушло за край неба.",
          speak: "Солнце действительно погасло как лампочка?"
        }
      ]
    },

    synonym_01: {
      type: "singleChoice",
      title: "Родник и ключ",
      scene: "spring-water",
      labels: ["РОДНИК", "КЛЮЧ"],
      owl: "Посмотри на лесной источник. Его можно назвать двумя словами.",
      question: "Эти слова называют совершенно разные предметы или могут обозначать одно и то же?",
      options: ["одно и то же", "совершенно разные", "одно из слов неправильное"],
      answer: "одно и то же",
      hint: "Оба слова могут назвать воду, которая выходит из земли.",
      hint2: "Родник и ключ — два имени одного источника.",
      success: "Слова могут звучать по-разному, но иметь одинаковое или очень близкое значение.",
      term: "СИНОНИМЫ",
      speak: "Родник и ключ. Эти слова называют разные предметы или одно и то же?"
    },

    synonym_02: {
      type: "matchPairs",
      title: "Найди друга слову",
      owl: "Соедини слова, которые близки по значению.",
      hint: "Ищи слово, которым можно заменить первое почти без потери смысла.",
      hint2: "Храбрый человек — смелый. Работать — значит трудиться.",
      pairNote: "Эти слова близки по значению.",
      success: "Ты нашёл слова-друзья.",
      speak: "Соедини близкие по значению слова.",
      left: [
        { id: "brave", text: "храбрый" },
        { id: "work", text: "работать" },
        { id: "think", text: "думать" },
        { id: "right", text: "правильный" }
      ],
      right: [
        { id: "toil", text: "трудиться" },
        { id: "ponder", text: "размышлять" },
        { id: "true", text: "верный" },
        { id: "bold", text: "смелый" }
      ],
      pairs: {
        brave: "bold",
        work: "toil",
        think: "ponder",
        right: "true"
      }
    },

    synonym_03: {
      type: "rounds",
      title: "Собери семью синонимов",
      owl: "Это не родственные слова. Здесь нужны слова, близкие по смыслу.",
      hint: "Оставь слова, которые можно поставить рядом как друзей по смыслу.",
      hint2: "Лишнее слово говорит о другом: о медленном, тяжёлом, молчании или рисовании.",
      success: "В семье синонимов слова разные, а смысл близкий.",
      extraHint: "Одно из выбранных слов сюда не подходит.",
      missingHint: "Нужны три близких слова.",
      speak: "Выбери три близких по значению слова.",
      rounds: [
        {
          type: "findMultiple",
          scene: false,
          question: "Выбери три близких по значению слова.",
          tokens: [
            { text: "ловкий" },
            { text: "шустрый" },
            { text: "юркий" },
            { text: "медленный" },
            { text: "тяжёлый" }
          ],
          answers: ["ловкий", "шустрый", "юркий"],
          note: "Ловкий, шустрый и юркий — про быстрое умелое движение.",
          speak: "Выбери три близких слова: ловкий, шустрый, юркий, медленный, тяжёлый."
        },
        {
          type: "findMultiple",
          scene: false,
          question: "Выбери три близких по значению слова.",
          tokens: [
            { text: "разговаривать" },
            { text: "беседовать" },
            { text: "общаться" },
            { text: "молчать" },
            { text: "рисовать" }
          ],
          answers: ["разговаривать", "беседовать", "общаться"],
          note: "Разговаривать, беседовать и общаться — про разговор с другими.",
          speak: "Выбери три близких слова про разговор."
        }
      ]
    },

    synonym_04: {
      type: "findMultiple",
      title: "Замёрзшая осинка",
      scene: "aspen",
      owl: "Осинка дрожит на ветру. Автор подбирает близкие слова, чтобы холод был заметнее.",
      question: "Выбери слова, близкие по смыслу.",
      hint: "Ищи слова про холод, а не про тепло и не про бег.",
      hint2: "Зябнет, стынет и мёрзнет говорят об одном: становится холодно.",
      extraHint: "Здесь есть слово не про холод.",
      missingHint: "Про холод подходят три слова.",
      success: "Автор использует несколько близких слов, чтобы ярче показать холод.",
      speak: "Выбери слова, близкие по смыслу: зябнет, мёрзнет, стынет, нагревается, бежит.",
      tokens: [
        { text: "зябнет" },
        { text: "мёрзнет" },
        { text: "стынет" },
        { text: "нагревается" },
        { text: "бежит" }
      ],
      answers: ["зябнет", "мёрзнет", "стынет"]
    },

    antonym_01: {
      type: "singleChoice",
      title: "Большой и маленький",
      scene: "ant-sea",
      labels: ["большой", "маленький"],
      owl: "Море огромное. Муравей на берегу маленький.",
      question: "Эти слова близкие или противоположные по значению?",
      options: ["противоположные", "близкие", "одинаковые"],
      answer: "противоположные",
      hint: "Большой и маленький тянут в разные стороны.",
      hint2: "Одно слово про огромное, другое про крошечное.",
      success: "Слова с противоположным значением называют антонимами.",
      term: "АНТОНИМЫ",
      reveal: [
        { a: "день", b: "ночь" },
        { a: "смеяться", b: "плакать" }
      ],
      speak: "Большой и маленький. Эти слова близкие или противоположные?"
    },

    antonym_02: {
      type: "matchPairs",
      title: "Найди противоположность",
      owl: "Соедини слово с его противоположностью.",
      hint: "Противоположное слово переворачивает смысл.",
      hint2: "Чистому противостоит грязный, храброму — трусливый.",
      pairNote: "Это слова с противоположным значением.",
      success: "Ты соединил противоположные слова.",
      speak: "Найди противоположные слова.",
      left: [
        { id: "clean", text: "чистый" },
        { id: "brave", text: "храбрый" },
        { id: "yesterday", text: "вчера" },
        { id: "praise", text: "хвалить" },
        { id: "joy", text: "радость" }
      ],
      right: [
        { id: "dirty", text: "грязный" },
        { id: "coward", text: "трусливый" },
        { id: "tomorrow", text: "завтра" },
        { id: "scold", text: "ругать" },
        { id: "sadness", text: "грусть" }
      ],
      pairs: {
        clean: "dirty",
        brave: "coward",
        yesterday: "tomorrow",
        praise: "scold",
        joy: "sadness"
      }
    },

    antonym_03: {
      type: "multiStep",
      title: "Пословицы потеряли слова",
      owl: "В пословице пропущено слово. Оно противоположно тому, что уже сказано.",
      hint: "Найди слово, которое спорит с первым.",
      hint2: "В пословице часто стоят рядом противоположные слова.",
      success: "В пословицах противоположные слова делают мысль яркой.",
      speak: "Вставь пропущенное слово в пословицу.",
      reveal: [
        { a: "вымочит", b: "высушит" },
        { a: "свет", b: "тьма" },
        { a: "взять", b: "отдать" },
        { a: "смелый", b: "трусливый" }
      ],
      steps: [
        {
          type: "insertWord",
          sentence: "Дождик вымочит, а солнышко □.",
          question: "Какое слово пропущено?",
          options: ["высушит", "намочит", "спрячется"],
          answer: "высушит",
          link: { a: "вымочит", b: "высушит" },
          note: "Дождик мочит, солнышко сушит.",
          hint2: "Солнышко делает обратное дождю: убирает воду.",
          speak: "Дождик вымочит, а солнышко… высушит, намочит или спрячется?"
        },
        {
          type: "insertWord",
          sentence: "Ученье — свет, а неученье — □.",
          question: "Какое слово пропущено?",
          options: ["тьма", "лампа", "книга"],
          answer: "тьма",
          link: { a: "свет", b: "тьма" },
          note: "Свет и тьма стоят друг против друга.",
          hint2: "Противоположность света — темнота.",
          speak: "Ученье — свет, а неученье — …?"
        },
        {
          type: "insertWord",
          sentence: "Умел взять — умей и □.",
          question: "Какое слово пропущено?",
          options: ["отдать", "спрятать", "купить"],
          answer: "отдать",
          link: { a: "взять", b: "отдать" },
          note: "Взять и отдать — противоположные действия.",
          hint2: "Если взял, обратное действие — вернуть.",
          speak: "Умел взять — умей и …?"
        },
        {
          type: "insertWord",
          sentence: "На смелого собака лает, а □ кусает.",
          question: "Какое слово пропущено?",
          options: ["трусливого", "смелого", "доброго"],
          answer: "трусливого",
          link: { a: "смелый", b: "трусливый" },
          note: "Смелый и трусливый — противоположные слова.",
          hint2: "Рядом со смелым в пословице стоит трусливый.",
          speak: "На смелого собака лает, а кого кусает?"
        }
      ]
    },

    antonym_04: {
      type: "matchPairs",
      title: "Дятел — друг или враг?",
      scene: "woodpecker",
      owl: "Дятел долбит дерево и достаёт червяков. Для кого он кто?",
      hint: "Подумай, кому дятел помогает, а кому мешает.",
      hint2: "Червякам он опасен. Деревьям он полезен.",
      pairNote: "Друг и враг — слова с противоположным значением.",
      success: "Друг и враг — слова с противоположным значением.",
      speak: "Соедини: червякам и деревьям. Кто для них дятел — друг или враг?",
      left: [
        { id: "worms", text: "червякам" },
        { id: "trees", text: "деревьям" }
      ],
      right: [
        { id: "enemy", text: "враг" },
        { id: "friend", text: "друг" }
      ],
      pairs: {
        worms: "enemy",
        trees: "friend"
      }
    },

    antonym_context_01: {
      type: "multiStep",
      title: "Антоним меняется",
      owl: "Одно и то же слово в разных сочетаниях смотрит на разных противников.",
      hint: "Смотри на весь смысл сочетания, а не только на первое слово.",
      hint2: "Противоположность зависит от того, о чём идёт речь.",
      success: "Одно слово может иметь разные антонимы. Смотри на весь смысл.",
      speak: "Подбери противоположное слово к сочетанию.",
      reveal: [
        { a: "мелкий пруд", b: "глубокий пруд" },
        { a: "мелкий дождь", b: "крупный дождь" },
        { a: "лёгкая сумка", b: "тяжёлая сумка" },
        { a: "лёгкая задача", b: "трудная задача" },
        { a: "сладкое яблоко", b: "кислое яблоко" },
        { a: "сладкое лекарство", b: "горькое лекарство" }
      ],
      steps: [
        {
          id: "pond",
          type: "singleChoice",
          scene: "pond-shallow",
          prompt: "мелкий пруд",
          question: "Какое слово противоположно здесь?",
          options: ["глубокий", "крупный", "тяжёлый"],
          answer: "глубокий",
          note: "Пруд бывает мелким или глубоким.",
          hint2: "У пруда смотрят на глубину.",
          speak: "Мелкий пруд. Противоположное слово: глубокий, крупный или тяжёлый?"
        },
        {
          id: "rain",
          type: "singleChoice",
          scene: "rain-drops",
          prompt: "мелкий дождь",
          question: "Какое слово противоположно здесь?",
          options: ["глубокий", "крупный", "тяжёлый"],
          answer: "крупный",
          links: [
            { a: "мелкий пруд", b: "глубокий пруд" },
            { a: "мелкий дождь", b: "крупный дождь" }
          ],
          note: "Одно слово может иметь разные антонимы. Смотри на весь смысл.",
          hint2: "Дождь не бывает глубоким. Его капли бывают крупными.",
          speak: "Мелкий дождь. Противоположное слово: глубокий, крупный или тяжёлый?"
        },
        {
          id: "bag",
          type: "singleChoice",
          scene: "light-bag",
          prompt: "лёгкая сумка",
          question: "Какое слово противоположно здесь?",
          options: ["тяжёлая", "трудная", "горькая"],
          answer: "тяжёлая",
          link: { a: "лёгкая сумка", b: "тяжёлая сумка" },
          note: "Сумку поднимают. Ей противостоит тяжёлая сумка.",
          hint2: "Сумка лёгкая по весу.",
          speak: "Лёгкая сумка. Что ей противоположно?"
        },
        {
          id: "task",
          type: "singleChoice",
          scene: "easy-task",
          prompt: "лёгкая задача",
          question: "Какое слово противоположно здесь?",
          options: ["тяжёлая", "трудная", "горькая"],
          answer: "трудная",
          link: { a: "лёгкая задача", b: "трудная задача" },
          note: "Задачу не взвешивают. Лёгкая задача — это нетрудная.",
          hint2: "Про задачу говорят: лёгкая или трудная.",
          speak: "Лёгкая задача. Что ей противоположно?"
        },
        {
          id: "apple",
          type: "singleChoice",
          scene: "apple",
          prompt: "сладкое яблоко",
          question: "Какое слово противоположно здесь?",
          options: ["кислое", "горькое", "тяжёлое"],
          answer: "кислое",
          link: { a: "сладкое яблоко", b: "кислое яблоко" },
          note: "У яблока сладкому вкусу противостоит кислый.",
          hint2: "Яблоко бывает сладким или кислым.",
          speak: "Сладкое яблоко. Какой вкус ему противоположен?"
        },
        {
          id: "medicine",
          type: "singleChoice",
          scene: "medicine",
          prompt: "сладкое лекарство",
          question: "Какое слово противоположно здесь?",
          options: ["кислое", "горькое", "тяжёлое"],
          answer: "горькое",
          link: { a: "сладкое лекарство", b: "горькое лекарство" },
          note: "Лекарство чаще горькое, а не кислое.",
          hint2: "Про лекарство говорят: сладкое или горькое.",
          speak: "Сладкое лекарство. Какой вкус ему противоположен?"
        }
      ]
    },

    words_final_02: {
      type: "quiz",
      title: "Башня слов",
      count: 12,
      owl: "Двенадцать коротких вопросов из того, что ты уже умеешь.",
      hint: "Вспомни прямое и переносное, друзей слова и противоположности.",
      hint2: "Смотри на всё сочетание, если слово уже встречалось в разных парах.",
      success: "Башня слов пройдена.",
      speak: "Башня слов. Короткий вопрос.",
      pool: [
        {
          type: "singleChoice",
          scene: "gold-chain",
          question: "«Золотая цепочка» — какое это значение?",
          options: ["прямое", "переносное"],
          answer: "прямое",
          speak: "Золотая цепочка. Это прямое или переносное значение?"
        },
        {
          type: "singleChoice",
          scene: "golden-hands",
          question: "«Золотые руки» — какое это значение?",
          options: ["переносное", "прямое"],
          answer: "переносное",
          speak: "Золотые руки. Это прямое или переносное значение?"
        },
        {
          type: "singleChoice",
          scene: "clouds",
          question: "«Плывут облака» — какое это значение?",
          options: ["переносное", "прямое"],
          answer: "переносное",
          speak: "Плывут облака. Это прямое или переносное значение?"
        },
        {
          type: "singleChoice",
          scene: "running-horse",
          question: "«Лошадь бежит» — какое это значение?",
          options: ["прямое", "переносное"],
          answer: "прямое",
          speak: "Лошадь бежит. Это прямое или переносное значение?"
        },
        {
          type: "singleChoice",
          scene: "running-water",
          question: "«Вода бежит» — какое это значение?",
          options: ["переносное", "прямое"],
          answer: "переносное",
          speak: "Вода бежит. Это прямое или переносное значение?"
        },
        {
          type: "singleChoice",
          scene: "soft-bread",
          question: "«Мягкий хлеб» — какое это значение?",
          options: ["прямое", "переносное"],
          answer: "прямое",
          speak: "Мягкий хлеб. Это прямое или переносное значение?"
        },
        {
          type: "singleChoice",
          scene: "red-cheeks",
          question: "«Горят щёки» — какое это значение?",
          options: ["переносное", "прямое"],
          answer: "переносное",
          speak: "Горят щёки. Это прямое или переносное значение?"
        },
        {
          type: "singleChoice",
          question: "Какое слово близко к слову «храбрый»?",
          options: ["смелый", "трусливый", "грустный"],
          answer: "смелый",
          speak: "Какое слово близко к слову храбрый?"
        },
        {
          type: "singleChoice",
          question: "Какое слово близко к слову «думать»?",
          options: ["размышлять", "молчать", "бежать"],
          answer: "размышлять",
          speak: "Какое слово близко к слову думать?"
        },
        {
          type: "singleChoice",
          question: "Какое слово близко к слову «работать»?",
          options: ["трудиться", "отдыхать", "терять"],
          answer: "трудиться",
          speak: "Какое слово близко к слову работать?"
        },
        {
          type: "singleChoice",
          question: "Какое слово противоположно слову «радость»?",
          options: ["грусть", "смех", "свет"],
          answer: "грусть",
          speak: "Какое слово противоположно слову радость?"
        },
        {
          type: "singleChoice",
          question: "Какое слово противоположно слову «взять»?",
          options: ["отдать", "держать", "найти"],
          answer: "отдать",
          speak: "Какое слово противоположно слову взять?"
        },
        {
          type: "singleChoice",
          question: "Какое слово противоположно слову «чистый»?",
          options: ["грязный", "белый", "новый"],
          answer: "грязный",
          speak: "Какое слово противоположно слову чистый?"
        },
        {
          id: "rain",
          type: "singleChoice",
          scene: "rain-drops",
          prompt: "мелкий дождь",
          question: "Какое слово здесь противоположно?",
          options: ["крупный", "глубокий", "тяжёлый"],
          answer: "крупный",
          speak: "Мелкий дождь. Что противоположно: крупный, глубокий или тяжёлый?"
        },
        {
          id: "pond",
          type: "singleChoice",
          scene: "pond-shallow",
          prompt: "мелкий пруд",
          question: "Какое слово здесь противоположно?",
          options: ["глубокий", "крупный", "горький"],
          answer: "глубокий",
          speak: "Мелкий пруд. Что противоположно?"
        },
        {
          id: "bag",
          type: "singleChoice",
          scene: "light-bag",
          prompt: "лёгкая сумка",
          question: "Какое слово здесь противоположно?",
          options: ["тяжёлая", "трудная", "горькая"],
          answer: "тяжёлая",
          speak: "Лёгкая сумка. Что противоположно?"
        },
        {
          id: "task",
          type: "singleChoice",
          scene: "easy-task",
          prompt: "лёгкая задача",
          question: "Какое слово здесь противоположно?",
          options: ["трудная", "тяжёлая", "кислая"],
          answer: "трудная",
          speak: "Лёгкая задача. Что противоположно?"
        },
        {
          type: "singleChoice",
          scene: "apple",
          prompt: "сладкое яблоко",
          question: "Какое слово здесь противоположно?",
          options: ["кислое", "горькое", "глубокое"],
          answer: "кислое",
          speak: "Сладкое яблоко. Что противоположно?"
        },
        {
          type: "singleChoice",
          scene: "medicine",
          prompt: "сладкое лекарство",
          question: "Какое слово здесь противоположно?",
          options: ["горькое", "кислое", "крупное"],
          answer: "горькое",
          speak: "Сладкое лекарство. Что противоположно?"
        },
        {
          type: "singleChoice",
          scene: "spring-water",
          question: "Какие слова близки: родник и ключ?",
          options: ["да, это синонимы", "нет, это антонимы", "нет, это одно и то же написание"],
          answer: "да, это синонимы",
          speak: "Родник и ключ — близкие слова?"
        }
      ]
    },

    family_brother_01: {
      type: "wordFamily",
      title: "Кто родственник?",
      scene: "brothers",
      prompt: "БРАТ",
      question: "Выбери родственные слова, а не родственников-людей.",
      root: "брат",
      tokens: [
        { text: "брат", scene: "brothers" },
        { text: "братик", scene: "brothers" },
        { text: "братишка", scene: "brothers" },
        { text: "сестра", scene: "family-people" },
        { text: "барабан", scene: "drum" }
      ],
      answers: ["брат", "братик", "братишка"],
      owl: "Слово «брат» ищет свою словесную семью.",
      hint: "Родственные слова должны иметь общую часть и быть близкими по смыслу.",
      hint2: "Сестра — человек-родственник, но слово на «брат» не похоже. Барабан тоже чужой.",
      extraHint: "Барабан и сестра в эту семью слов не входят.",
      missingHint: "В семье три слова: брат, братик и братишка.",
      success: "Родственные слова должны иметь общую часть и быть близкими по смыслу.",
      speak: "Брат. Выбери родственные слова: братик, братишка, сестра или барабан."
    },

    family_mushroom_02: {
      type: "wordFamily",
      title: "Грибная семья",
      scene: "mushroom",
      prompt: "ГРИБ",
      question: "Собери семью слова «гриб».",
      root: "гриб",
      tokens: [
        { text: "гриб", scene: "mushroom" },
        { text: "грибок", scene: "mushroom-small" },
        { text: "грибник", scene: "mushroom-picker" },
        { text: "грибной", scene: "mushroom-soup" },
        { text: "лес", scene: "tree" },
        { text: "ягода", scene: "strawberry" }
      ],
      answers: ["гриб", "грибок", "грибник", "грибной"],
      owl: "В центре большой гриб. Кто из слов его родственник?",
      hint: "Родственные слова и про гриб, и с общей частью «гриб».",
      hint2: "Лес и ягода растут рядом, но это другие слова.",
      extraHint: "Лес и ягода здесь лишние.",
      missingHint: "Нужны гриб, грибок, грибник и грибной.",
      success: "У всех этих слов общий корень «гриб».",
      speak: "Собери семью слова гриб."
    },

    family_names_03: {
      type: "singleChoice",
      title: "Родственники или названия родственников?",
      scene: "family-people",
      question: "В какой группе слова родственные?",
      groupsShow: [
        { title: "Группа 1", words: ["мама", "сын", "дедушка", "тётя"] },
        { title: "Группа 2", words: ["сын", "сынок", "сыночек", "сынишка"] }
      ],
      options: ["во второй", "в первой", "в обеих группах"],
      answer: "во второй",
      owl: "Одни слова называют родственников. Другие сами родственны друг другу.",
      hint: "Родственные слова имеют общую часть и близкий смысл.",
      hint2: "Во второй группе все слова про сына: сын, сынок, сыночек, сынишка.",
      success: "Слова «мама», «сын», «дедушка», «тётя» называют родственников, но сами слова не являются родственными.",
      speak: "В какой группе слова родственные: мама, сын, дедушка, тётя или сын, сынок, сыночек, сынишка?"
    },

    family_house_04: {
      type: "multiStep",
      title: "Что общего?",
      owl: "Посмотри на четыре дома и на четыре слова.",
      hint: "Сначала ищи общий смысл, потом повторяющуюся часть.",
      hint2: "Все слова про дом, даже если дом маленький или огромный.",
      success: "Общая часть «дом» хранит смысл всей семьи слов.",
      speak: "Дом, домик, домище, домишко. Что у них общего?",
      steps: [
        {
          type: "singleChoice",
          gallery: ["house", "house-small", "house-large", "house-shabby"],
          prompt: "дом · домик · домище · домишко",
          question: "Что общего у всех слов?",
          options: ["все связаны с домом", "все означают одинаковый размер", "все называют человека", "ничего общего"],
          answer: "все связаны с домом",
          note: "Размер разный, а смысл один: это дом.",
          speak: "Что общего у слов дом, домик, домище и домишко?"
        },
        {
          type: "singleChoice",
          gallery: ["house", "house-small", "house-large", "house-shabby"],
          prompt: "дом · домик · домище · домишко",
          question: "Какая часть повторяется?",
          options: ["дом", "ик", "ище"],
          answer: "дом",
          note: "Повторяется часть «дом».",
          speak: "Какая часть повторяется в этих словах?"
        }
      ]
    },

    family_mark_05: {
      type: "multiStep",
      title: "Найди корень",
      scene: "tree-roots",
      owl: "Нажми первую и последнюю букву общей части. Если часть из одной буквы, нажми её дважды.",
      hint: "Корень — общая главная часть. Здесь она звучит как «дом».",
      hint2: "Выдели «дом» в начале слова. Хвостик -ик или -ище не входит в корень.",
      term: "КОРЕНЬ",
      success: "Общая главная часть родственных слов называется корнем.",
      speak: "Найди корень в словах дом, домик и домище.",
      steps: [
        {
          type: "markWordPart",
          word: "дом",
          part: "root",
          answer: [0, 2],
          question: "Выдели корень в слове «дом».",
          note: "Всё слово «дом» и есть корень.",
          speak: "Выдели корень в слове дом."
        },
        {
          type: "markWordPart",
          word: "домик",
          part: "root",
          answer: [0, 2],
          question: "Выдели корень в слове «домик».",
          note: "Корень «дом», а -ик показывает маленький размер.",
          speak: "Выдели корень в слове домик."
        },
        {
          type: "markWordPart",
          word: "домище",
          part: "root",
          answer: [0, 2],
          question: "Выдели корень в слове «домище».",
          note: "Корень снова «дом».",
          speak: "Выдели корень в слове домище."
        }
      ]
    },

    family_hide_06: {
      type: "singleChoice",
      title: "Спрячь корень",
      scene: "tree-roots",
      question: "Получились самостоятельные слова?",
      covers: [
        { left: "трава", right: "травка", root: "трав" },
        { left: "шум", right: "шуметь", root: "шум" },
        { left: "смелый", right: "смелость", root: "смел" }
      ],
      options: ["Нет", "Да"],
      answer: "Нет",
      owl: "Листочек закрыл общую часть. Посмотри, что осталось.",
      hint: "Проверь, можно ли понять слово без закрытой части.",
      hint2: "От «трава» осталась одна буква «а». Это не слово.",
      success: "Корень хранит главное общее значение родственных слов.",
      speak: "Корень закрыт. Получились самостоятельные слова?"
    },

    family_sort_07: {
      type: "classification",
      title: "Собери семьи",
      scene: "tree-roots",
      question: "Разложи слова по трём деревьям.",
      owl: "У каждого дерева своя семья.",
      hint: "Смотри и на буквы, и на смысл: море, свет или белый цвет.",
      hint2: "Моряк связан с морем, светить — со светом, беленький — с белым.",
      success: "У каждой семьи на дереве виден свой корень.",
      speak: "Разложи слова по семьям: море, свет и белый.",
      groups: [
        { id: "mor", title: "МОРЕ", root: "мор" },
        { id: "svet", title: "СВЕТ", root: "свет" },
        { id: "bel", title: "БЕЛЫЙ", root: "бел" }
      ],
      items: [
        { id: "sea", text: "море", group: "mor", scene: "sea" },
        { id: "sailor", text: "моряк", group: "mor", scene: "sea-sailor" },
        { id: "marine", text: "морской", group: "mor", scene: "sea" },
        { id: "light", text: "свет", group: "svet", scene: "light-lamp" },
        { id: "shine", text: "светить", group: "svet", scene: "light-lamp" },
        { id: "bright", text: "светлый", group: "svet", scene: "light-lamp" },
        { id: "white", text: "белый", group: "bel", scene: "white-hare" },
        { id: "whitish", text: "беленький", group: "bel", scene: "white-hare" },
        { id: "whitens", text: "белеет", group: "bel", scene: "white-hare" }
      ]
    },

    family_lookalike_08: {
      type: "multiStep",
      title: "Похожие, но чужие",
      owl: "Одинаковых букв мало. Нужен ещё и общий смысл.",
      hint: "Подумай: слово используется про тот же предмет или это просто похожие буквы?",
      hint2: "Гора и горный — про гору. Горе — про беду, не про гору.",
      success: "Одинаковых букв недостаточно. Слова должны быть близки по смыслу.",
      speak: "Эти слова родственные или только похожи буквами?",
      steps: [
        {
          id: "gora",
          a: "гора",
          b: "горный",
          type: "singleChoice",
          scene: "mountain",
          prompt: "гора — горный",
          question: "Эти слова родственные?",
          options: ["да", "нет"],
          answer: "да",
          note: "Горный — это относящийся к горе.",
          speak: "Гора и горный — родственные слова?"
        },
        {
          id: "gore",
          a: "горе",
          b: "гористый",
          type: "singleChoice",
          scene: "grief",
          prompt: "горе — гористый",
          question: "Эти слова родственные?",
          options: ["нет", "да"],
          answer: "нет",
          note: "Горе — это беда. Гористый говорят про горы.",
          hint2: "Горе не называют гору.",
          speak: "Горе и гористый — родственные слова?"
        },
        {
          id: "osa",
          a: "оса",
          b: "осина",
          type: "singleChoice",
          scene: "wasp-aspen",
          prompt: "оса — осина",
          question: "Эти слова родственные?",
          options: ["нет", "да"],
          answer: "нет",
          note: "Оса — насекомое, осина — дерево.",
          hint2: "Одно жужжит, другое растёт.",
          speak: "Оса и осина — родственные слова?"
        },
        {
          id: "lisa",
          a: "лиса",
          b: "леса",
          type: "singleChoice",
          scene: "fox",
          prompt: "лиса — леса",
          question: "Эти слова родственные?",
          options: ["нет", "да"],
          answer: "нет",
          note: "Лиса — зверь. Леса — это много леса.",
          hint2: "Буквы рядом, а смысл разный.",
          speak: "Лиса и леса — родственные слова?"
        },
        {
          id: "korm",
          a: "корм",
          b: "кормить",
          type: "singleChoice",
          scene: "feed-bowl",
          prompt: "корм — кормить",
          question: "Эти слова родственные?",
          options: ["да", "нет"],
          answer: "да",
          note: "Кормить — давать корм.",
          speak: "Корм и кормить — родственные слова?"
        }
      ]
    },

    family_synonym_09: {
      type: "classification",
      title: "Синоним или родственник?",
      question: "Разложи пары по корзинам.",
      owl: "Синонимам общий корень не нужен. Однокоренным нужен и корень, и смысл.",
      hint: "Синонимы близки по смыслу и могут быть совсем разными снаружи.",
      hint2: "Лётчик и пилот — друзья по смыслу. Быстрый и быстрота — одна семья.",
      success: "Синонимам не нужен общий корень. Однокоренным словам нужен общий корень и общий смысл.",
      speak: "Разложи пары: это синонимы или однокоренные слова?",
      groups: [
        { id: "synonym", title: "СИНОНИМЫ" },
        { id: "root", title: "ОДНОКОРЕННЫЕ" }
      ],
      items: [
        { id: "pilot", a: "лётчик", b: "пилот", text: "лётчик — пилот", group: "synonym" },
        { id: "fast", a: "быстро", b: "скоро", text: "быстро — скоро", group: "synonym" },
        { id: "right", a: "правильный", b: "верный", text: "правильный — верный", group: "synonym" },
        { id: "brave-syn", a: "смелый", b: "храбрый", text: "смелый — храбрый", group: "synonym" },
        { id: "speed", a: "быстрый", b: "быстрота", text: "быстрый — быстрота", group: "root" },
        { id: "sticky", a: "липнуть", b: "липучий", text: "липнуть — липучий", group: "root" },
        { id: "sad", a: "грусть", b: "грустный", text: "грусть — грустный", group: "root" },
        { id: "brave-root", a: "смелый", b: "смелость", text: "смелый — смелость", group: "root" }
      ]
    },

    family_roots_10: {
      type: "multiStep",
      title: "Найди корень сам",
      scene: "star-sky",
      owl: "Сначала собери семью, потом назови общую часть.",
      hint: "Родственные слова близки по смыслу, а не только по первым буквам.",
      hint2: "Звонок не родня звёздочке: он звенит, а не светит.",
      success: "Общая часть родственных слов — их корень.",
      speak: "Собери родственные слова и найди их корень.",
      steps: [
        {
          type: "findMultiple",
          prompt: "звёздочка",
          question: "Какие слова родственные слову «звёздочка»?",
          scene: "star-sky",
          tokens: [
            { text: "звезда" },
            { text: "звёздный" },
            { text: "звёздочка" },
            { text: "звонок" },
            { text: "звёздное" }
          ],
          answers: ["звезда", "звёздный", "звёздочка", "звёздное"],
          extraHint: "Звонок сюда не входит.",
          missingHint: "Возьми все слова про звезду.",
          speak: "Какие слова родственные слову звёздочка?"
        },
        {
          type: "singleChoice",
          question: "Какая общая часть?",
          forms: [
            { word: "звезда", root: "звёзд" },
            { word: "звёздный", root: "звёзд" },
            { word: "звёздочка", root: "звёзд" }
          ],
          options: ["звёзд-", "звон-", "звёздоч-"],
          answer: "звёзд-",
          note: "Корень этой семьи — звёзд-.",
          speak: "Какая общая часть у слов про звезду?"
        },
        {
          type: "findMultiple",
          prompt: "звонок",
          question: "Какие слова родственные слову «звонок»?",
          tokens: [
            { text: "звонок" },
            { text: "звон" },
            { text: "звонить" },
            { text: "звезда" },
            { text: "звать" }
          ],
          answers: ["звонок", "звон", "звонить"],
          extraHint: "Звезда и звать — другие семьи.",
          missingHint: "Нужны звонок, звон и звонить.",
          speak: "Какие слова родственные слову звонок?"
        },
        {
          type: "singleChoice",
          question: "Какая общая часть?",
          forms: [
            { word: "звонок", root: "звон" },
            { word: "звонить", root: "звон" }
          ],
          options: ["звон-", "звёзд-", "зва-"],
          answer: "звон-",
          note: "Корень этой семьи — звон-.",
          speak: "Какая общая часть у слов про звон?"
        },
        {
          type: "findMultiple",
          prompt: "светить",
          question: "Какие слова родственные слову «светить»?",
          scene: "light-lamp",
          tokens: [
            { text: "свет" },
            { text: "светить" },
            { text: "светлый" },
            { text: "цвет" },
            { text: "цветок" }
          ],
          answers: ["свет", "светить", "светлый"],
          extraHint: "Цвет и цветок — про окраску, не про свет лампы.",
          missingHint: "Возьми свет, светить и светлый.",
          speak: "Какие слова родственные слову светить?"
        },
        {
          type: "singleChoice",
          question: "Какая общая часть?",
          forms: [
            { word: "свет", root: "свет" },
            { word: "светить", root: "свет" },
            { word: "светлый", root: "свет" }
          ],
          options: ["свет-", "цвет-", "свеч-"],
          answer: "свет-",
          note: "Корень этой семьи — свет-.",
          speak: "Какая общая часть у слов про свет?"
        },
        {
          type: "findMultiple",
          prompt: "тигрёнок",
          question: "Какие слова родственные слову «тигрёнок»?",
          scene: false,
          tokens: [
            { text: "тигр" },
            { text: "тигрёнок" },
            { text: "тигрица" },
            { text: "игра" },
            { text: "тихий" }
          ],
          answers: ["тигр", "тигрёнок", "тигрица"],
          extraHint: "Игра и тихий только звучат похоже.",
          missingHint: "Нужны тигр, тигрёнок и тигрица.",
          speak: "Какие слова родственные слову тигрёнок?"
        },
        {
          type: "singleChoice",
          question: "Какая общая часть?",
          forms: [
            { word: "тигр", root: "тигр" },
            { word: "тигрёнок", root: "тигр" },
            { word: "тигрица", root: "тигр" }
          ],
          options: ["тигр-", "игр-", "тих-"],
          answer: "тигр-",
          note: "Корень этой семьи — тигр-.",
          speak: "Какая общая часть у слов про тигра?"
        }
      ]
    },

    form_same_11: {
      type: "multiStep",
      title: "Одно слово или разные?",
      owl: "Предмет тот же. Посмотри, слово новое или только форма другая.",
      hint: "Если предмет тот же, а меняется число, это формы одного слова.",
      hint2: "Одно яблоко и несколько яблок называют один и тот же предмет.",
      success: "Предмет остаётся тем же. Меняется форма слова.",
      speak: "Это формы одного слова или разные родственные слова?",
      steps: [
        {
          type: "singleChoice",
          gallery: ["apple", "apples-many"],
          prompt: "яблоко — яблоки",
          question: "Это два разных родственных слова или формы одного слова?",
          options: ["формы одного слова", "два разных родственных слова"],
          answer: "формы одного слова",
          note: "Яблоко и яблоки — формы одного слова.",
          speak: "Яблоко и яблоки — формы одного слова или разные слова?"
        },
        {
          type: "singleChoice",
          gallery: ["star-sky", "stars-many"],
          prompt: "звезда — звёзды",
          question: "Это два разных родственных слова или формы одного слова?",
          options: ["формы одного слова", "два разных родственных слова"],
          answer: "формы одного слова",
          note: "Звезда и звёзды называют один и тот же предмет.",
          speak: "Звезда и звёзды — формы одного слова?"
        },
        {
          type: "singleChoice",
          gallery: ["fox", "foxes"],
          prompt: "лисица — лисицы",
          question: "Это два разных родственных слова или формы одного слова?",
          options: ["формы одного слова", "два разных родственных слова"],
          answer: "формы одного слова",
          note: "Лисица и лисицы — формы одного слова.",
          speak: "Лисица и лисицы — формы одного слова?"
        }
      ]
    },

    form_change_12: {
      type: "multiStep",
      title: "Измени форму",
      scene: "birch",
      owl: "Слово то же. Меняется только его конец.",
      hint: "Форма называет ту же берёзу. Новое слово называет уже другое.",
      hint2: "Берёзка — это уже маленькая берёзка, другое слово. «У берёзы» — та же берёза.",
      success: "Значение слова осталось тем же, а конец слова изменился.",
      speak: "Подбери формы слова берёза.",
      steps: [
        {
          type: "wordForm",
          scene: "birch",
          prompt: "БЕРЁЗА",
          question: "Выбери формы этого слова.",
          tokens: [
            { text: "у берёзы" },
            { text: "о берёзе" },
            { text: "над берёзой" },
            { text: "берёзка" },
            { text: "подберёзовик" }
          ],
          answers: ["у берёзы", "о берёзе", "над берёзой"],
          extraHint: "Берёзка и подберёзовик — уже другие слова.",
          missingHint: "Нужны все три формы: у берёзы, о берёзе, над берёзой.",
          speak: "Выбери формы слова берёза."
        },
        {
          type: "singleChoice",
          scene: "birch",
          question: "Что изменяется?",
          forms: [
            { word: "берёза", ending: "а" },
            { word: "берёзы", ending: "ы" },
            { word: "берёзе", ending: "е" },
            { word: "берёзой", ending: "ой" }
          ],
          options: ["конец слова", "всё слово целиком", "первая буква"],
          answer: "конец слова",
          note: "Значение слова осталось тем же, а конец слова изменился.",
          speak: "Что изменяется у слова берёза: конец, всё слово или первая буква?"
        }
      ]
    },

    form_ending_13: {
      type: "multiStep",
      title: "Найди окончание",
      scene: "birch",
      owl: "Окончание — изменяемый конец. Нажми его первую и последнюю букву. Одну букву нажми дважды.",
      hint: "Корень «берёз» не меняется. Рамку ставим вокруг того, что меняется.",
      hint2: "В «берёза» меняется одна последняя буква. В «берёзой» меняются две: о и й.",
      term: "ОКОНЧАНИЕ",
      success: "Изменяемая часть слова называется окончанием.",
      speak: "Найди окончание в формах слова берёза.",
      steps: [
        {
          type: "markWordPart",
          word: "берёза",
          part: "ending",
          answer: [5, 5],
          question: "Выдели окончание в слове «берёза».",
          note: "Окончание здесь — -а.",
          speak: "Выдели окончание в слове берёза."
        },
        {
          type: "markWordPart",
          word: "берёзы",
          part: "ending",
          answer: [5, 5],
          question: "Выдели окончание в слове «берёзы».",
          note: "Окончание здесь — -ы.",
          speak: "Выдели окончание в слове берёзы."
        },
        {
          type: "markWordPart",
          word: "берёзе",
          part: "ending",
          answer: [5, 5],
          question: "Выдели окончание в слове «берёзе».",
          note: "Окончание здесь — -е.",
          speak: "Выдели окончание в слове берёзе."
        },
        {
          type: "markWordPart",
          word: "берёзой",
          part: "ending",
          answer: [5, 6],
          question: "Выдели окончание в слове «берёзой».",
          note: "Окончание здесь — -ой.",
          speak: "Выдели окончание в слове берёзой."
        }
      ]
    },

    form_repair_14: {
      type: "multiStep",
      title: "Почини предложение",
      owl: "Слово «гроза» то же. Для места в предложении нужна подходящая форма.",
      hint: "Окончание помогает словам правильно связываться в предложении.",
      hint2: "После чего? После грозы. Перед чем? Перед грозой. К чему? К грозе.",
      success: "Окончание помогает словам правильно связываться в предложении.",
      speak: "Поставь слово гроза в нужную форму.",
      steps: [
        {
          type: "insertWord",
          scene: "storm-after",
          sentence: "После □ хорошо клюёт рыба.",
          question: "Какая форма подходит?",
          options: ["гроза", "грозы", "грозой", "грозе"],
          answer: "грозы",
          note: "После грозы хорошо клюёт рыба.",
          speak: "После какой грозы? Выбери форму."
        },
        {
          type: "insertWord",
          scene: "storm-before",
          sentence: "Перед □ лес притихает.",
          question: "Какая форма подходит?",
          options: ["гроза", "грозы", "грозой", "грозе"],
          answer: "грозой",
          note: "Перед грозой лес притихает.",
          speak: "Перед чем притихает лес?"
        },
        {
          type: "insertWord",
          scene: "anthill",
          sentence: "Муравьи прячутся в гнездо к □.",
          question: "Какая форма подходит?",
          options: ["гроза", "грозы", "грозой", "грозе"],
          answer: "грозе",
          note: "Муравьи прячутся в гнездо к грозе.",
          speak: "Муравьи прячутся к чему?"
        }
      ]
    },

    form_vs_root_15: {
      type: "classification",
      title: "Форма или родственник?",
      question: "Разложи пары по корзинам.",
      owl: "У формы значение то же. У однокоренного слова смысл новый, но родственный.",
      hint: "Спроси: предмет тот же или появилось новое значение?",
      hint2: "Руки — те же руки, только их несколько. Росинка — уже маленькая капля росы, новое слово.",
      success: "У формы слова значение не меняется. У однокоренного слова появляется новое, но родственное значение.",
      speak: "Это формы одного слова или однокоренные слова?",
      groups: [
        { id: "form", title: "ФОРМЫ ОДНОГО СЛОВА" },
        { id: "root", title: "ОДНОКОРЕННЫЕ СЛОВА" }
      ],
      items: [
        { id: "hand", a: "рука", b: "руки", text: "рука — руки", group: "form" },
        { id: "cake", a: "торт", b: "торты", text: "торт — торты", group: "form" },
        { id: "seas", a: "море", b: "моря", text: "море — моря", group: "form" },
        { id: "woods", a: "лес", b: "леса", text: "лес — леса", group: "form" },
        { id: "grasses", a: "трава", b: "травы", text: "трава — травы", group: "form" },
        { id: "dew", a: "роса", b: "росинка", text: "роса — росинка", group: "root" },
        { id: "blade", a: "трава", b: "травка", text: "трава — травка", group: "root" },
        { id: "butter", a: "масло", b: "маслице", text: "масло — маслице", group: "root" }
      ]
    },

    family_final_16: {
      type: "quiz",
      title: "Дерево слов",
      scene: "tree-roots",
      count: 10,
      owl: "Десять коротких вопросов на огромном дереве.",
      hint: "Вспомни: общий смысл и общая часть, форма или новое слово.",
      hint2: "Синонимам корень не нужен. Форме не нужно новое значение.",
      success: "Дерево слов пройдено.",
      speak: "Дерево слов. Короткий вопрос.",
      pool: [
        {
          id: "fish",
          type: "singleChoice",
          scene: "fish-family",
          prompt: "рыба · рыбак · рыбный",
          question: "Какой общий корень?",
          options: ["рыб-", "рыбак-", "р-"],
          answer: "рыб-",
          speak: "Рыба, рыбак, рыбный. Какой общий корень?"
        },
        {
          id: "lisa",
          a: "лиса",
          b: "леса",
          type: "singleChoice",
          scene: "fox",
          prompt: "лиса — леса",
          question: "Эти слова родственные?",
          options: ["нет", "да"],
          answer: "нет",
          speak: "Лиса и леса — родственные слова?"
        },
        {
          id: "brave-syn",
          a: "смелый",
          b: "храбрый",
          type: "singleChoice",
          prompt: "смелый — храбрый",
          question: "Как связаны эти слова?",
          options: ["синонимы", "однокоренные", "формы одного слова"],
          answer: "синонимы",
          speak: "Смелый и храбрый — синонимы, однокоренные или формы?"
        },
        {
          id: "brave-root",
          a: "смелый",
          b: "смелость",
          type: "singleChoice",
          prompt: "смелый — смелость",
          question: "Как связаны эти слова?",
          options: ["однокоренные", "синонимы", "формы одного слова"],
          answer: "однокоренные",
          speak: "Смелый и смелость — как связаны?"
        },
        {
          id: "birch-form",
          a: "берёза",
          b: "берёзы",
          type: "singleChoice",
          scene: "birch",
          prompt: "берёза — берёзы",
          question: "Как связаны эти слова?",
          options: ["формы одного слова", "однокоренные", "синонимы"],
          answer: "формы одного слова",
          speak: "Берёза и берёзы — формы или разные слова?"
        },
        {
          id: "grass-root",
          a: "трава",
          b: "травка",
          type: "singleChoice",
          prompt: "трава — травка",
          question: "Как связаны эти слова?",
          options: ["однокоренные", "формы одного слова", "синонимы"],
          answer: "однокоренные",
          speak: "Трава и травка — однокоренные или формы одного слова?"
        },
        {
          id: "grass-form",
          a: "трава",
          b: "травы",
          type: "singleChoice",
          prompt: "трава — травы",
          question: "Как связаны эти слова?",
          options: ["формы одного слова", "однокоренные", "синонимы"],
          answer: "формы одного слова",
          speak: "Трава и травы — формы одного слова?"
        },
        {
          id: "light-root",
          type: "markWordPart",
          word: "светлый",
          part: "root",
          answer: [0, 3],
          question: "Выдели корень в слове «светлый».",
          speak: "Выдели корень в слове светлый."
        },
        {
          id: "river-ending",
          type: "markWordPart",
          scene: "river",
          word: "рекой",
          part: "ending",
          answer: [3, 4],
          question: "Выдели окончание в слове «рекой».",
          speak: "Выдели окончание в слове рекой."
        },
        {
          id: "storm",
          type: "insertWord",
          scene: "storm-after",
          sentence: "После □ хорошо клюёт рыба.",
          question: "Какая форма нужна?",
          options: ["гроза", "грозы", "грозой"],
          answer: "грозы",
          speak: "После чего хорошо клюёт рыба?"
        },
        {
          id: "ending-job",
          type: "singleChoice",
          question: "Что помогает словам связываться в предложении?",
          options: ["окончание", "корень", "синоним"],
          answer: "окончание",
          speak: "Что помогает словам связываться в предложении?"
        },
        {
          id: "gora",
          a: "гора",
          b: "горный",
          type: "singleChoice",
          scene: "mountain",
          prompt: "гора — горный",
          question: "Эти слова родственные?",
          options: ["да", "нет"],
          answer: "да",
          speak: "Гора и горный — родственные?"
        },
        {
          id: "gore",
          a: "горе",
          b: "гористый",
          type: "singleChoice",
          scene: "grief",
          prompt: "горе — гористый",
          question: "Эти слова родственные?",
          options: ["нет", "да"],
          answer: "нет",
          speak: "Горе и гористый — родственные?"
        },
        {
          id: "osa",
          a: "оса",
          b: "осина",
          type: "singleChoice",
          scene: "wasp-aspen",
          prompt: "оса — осина",
          question: "Эти слова родственные?",
          options: ["нет", "да"],
          answer: "нет",
          speak: "Оса и осина — родственные?"
        },
        {
          id: "dom",
          type: "singleChoice",
          gallery: ["house", "house-small"],
          prompt: "дом — домик",
          question: "Как связаны эти слова?",
          options: ["однокоренные", "синонимы", "просто похожие буквы"],
          answer: "однокоренные",
          speak: "Дом и домик — как связаны?"
        }
      ]
    }
  }
};
