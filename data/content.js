/**
 * Урок «Слова и их значения».
 * Страницы 41–49 учебника Канакиной и Горецкого, 2 класс, часть 1.
 * Прямое и переносное значение, синонимы и антонимы сюда не входят.
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
      subtitle: "Значение слова · Однозначные и многозначные слова",
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
    "star-person": { emoji: "🎤", caption: "Артист на сцене", alt: "Артист выступает на сцене" }
  },

  medals: [
    {
      id: "word-knower",
      title: "Знаток слов",
      icon: "🍓",
      afterId: "word_meaning_07",
      text: "Теперь ты умеешь объяснять значение слова и объединять слова по смыслу."
    }
  ],

  finish: {
    title: "Мастер значений",
    lead: "Ты научился узнавать значения слов и понял, что одно слово иногда может означать разные вещи.",
    notes: [
      { title: "Лексическое значение", text: "Это то, что обозначает слово." },
      { title: "Многозначное слово", text: "Это слово, у которого несколько значений." }
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
      { id: "finish", title: "Финиш", icon: "🏆", kind: "finish", zone: "many" }
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
    }
  }
};
