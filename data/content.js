/**
 * Урок «Слова и их значения».
 * Страницы 41–57 учебника Канакиной и Горецкого, 2 класс, часть 1.
 * Однокоренные слова начинаются со страницы 58 и в этот выпуск не входят.
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
      subtitle: "Значение · Прямое и переносное · Синонимы · Антонимы",
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
    "burning-dawn": { emoji: "🌄", caption: "Заря", alt: "Горящая заря" }
  },

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
    }
  ],

  finish: {
    title: "Повелитель слов",
    lead: "Ты прошёл долину волшебных слов, поляну друзей и мост противоположностей.",
    abilities: [
      { icon: "🌅", text: "Я понимаю переносный смысл" },
      { icon: "🤝", text: "Я нахожу слова-друзья" },
      { icon: "↔", text: "Я нахожу слова-противоположности" }
    ],
    notes: [
      { title: "Прямое значение", text: "Слово прямо называет действие, предмет или признак." },
      { title: "Синонимы", text: "Слова разные, а значения одинаковые или близкие.", example: "смелый — храбрый" },
      { title: "Антонимы", text: "Слова с противоположным значением.", example: "большой — маленький" }
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
      { id: "finish", title: "Финиш", icon: "🏆", kind: "finish", zone: "opposites" }
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
    }
  }
};
