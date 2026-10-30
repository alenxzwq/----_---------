// ==========================================
// 1. БАЗЫ ДАННЫХ
// ==========================================

const lotteryData = [
    { topic: "Введение", questions: { 100: { text: "Главная проблема экономики?", options: ["Ограниченность ресурсов", "Инфляция", "Безработица", "Налоги"], correct: 0 }, 200: { text: "Не является фактором производства?", options: ["Труд", "Капитал", "Земля", "Деньги"], correct: 3 }, 300: { text: "Тип экономики с решениями государства?", options: ["Рыночная", "Командная", "Традиционная", "Смешанная"], correct: 1 }, 400: { text: "Закон спроса: выше цена — ...", options: ["Выше спрос", "Ниже спрос", "Спрос не меняется", "Выше предложение"], correct: 1 }, 500: { text: "Альтернативная стоимость — это...", options: ["Стоимость товара", "Цена упущенной выгоды", "Затраты", "Прибыль"], correct: 1 } } },
    { topic: "Капитал", questions: { 100: { text: "Что относится к основному капиталу?", options: ["Сырье", "Станки", "Электроэнергия", "Деньги"], correct: 1 }, 200: { text: "Что такое амортизация?", options: ["Износ фондов", "Повышение цен", "Рост прибыли", "Снижение налогов"], correct: 0 }, 300: { text: "Показатель эффективности ОФ?", options: ["Фондоотдача", "Рентабельность", "Ликвидность", "Оборачиваемость"], correct: 0 }, 400: { text: "Пассивная часть ОФ:", options: ["Станки", "Здания", "Транспорт", "Инструменты"], correct: 1 }, 500: { text: "Формула фондоемкости:", options: ["Объем / Стоимость ОФ", "Стоимость ОФ / Объем", "Прибыль / ОФ", "ОФ / Численность"], correct: 1 } } },
    { topic: "Труд", questions: { 100: { text: "Кто относится к трудовым ресурсам?", options: ["Все население", "Трудоспособное", "Только работающие", "Пенсионеры"], correct: 1 }, 200: { text: "Производительность труда — это...", options: ["Кол-во работников", "Выработка на 1 работника", "Время работы", "Зарплата"], correct: 1 }, 300: { text: "Форма оплаты труда?", options: ["Сдельная", "Прямая", "Косвенная", "Государственная"], correct: 0 }, 400: { text: "Метод нормирования на наблюдении?", options: ["Аналитический", "Опытный", "Хронометраж", "Статистический"], correct: 2 }, 500: { text: "Текучесть кадров — это...", options: ["Прием", "Увольнение по желанию/нарушениям", "Перевод", "Повышение квалификации"], correct: 1 } } },
    { topic: "Результаты", questions: { 100: { text: "Что такое выручка?", options: ["Доход от продаж", "Затраты", "Прибыль", "Налог"], correct: 0 }, 200: { text: "Валовая прибыль = ?", options: ["Выручка - Себестоимость", "Выручка + Затраты", "Доходы - Налоги", "Активы - Пассивы"], correct: 0 }, 300: { text: "Рентабельность — это...", options: ["Абсолютный показатель", "Относительный показатель", "Сумма долгов", "Оборотные средства"], correct: 1 }, 400: { text: "Прибыль после налогов?", options: ["Валовая", "Маржинальная", "Чистая", "Операционная"], correct: 2 }, 500: { text: "Точка безубыточности — когда...", options: ["Прибыль максимальна", "Выручка = Затраты", "Затраты минимальны", "Выручка максимальна"], correct: 1 } } },
    { topic: "Издержки", questions: { 100: { text: "Издержки — это...", options: ["Доходы", "Затраты", "Налоги", "Прибыль"], correct: 1 }, 200: { text: "Не зависят от объема выпуска?", options: ["Переменные", "Постоянные", "Прямые", "Косвенные"], correct: 1 }, 300: { text: "Переменные издержки?", options: ["Аренда", "Зарплата директора", "Сырье", "Амортизация"], correct: 2 }, 400: { text: "Затраты на единицу продукции?", options: ["Цена", "Себестоимость", "Прибыль", "Выручка"], correct: 1 }, 500: { text: "Предельные издержки — это...", options: ["Затраты на единицу", "Общие затраты", "Прирост при доп. единице", "Затраты на рекламу"], correct: 2 } } }
];

const logicData = [
    { options: ["Фондоотдача", "Материалоёмкость", "Рентабельность", "Трудоёмкость"], correct: 2, explanation: "Рентабельность — это результат, остальные — эффективность ресурсов." },
    { options: ["Акция", "Облигация", "Вексель", "Ипотека"], correct: 3, explanation: "Ипотека — это кредит, остальное — ценные бумаги." },
    { options: ["Труд", "Земля", "Капитал", "Прибыль"], correct: 3, explanation: "Прибыль — результат, остальные — факторы производства." },
    { options: ["Инфляция", "Дефляция", "Стагнация", "Дефицит"], correct: 2, explanation: "Стагнация — застой экономики, остальное связано с ценами/объемом." },
    { options: ["Монополия", "Олигополия", "Конкуренция", "Картель"], correct: 2, explanation: "Конкуренция — борьба, остальные — формы монополистических объединений." },
    { options: ["Прямые налоги", "Косвенные налоги", "НДФЛ", "НДС"], correct: 3, explanation: "НДС — это косвенный налог, остальные — прямые (или категория налогов)." },
    { options: ["Кредит", "Овердрафт", "Факторинг", "Лизинг"], correct: 2, explanation: "Факторинг — это уступка долга, остальное — формы кредитования/аренды." },
    { options: ["Себестоимость", "Выручка", "Прибыль", "Рентабельность"], correct: 2, explanation: "Прибыль — это финансовый результат, остальные — показатели затрат/доходов." },
    { options: ["Микроэкономика", "Макроэкономика", "Мировая экономика", "Инфляция"], correct: 3, explanation: "Инфляция — это процесс, остальные — разделы экономической науки." },
    { options: ["Дивиденд", "Купон", "Процент", "Штраф"], correct: 3, explanation: "Штраф — санкция, остальное — виды доходов." },
    { options: ["Актив", "Пассив", "Капитал", "Обязательство"], correct: 2, explanation: "Капитал — это разница между активами и пассивами, остальные — части баланса." },
    { options: ["Экстенсивный рост", "Интенсивный рост", "Инновационный рост", "Инфляционный рост"], correct: 3, explanation: "Инфляционный рост — не тип экономического роста, остальные — реальные типы." },
    { options: ["Товар", "Услуга", "Работа", "Идея"], correct: 3, explanation: "Идея — не является объектом купли-продажи в классическом понимании, остальные — объекты." },
    { options: ["Безработица", "Занятость", "Трудоустройство", "Зарплата"], correct: 3, explanation: "Зарплата — это доход, остальные — категории рынка труда." },
    { options: ["Дефицит", "Профицит", "Баланс", "Сальдо"], correct: 2, explanation: "Баланс — это равенство, остальные — состояния бюджета (превышение доходов/расходов)." },
    { options: ["Амортизация", "Износ", "Обесценивание", "Индексация"], correct: 3, explanation: "Индексация — это пересчет выплат, остальные — процессы потери стоимости." },
    { options: ["Рентабельность", "Ликвидность", "Платежеспособность", "Кредитоспособность"], correct: 0, explanation: "Рентабельность — это прибыльность, остальные — способность выполнять обязательства." },
    { options: ["Постоянные", "Переменные", "Общие", "Прямые"], correct: 2, explanation: "Общие — это сумма, а постоянные/переменные/прямые — виды классификации." },
    { options: ["Сырье", "Материалы", "Полуфабрикаты", "Оборудование"], correct: 3, explanation: "Оборудование — это основной капитал, остальное — оборотный." },
    { options: ["Труд", "Капитал", "Земля", "Информация"], correct: 3, explanation: "Информация — это новый фактор, остальные — классические (земля, труд, капитал)." },
    { options: ["Выручка", "Себестоимость", "Прибыль", "Валюта баланса"], correct: 3, explanation: "Валюта баланса — это итоговая сумма, остальные — финансовые результаты." },
    { options: ["Облигация", "Вексель", "Чек", "Акция"], correct: 2, explanation: "Чек — это платежный документ, остальные — ценные бумаги." },
    { options: ["Монополия", "Олигополия", "Монопсония", "Совершенная конкуренция"], correct: 2, explanation: "Монопсония — один покупатель, остальные — типы рынков по продавцам." },
    { options: ["Инфляция", "Гиперинфляция", "Дефляция", "Стагфляция"], correct: 3, explanation: "Стагфляция — это сочетание инфляции и стагнации, остальные — виды инфляции/дефляции." },
    { options: ["Эмиссия", "Деноминация", "Девальвация", "Ревальвация"], correct: 1, explanation: "Деноминация — это укрупнение денежной единицы, остальные — изменения стоимости/выпуска." }
];

const economyQuestions = [
    { q: "Что такое ВВП?", options: ["Валовой внутренний продукт", "Внешний валовый продукт", "Всеобщий внутренний продукт", "Валовый внешний показатель"], c: 0 },
    { q: "Что из перечисленного является фактором производства?", options: ["Деньги", "Акции", "Земля", "Налоги"], c: 2 },
    { q: "Закон спроса гласит: чем выше цена, тем...", options: ["Выше спрос", "Ниже спрос", "Спрос не меняется", "Выше предложение"], c: 1 },
    { q: "Что такое альтернативная стоимость?", options: ["Цена товара", "Цена упущенной выгоды", "Сумма затрат", "Размер прибыли"], c: 1 },
    { q: "Что такое рыночная экономика?", options: ["Экономика, управляемая государством", "Экономика свободного предпринимательства", "Традиционная экономика", "Плановая экономика"], c: 1 },
    { q: "Что относится к основному капиталу?", options: ["Сырье", "Станки и оборудование", "Электроэнергия", "Деньги в кассе"], c: 1 },
    { q: "Что такое амортизация?", options: ["Износ основных фондов", "Повышение цен", "Рост прибыли", "Снижение налогов"], c: 0 },
    { q: "Какой показатель отражает эффективность использования основных фондов?", options: ["Фондоотдача", "Рентабельность", "Ликвидность", "Оборачиваемость"], c: 0 },
    { q: "Что относится к пассивной части основных фондов?", options: ["Станки", "Здания и сооружения", "Транспорт", "Инструменты"], c: 1 },
    { q: "Что такое фондоемкость?", options: ["Стоимость ОФ на 1 рубль продукции", "Объем продукции на 1 рубль ОФ", "Прибыль на 1 рубль ОФ", "Численность работников"], c: 0 },
    { q: "Кто относится к трудовым ресурсам?", options: ["Все население", "Трудоспособное население", "Только работающие", "Пенсионеры"], c: 1 },
    { q: "Что такое производительность труда?", options: ["Количество работников", "Выработка на одного работника", "Время работы", "Зарплата"], c: 1 },
    { q: "Что является формой оплаты труда?", options: ["Сдельная", "Прямая", "Косвенная", "Государственная"], c: 0 },
    { q: "Что такое текучесть кадров?", options: ["Прием на работу", "Увольнение по желанию/нарушениям", "Перевод на другую должность", "Повышение квалификации"], c: 1 },
    { q: "Что такое хронометраж?", options: ["Метод изучения затрат времени", "Метод оценки персонала", "Форма оплаты труда", "Вид премии"], c: 0 },
    { q: "Что такое выручка?", options: ["Доход от продаж", "Затраты", "Прибыль", "Налог"], c: 0 },
    { q: "Как рассчитать валовую прибыль?", options: ["Выручка - Себестоимость", "Выручка + Затраты", "Доходы - Налоги", "Активы - Пассивы"], c: 0 },
    { q: "Что такое рентабельность?", options: ["Абсолютный показатель прибыли", "Относительный показатель эффективности", "Сумма долгов", "Оборотные средства"], c: 1 },
    { q: "Какая прибыль остается после уплаты всех налогов?", options: ["Валовая", "Маржинальная", "Чистая", "Операционная"], c: 2 },
    { q: "Что такое точка безубыточности?", options: ["Объем продаж, при котором прибыль максимальна", "Объем продаж, при котором выручка равна затратам", "Объем продаж, при котором затраты минимальны", "Максимально возможная выручка"], c: 1 },
    { q: "Что такое издержки?", options: ["Доходы", "Затраты на производство", "Налоги", "Прибыль"], c: 1 },
    { q: "Какие издержки не зависят от объема выпуска?", options: ["Переменные", "Постоянные", "Прямые", "Косвенные"], c: 1 },
    { q: "Что относится к переменным издержкам?", options: ["Аренда помещения", "Зарплата директора", "Закупка сырья", "Амортизация здания"], c: 2 },
    { q: "Как называется сумма всех затрат на производство единицы продукции?", options: ["Цена", "Себестоимость", "Прибыль", "Выручка"], c: 1 },
    { q: "Что такое предельные издержки (MC)?", options: ["Затраты на единицу продукции", "Общие затраты", "Прирост затрат при выпуске дополнительной единицы", "Затраты на рекламу"], c: 2 }
];

const mythData = [
    { text: "Инфляция всегда плоха для экономики.", isTrue: false, explanation: "Умеренная инфляция (2-4%) считается нормальной и стимулирует экономику." },
    { text: "Чем выше цена, тем ниже спрос (при прочих равных).", isTrue: true, explanation: "Это классический закон спроса." },
    { text: "Государственный долг всегда нужно выплачивать сразу.", isTrue: false, explanation: "Долг можно рефинансировать, главное — чтобы он был обслуживаемым." },
    { text: "Монополия всегда вредна для потребителя.", isTrue: false, explanation: "Естественные монополии (например, водоканал) могут быть эффективнее конкуренции." },
    { text: "Прибыль и выручка — это одно и то же.", isTrue: false, explanation: "Выручка — это доход, а прибыль — это доход минус затраты." },
    { text: "Безработица всегда негативно влияет на экономику.", isTrue: false, explanation: "Умеренная безработица (фрикционная) естественна и полезна для мобильности рынка труда." },
    { text: "Чем больше денег в экономике, тем лучше.", isTrue: false, explanation: "Избыточная денежная масса вызывает гиперинфляцию и обесценивание валюты." },
    { text: "Акции всегда приносят больше дохода, чем облигации.", isTrue: false, explanation: "Это верно только на длинном горизонте и с высоким риском. В краткосроке акции могут упасть." },
    { text: "ВВП отражает уровень благосостояния всех граждан.", isTrue: false, explanation: "ВВП не учитывает неравенство доходов и экологический ущерб." },
    { text: "Спрос и величина спроса — это одно и то же.", isTrue: false, explanation: "Спрос — функция зависимости от цены, величина спроса — конкретное количество при данной цене." },
    { text: "Основной капитал переносит свою стоимость на продукт по частям.", isTrue: true, explanation: "Это определение основного капитала (в отличие от оборотного)." },
    { text: "Чистая прибыль всегда больше валовой.", isTrue: false, explanation: "Чистая прибыль — это валовая минус налоги и обязательные платежи, поэтому она меньше." },
    { text: "Постоянные издержки есть даже при нулевом объеме производства.", isTrue: true, explanation: "Аренда, зарплата администрации и т.д. платятся независимо от выпуска." },
    { text: "Рентабельность измеряется в процентах.", isTrue: true, explanation: "Это относительный показатель, поэтому выражается в процентах." },
    { text: "Производительность труда измеряется только в рублях.", isTrue: false, explanation: "Она может измеряться в натуральных показателях (штуки, тонны) или в стоимости (рублях) на одного работника." },
    { text: "Фондоотдача показывает, сколько продукции приходится на 1 рубль основных фондов.", isTrue: true, explanation: "Это прямое определение фондоотдачи." },
    { text: "Сдельная оплата труда зависит от количества отработанного времени.", isTrue: false, explanation: "Сдельная зависит от объема выпущенной продукции, а повременная — от времени." },
    { text: "Переменные издержки растут при увеличении объема производства.", isTrue: true, explanation: "Они напрямую зависят от выпуска (сырье, материалы и т.д.)." },
    { text: "Амортизация — это денежные средства, которые откладываются на ремонт.", isTrue: false, explanation: "Амортизация — это перенос стоимости основных фондов на себестоимость продукции, а не отдельный фонд." },
    { text: "Выручка может быть отрицательной.", isTrue: false, explanation: "Выручка — это доход от продаж, она не может быть отрицательной. Отрицательной может быть прибыль (убыток)." }
];

const blitzData = [
    { q: "Что такое ВВП?", options: ["Валовой внутренний продукт", "Внешний валовый продукт", "Всеобщий внутренний продукт", "Валовый внешний показатель"], c: 0 },
    { q: "Кто платит налог на прибыль?", options: ["Физические лица", "Юридические лица", "Только ИП", "Государство"], c: 1 },
    { q: "Что такое инфляция?", options: ["Рост цен", "Снижение цен", "Рост безработицы", "Рост зарплат"], c: 0 },
    { q: "Что из этого — актив?", options: ["Кредит", "Оборудование", "Долг", "Штраф"], c: 1 },
    { q: "Что такое ликвидность?", options: ["Способность быстро продать", "Рост прибыли", "Размер долга", "Сумма налогов"], c: 0 },
    { q: "Закон предложения: выше цена — ...", options: ["Выше предложение", "Ниже предложение", "Не меняется", "Спрос падает"], c: 0 },
    { q: "Что такое дефицит бюджета?", options: ["Доходы > Расходы", "Расходы > Доходы", "Доходы = Расходы", "Нет бюджета"], c: 1 },
    { q: "Что такое дивиденд?", options: ["Часть прибыли акционерам", "Налог", "Штраф", "Кредит"], c: 0 },
    { q: "Кто такой инвестор?", options: ["Тот, кто вкладывает деньги", "Тот, кто берет кредит", "Тот, кто платит налоги", "Тот, кто работает"], c: 0 },
    { q: "Что такое себестоимость?", options: ["Сумма затрат на единицу", "Цена продажи", "Прибыль", "Выручка"], c: 0 },
    { q: "Что такое монополия?", options: ["Один продавец", "Много продавцов", "Государство", "Два продавца"], c: 0 },
    { q: "Что такое эмиссия?", options: ["Выпуск денег", "Сжигание денег", "Обмен валют", "Кредит"], c: 0 },
    { q: "Что такое ипотека?", options: ["Кредит на жилье", "Вклад в банке", "Страховка", "Налог"], c: 0 },
    { q: "Что такое девальвация?", options: ["Обесценивание валюты", "Укрепление валюты", "Рост ВВП", "Снижение налогов"], c: 0 },
    { q: "Кто такой брокер?", options: ["Посредник на бирже", "Владелец завода", "Государственный служащий", "Бухгалтер"], c: 0 },
    { q: "Что такое диверсификация?", options: ["Распределение рисков", "Слияние компаний", "Повышение цен", "Снижение издержек"], c: 0 },
    { q: "Что такое бартер?", options: ["Обмен без денег", "Купля-продажа", "Аренда", "Кредит"], c: 0 },
    { q: "Что такое профицит?", options: ["Доходы > Расходы", "Расходы > Доходы", "Доходы = Расходы", "Нет бюджета"], c: 0 },
    { q: "Что такое аутсорсинг?", options: ["Передача функций подрядчику", "Расширение штата", "Повышение зарплат", "Снижение налогов"], c: 0 },
    { q: "Что такое инфляция спроса?", options: ["Спрос > Предложение", "Предложение > Спрос", "Спрос = Предложение", "Нет спроса"], c: 0 }
];

// ==========================================
// 2. КОНСТАНТЫ И СОСТОЯНИЕ
// ==========================================

const STORAGE_KEY = 'econ_games_session';
const BLITZ_DURATION = 90;
const BLITZ_QUESTIONS_PER_TEAM = 15;
const AUCTION_ROUNDS = 25;

let state = {
    currentGame: null,
    screenId: 'screen-menu',
    teams: [],
    currentTeamIndex: 0,
    playedCells: [],
    activeCell: null,
    timerInterval: null,
    timeLeft: 0,
    isPaused: false,
    auctionRound: 0,
    currentBet: 0,
    betTeamIndex: null,
    blitzTeamIndex: 0,
    blitzTimeLeft: BLITZ_DURATION,
    blitzInterval: null,
    blitzQIndex: 0,
    blitzQuestions: [],
    mythIndex: 0
};

// ==========================================
// 3. СОХРАНЕНИЕ / ЗАГРУЗКА
// ==========================================

function saveSession() {
    const toSave = { ...state };
    delete toSave.timerInterval;
    delete toSave.blitzInterval;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}

function loadSession() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.currentGame) {
            document.getElementById('resumeBtn').classList.remove('hidden');
            return parsed;
        }
    }
    return null;
}

function resumeSession() {
    const saved = loadSession();
    if (!saved) return;
    
    Object.assign(state, saved);
    
    if (state.currentGame === 'lottery') { renderLotteryBoard(); updateLotteryUI(); }
    if (state.currentGame === 'auction') { updateAuctionUI(); }
    if (state.currentGame === 'logic') { updateLogicUI(); }
    if (state.currentGame === 'blitz') {
        document.getElementById('blitz-turn').innerText = state.teams[state.blitzTeamIndex].name;
        updateBlitzScores();
        if (state.blitzTimeLeft > 0) { startBlitzTimer(); }
        renderBlitzQuestion();
    }
    if (state.currentGame === 'myth') { nextMythQ(); }
    
    if (state.currentGame === 'lottery' && state.activeCell && state.timeLeft > 0) {
        document.getElementById('modal-q-text').innerText = lotteryData[state.activeCell.ti].questions[state.activeCell.cost].text;
        const opts = document.getElementById('modal-q-options');
        opts.innerHTML = lotteryData[state.activeCell.ti].questions[state.activeCell.cost].options.map((o, i) => `<button class="option-btn" onclick="answerLottery(${i},${lotteryData[state.activeCell.ti].questions[state.activeCell.cost].correct},this)">${o}</button>`).join('');
        document.getElementById('modal-question').classList.add('active');
        startLotteryTimer();
    }

    showScreen(state.screenId);
    saveSession();
}

function clearSessionAndExit() {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
}

function confirmExit() {
    if (confirm("Вы уверены? Прогресс текущей игры будет сохранен, но вы выйдете в меню.")) {
        showScreen('screen-menu');
        saveSession();
    }
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    state.screenId = id;
    
    const isGame = id !== 'screen-menu' && id !== 'screen-setup' && id !== 'screen-results';
    document.getElementById('globalExitBtn').classList.toggle('hidden', !isGame);
    document.getElementById('globalPauseBtn').classList.toggle('hidden', id !== 'screen-lottery');
    saveSession();
}

// ==========================================
// 4. ОБЩИЕ ФУНКЦИИ + ПЕРЕМЕШИВАНИЕ
// ==========================================

// Функция для перемешивания вариантов ответа
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Перемешивает варианты и возвращает новый объект { options, correct }
function shuffleOptions(options, correctIndex) {
    const correctText = options[correctIndex];
    const shuffledOptions = shuffleArray(options);
    const newCorrectIndex = shuffledOptions.indexOf(correctText);
    return { options: shuffledOptions, correct: newCorrectIndex };
}

function renderTeamInputs() {
    const count = parseInt(document.getElementById('teamCount').value);
    const container = document.getElementById('teamInputs');
    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        container.innerHTML += `<input type="text" id="teamName_${i}" placeholder="Команда ${i}">`;
    }
}

function selectGame(game) {
    state.currentGame = game;
    const titles = { lottery: "Экономическое лото", auction: "Аукцион", logic: "Где логика?", blitz: "Блиц", myth: "Правда или Миф" };
    document.getElementById('setupTitle').innerText = titles[game];
    showScreen('screen-setup');
}

function startSelectedGame() {
    const count = parseInt(document.getElementById('teamCount').value);
    state.teams = [];
    for (let i = 1; i <= count; i++) {
        let name = document.getElementById(`teamName_${i}`).value.trim();
        if (!name) name = `Команда ${i}`;
        state.teams.push({ id: i, name: name, score: 0 });
    }
    
    state.currentTeamIndex = 0;
    state.playedCells = [];
    
    if (state.currentGame === 'lottery') initLottery();
    else if (state.currentGame === 'auction') initAuction();
    else if (state.currentGame === 'logic') initLogic();
    else if (state.currentGame === 'blitz') initBlitz();
    else if (state.currentGame === 'myth') initMyth();
    
    saveSession();
}

// ==========================================
// 5. ЛОТО
// ==========================================

function initLottery() {
    renderLotteryBoard();
    updateLotteryUI();
    showScreen('screen-lottery');
}

function renderLotteryBoard() {
    const board = document.getElementById('lottery-board');
    board.innerHTML = `<div class="board-header">Тема / Цена</div>` + [100,200,300,400,500].map(c => `<div class="board-header">${c}</div>`).join('');
    lotteryData.forEach((t, ti) => {
        board.innerHTML += `<div class="board-header" style="color:var(--primary)">${t.topic}</div>`;
        [100,200,300,400,500].forEach(c => {
            const isPlayed = state.playedCells.includes(`cell-${ti}-${c}`);
            board.innerHTML += `<button class="cell" id="cell-${ti}-${c}" onclick="openLotteryQ(${ti},${c})" ${isPlayed ? 'disabled' : ''}>${c}</button>`;
        });
    });
}

function updateLotteryUI() {
    document.getElementById('lottery-turn').innerText = state.teams[state.currentTeamIndex].name;
    const sc = document.getElementById('lottery-scores');
    sc.innerHTML = state.teams.map((t, i) => `<div class="score-badge ${i===state.currentTeamIndex?'active':''}">${t.name}: ${t.score}</div>`).join('');
}

function openLotteryQ(ti, cost) {
    if (state.isPaused || state.playedCells.includes(`cell-${ti}-${cost}`)) return;
    state.activeCell = { ti, cost };
    const q = lotteryData[ti].questions[cost];
    
    // Перемешиваем варианты
    const shuffled = shuffleOptions(q.options, q.correct);
    
    document.getElementById('modal-q-text').innerText = q.text;
    const opts = document.getElementById('modal-q-options');
    opts.innerHTML = shuffled.options.map((o, i) => `<button class="option-btn" onclick="answerLottery(${i},${shuffled.correct},this)">${o}</button>`).join('');
    
    state.timeLeft = cost <= 200 ? 60 : (cost <= 400 ? 90 : 150);
    updateTimer();
    document.getElementById('modal-question').classList.add('active');
    startLotteryTimer();
    saveSession();
}

function startLotteryTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        if (!state.isPaused) {
            state.timeLeft--;
            updateTimer();
            saveSession();
            if (state.timeLeft <= 0) { clearInterval(state.timerInterval); timeoutLottery(); }
        }
    }, 1000);
}

function updateTimer() {
    const m = Math.floor(state.timeLeft / 60), s = state.timeLeft % 60;
    const el = document.getElementById('modalTimer');
    el.innerText = `${m}:${s.toString().padStart(2,'0')}`;
    el.classList.toggle('danger', state.timeLeft <= 15);
}

function answerLottery(idx, correct, btn) {
    if (state.isPaused) return;
    clearInterval(state.timerInterval);
    document.querySelectorAll('#modal-q-options .option-btn').forEach(b => b.classList.add('disabled'));
    const isC = idx === correct;
    if (isC) { btn.classList.add('correct'); state.teams[state.currentTeamIndex].score += state.activeCell.cost; }
    else { btn.classList.add('wrong'); document.querySelectorAll('#modal-q-options .option-btn')[correct].classList.add('correct'); state.teams[state.currentTeamIndex].score -= state.activeCell.cost; }
    
    state.playedCells.push(`cell-${state.activeCell.ti}-${state.activeCell.cost}`);
    document.getElementById(`cell-${state.activeCell.ti}-${state.activeCell.cost}`).disabled = true;
    updateLotteryUI();
    showLotteryResult(isC);
    saveSession();
}

function timeoutLottery() {
    document.querySelectorAll('#modal-q-options .option-btn').forEach(b => b.classList.add('disabled'));
    state.teams[state.currentTeamIndex].score -= state.activeCell.cost;
    state.playedCells.push(`cell-${state.activeCell.ti}-${state.activeCell.cost}`);
    document.getElementById(`cell-${state.activeCell.ti}-${state.activeCell.cost}`).disabled = true;
    updateLotteryUI();
    showLotteryResult(false, true);
    saveSession();
}

function showLotteryResult(isC, isTimeout = false) {
    document.getElementById('modal-question').classList.remove('active');
    const t = document.getElementById('modal-res-title'), i = document.getElementById('modal-res-icon'), d = document.getElementById('modal-res-desc');
    t.innerText = isC ? "Верно!" : (isTimeout ? "Время вышло!" : "Неверно!");
    t.style.color = isC ? "var(--success)" : "var(--danger)";
    i.innerText = isC ? "✓" : "✕";
    i.style.color = isC ? "var(--success)" : "var(--danger)";
    d.innerText = isC ? `+${state.activeCell.cost} баллов` : `-${state.activeCell.cost} баллов`;
    document.getElementById('modal-result').classList.add('active');
}

function closeLotteryResult() {
    document.getElementById('modal-result').classList.remove('active');
    const wasC = document.getElementById('modal-res-title').innerText === "Верно!";
    if (!wasC) { state.currentTeamIndex = (state.currentTeamIndex + 1) % state.teams.length; updateLotteryUI(); }
    if (state.playedCells.length === 25) endGame();
    saveSession();
}

function togglePauseLottery() {
    state.isPaused = !state.isPaused;
    const btn = document.getElementById('globalPauseBtn');
    const opts = document.querySelectorAll('.option-btn');
    if (state.isPaused) {
        btn.innerText = 'Продолжить'; btn.classList.add('resume');
        opts.forEach(b => b.classList.add('disabled'));
    } else {
        btn.innerText = 'Пауза'; btn.classList.remove('resume');
        opts.forEach(b => { if (!b.classList.contains('correct') && !b.classList.contains('wrong')) b.classList.remove('disabled'); });
    }
    saveSession();
}

// ==========================================
// 6. АУКЦИОН
// ==========================================

function initAuction() {
    state.auctionRound = 0;
    state.teams.forEach(t => t.score = 100);
    nextAuctionRound();
    showScreen('screen-auction');
}

function nextAuctionRound() {
    if (state.auctionRound >= AUCTION_ROUNDS) { endGame(); return; }
    const q = economyQuestions[state.auctionRound];
    document.getElementById('auction-question').innerText = q.q;
    document.getElementById('auction-question-counter').innerText = `${state.auctionRound + 1} / ${AUCTION_ROUNDS}`;
    
    document.getElementById('auction-options').style.display = 'none';
    document.getElementById('auction-controls').style.display = 'flex';
    document.getElementById('auction-bet').value = '';
    
    state.betTeamIndex = state.auctionRound % state.teams.length;
    document.getElementById('auction-current-team').innerText = `${state.teams[state.betTeamIndex].name} (Банк: ${state.teams[state.betTeamIndex].score})`;
    document.getElementById('auction-bet').max = state.teams[state.betTeamIndex].score;
    
    updateAuctionUI();
    saveSession();
}

function updateAuctionUI() {
    const sc = document.getElementById('auction-scores');
    sc.innerHTML = state.teams.map(t => `<div class="score-badge">${t.name}: ${t.score}</div>`).join('');
}

function placeBet() {
    const bet = parseInt(document.getElementById('auction-bet').value);
    const team = state.teams[state.betTeamIndex];
    if (!bet || bet <= 0 || bet > team.score) { alert("Некорректная ставка!"); return; }
    
    state.currentBet = bet;
    document.getElementById('auction-controls').style.display = 'none';
    
    const q = economyQuestions[state.auctionRound];
    const shuffled = shuffleOptions(q.options, q.c);
    
    const opts = document.getElementById('auction-options');
    opts.style.display = 'grid';
    opts.innerHTML = shuffled.options.map((o, i) => `<button class="option-btn" onclick="answerAuction(${i},${shuffled.correct},this)">${o}</button>`).join('');
    saveSession();
}

function answerAuction(idx, correct, btn) {
    document.querySelectorAll('#auction-options .option-btn').forEach(b => b.classList.add('disabled'));
    const team = state.teams[state.betTeamIndex];
    if (idx === correct) {
        btn.classList.add('correct');
        team.score += state.currentBet;
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#auction-options .option-btn')[correct].classList.add('correct');
        team.score -= state.currentBet;
    }
    updateAuctionUI();
    state.auctionRound++;
    saveSession();
    setTimeout(nextAuctionRound, 2000);
}

// ==========================================
// 7. ГДЕ ЛОГИКА
// ==========================================

function initLogic() {
    state.auctionRound = 0;
    nextLogicRound();
    showScreen('screen-logic');
}

function updateLogicUI() {
    document.getElementById('logic-turn').innerText = state.teams[state.currentTeamIndex].name;
    const sc = document.getElementById('logic-scores');
    sc.innerHTML = state.teams.map((t, i) => `<div class="score-badge ${i===state.currentTeamIndex?'active':''}">${t.name}: ${t.score}</div>`).join('');
}

function nextLogicRound() {
    if (state.auctionRound >= logicData.length) { endGame(); return; }
    const q = logicData[state.auctionRound];
    const shuffled = shuffleOptions(q.options, q.correct);
    
    document.getElementById('logic-question').innerText = "Найдите лишнее понятие";
    const opts = document.getElementById('logic-options');
    opts.innerHTML = shuffled.options.map((o, i) => `<button class="option-btn" onclick="answerLogic(${i},${shuffled.correct},this)">${o}</button>`).join('');
    
    updateLogicUI();
    saveSession();
}

function answerLogic(idx, correct, btn) {
    document.querySelectorAll('#logic-options .option-btn').forEach(b => b.classList.add('disabled'));
    if (idx === correct) {
        btn.classList.add('correct');
        state.teams[state.currentTeamIndex].score += 10;
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#logic-options .option-btn')[correct].classList.add('correct');
    }
    
    state.currentTeamIndex = (state.currentTeamIndex + 1) % state.teams.length;
    state.auctionRound++;
    saveSession();
    setTimeout(nextLogicRound, 2000);
}

// ==========================================
// 8. БЛИЦ (с перемешиванием вариантов)
// ==========================================

function initBlitz() {
    state.blitzQuestions = [];
    let pool = [...blitzData];
    
    for (let i = 0; i < state.teams.length; i++) {
        pool = pool.sort(() => Math.random() - 0.5);
        // Копируем вопросы для команды
        state.blitzQuestions.push(pool.slice(0, BLITZ_QUESTIONS_PER_TEAM).map(q => ({ ...q })));
    }
    
    state.blitzTeamIndex = 0;
    state.blitzTimeLeft = BLITZ_DURATION;
    state.blitzQIndex = 0;
    
    showBlitzWarning();
    showScreen('screen-blitz');
}

function showBlitzWarning() {
    const teamName = state.teams[state.blitzTeamIndex].name;
    document.getElementById('blitz-warning-title').innerText = "Приготовьтесь!";
    document.getElementById('blitz-warning-text').innerHTML = `Сейчас отвечает команда <span>${teamName}</span>`;
    document.getElementById('modal-blitz-warning').classList.add('active');
}

function startBlitzForCurrentTeam() {
    document.getElementById('modal-blitz-warning').classList.remove('active');
    document.getElementById('blitz-turn').innerText = state.teams[state.blitzTeamIndex].name;
    updateBlitzScores();
    renderBlitzQuestion();
    startBlitzTimer();
    saveSession();
}

function startBlitzTimer() {
    clearInterval(state.blitzInterval);
    const timerEl = document.getElementById('blitz-timer');
    
    const m = Math.floor(state.blitzTimeLeft / 60), s = state.blitzTimeLeft % 60;
    timerEl.innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    
    state.blitzInterval = setInterval(() => {
        state.blitzTimeLeft--;
        const m = Math.floor(state.blitzTimeLeft / 60), s = state.blitzTimeLeft % 60;
        timerEl.innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        
        if (state.blitzTimeLeft <= 0) {
            clearInterval(state.blitzInterval);
            nextBlitzTeam();
        }
        saveSession();
    }, 1000);
}

function nextBlitzTeam() {
    state.blitzTeamIndex++;
    state.blitzQIndex = 0;
    state.blitzTimeLeft = BLITZ_DURATION;
    
    if (state.blitzTeamIndex >= state.teams.length) {
        endGame();
        return;
    }
    
    showBlitzWarning();
    saveSession();
}

function renderBlitzQuestion() {
    if (state.blitzQIndex >= BLITZ_QUESTIONS_PER_TEAM) {
        clearInterval(state.blitzInterval);
        nextBlitzTeam();
        return;
    }
    
    const q = state.blitzQuestions[state.blitzTeamIndex][state.blitzQIndex];
    if (!q) return;
    
    // Перемешиваем варианты прямо при рендере
    const shuffled = shuffleOptions(q.options, q.c);
    
    document.getElementById('blitz-question').innerText = q.q;
    document.getElementById('blitz-progress').innerText = `Вопрос ${state.blitzQIndex + 1} из ${BLITZ_QUESTIONS_PER_TEAM}`;
    
    const opts = document.getElementById('blitz-options');
    opts.innerHTML = shuffled.options.map((o, i) => `<button class="option-btn" onclick="answerBlitz(${i},${shuffled.correct},this)">${o}</button>`).join('');
    updateBlitzScores();
}

function updateBlitzScores() {
    const sc = document.getElementById('blitz-scores');
    sc.innerHTML = state.teams.map((t, i) => `<div class="score-badge ${i===state.blitzTeamIndex?'active':''}">${t.name}: ${t.score}</div>`).join('');
}

function answerBlitz(idx, correct, btn) {
    if (idx === correct) {
        btn.classList.add('correct');
        state.teams[state.blitzTeamIndex].score += 5;
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#blitz-options .option-btn')[correct].classList.add('correct');
    }
    
    state.blitzQIndex++;
    saveSession();
    
    setTimeout(() => {
        renderBlitzQuestion();
    }, 500);
}

// ==========================================
// 9. ПРАВДА ИЛИ МИФ
// ==========================================

function initMyth() {
    state.mythIndex = 0;
    nextMythQ();
    showScreen('screen-myth');
}

function nextMythQ() {
    if (state.mythIndex >= mythData.length) { endGame(); return; }
    const q = mythData[state.mythIndex];
    document.getElementById('myth-question').innerText = q.text;
    document.getElementById('myth-explanation').classList.add('hidden');
    document.getElementById('myth-next-btn').classList.add('hidden');
    document.getElementById('myth-buttons').style.display = 'flex';
    
    document.getElementById('myth-turn').innerText = state.teams[state.currentTeamIndex].name;
    const sc = document.getElementById('myth-scores');
    sc.innerHTML = state.teams.map((t, i) => `<div class="score-badge ${i===state.currentTeamIndex?'active':''}">${t.name}: ${t.score}</div>`).join('');
    saveSession();
}

function answerMyth(userSaysTrue) {
    const q = mythData[state.mythIndex];
    const isCorrect = (userSaysTrue === q.isTrue);
    
    document.getElementById('myth-buttons').style.display = 'none';
    const exp = document.getElementById('myth-explanation');
    exp.classList.remove('hidden');
    exp.innerText = q.explanation;
    exp.style.color = isCorrect ? "var(--success)" : "var(--danger)";
    
    if (isCorrect) state.teams[state.currentTeamIndex].score += 10;
    
    document.getElementById('myth-next-btn').classList.remove('hidden');
    state.mythIndex++;
    saveSession();
}

function nextMythQuestion() {
    state.currentTeamIndex = (state.currentTeamIndex + 1) % state.teams.length;
    nextMythQ();
}

// ==========================================
// 10. ИТОГИ
// ==========================================

function endGame() {
    clearInterval(state.timerInterval);
    clearInterval(state.blitzInterval);
    
    const sorted = [...state.teams].sort((a, b) => b.score - a.score);
    const tbody = document.getElementById('resultsBody');
    tbody.innerHTML = sorted.map((t, i) => `<tr><td>${i + 1}</td><td>${t.name}</td><td>${t.score}</td></tr>`).join('');
    
    const top = sorted[0].score;
    const winners = sorted.filter(t => t.score === top);
    const winnerText = winners.length === 1 ? winners[0].name : "Ничья! " + winners.map(w => w.name).join(', ');
    document.getElementById('winnerText').innerText = `Победитель: ${winnerText}`;
    
    showScreen('screen-results');
    saveSession();
}

// ==========================================
// 11. ИНИЦИАЛИЗАЦИЯ
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderTeamInputs();
    loadSession();
});