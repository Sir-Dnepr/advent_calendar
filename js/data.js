/*
 * Дані адвент-календаря.
 * Усе, що змінюється контентно (завдання, картинки, оформлення дверцят), — тут.
 */
window.ADVENT_CONFIG = {
  // Тимчасова дата для локальної розробки. Перед публікацією поверніть null.
  previewDate: '2026-12-31',
  year: 2026,
  month: 12,                 // грудень
  storageKey: 'advent-2026-opened-days'
};

/*
 * Розкладка мозаїки на десктопі: сітка 6 колонок × 8 рядів.
 * [колонка, скільки колонок займає, ряд, скільки рядів займає]
 */
window.ADVENT_LAYOUT = {
  1: [1, 1, 1, 1],  2: [2, 1, 1, 1],  3: [3, 2, 1, 1],  4: [5, 1, 1, 1],  5: [6, 1, 1, 1],
  6: [1, 1, 2, 1],  7: [2, 1, 2, 1],  8: [3, 2, 2, 1],  9: [5, 1, 2, 1], 10: [6, 1, 2, 1],
  11: [1, 2, 3, 1], 13: [3, 1, 3, 1], 15: [4, 1, 3, 1], 17: [5, 1, 3, 2], 18: [6, 1, 3, 2],
  12: [1, 2, 4, 1], 14: [3, 1, 4, 1], 16: [4, 1, 4, 1],
  19: [1, 1, 5, 1], 21: [2, 1, 5, 2], 22: [3, 1, 5, 1], 23: [4, 1, 5, 1], 25: [5, 2, 5, 2],
  20: [1, 1, 6, 1], 24: [3, 2, 6, 1],
  26: [1, 1, 7, 1], 27: [2, 2, 7, 1], 31: [4, 3, 7, 2],
  28: [1, 1, 8, 1], 29: [2, 1, 8, 1], 30: [3, 1, 8, 1]
};

/* Великі віконця (більша цифра; на мобільному займають 2×2) */
window.ADVENT_BIG = [25, 31];

/*
 * 31 день.
 *  top    — декор угорі дверцят:  lights | snow | stars | dots | burst
 *  bottom — сценка внизу дверцят: forest | trees | village | town | house | cottage |
 *                                 drift | hills | mountains | candles | gift | xmas | newyear
 *  task   — що відкривається всередині:
 *           { type: 'text',  text: 'Текст із <strong>HTML</strong> та <a href="https://example.com">посиланням</a>' }
 *           { type: 'image', text: 'підпис', src: 'assets/tasks/14.jpg' }   — власна картинка
 *           { type: 'image', text: 'підпис', pic: 'snowman' }               — вбудована SVG-ілюстрація
 *             (pic: gingerbread | snowman | house | tree)
 */
window.ADVENT_DAYS = [
  { day: 1, top: 'snow', bottom: 'forest', task: { type: 'text', text: 'Завдання:<br/>Здобуть ТРИ перемоги у NFS Heat' } },
  { day: 2, top: 'stars', bottom: 'village', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 3, top: 'dots', bottom: 'gift', task: { type: 'text', text: 'Інтерактив:<br/>Збираємо пазл' } },
  { day: 4, top: 'lights', bottom: 'trees', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 5, top: 'dots', bottom: 'drift', task: { type: 'text', text: 'Завдання:<br/>Обери будь-яку гру на двох та приготуй глінтвейн' } },
  { day: 6, top: 'stars', bottom: 'hills', task: { type: 'text', text: 'Дивимось:<br/><a href="https://megogo.net/ua/view/2109601-micniy-gorishok-2.html">Міцний горішок 2</a>' } },
  { day: 7, top: 'snow', bottom: 'mountains', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 8, top: 'dots', bottom: 'house', task: { type: 'text', text: 'Завдання:<br/>Купи кішкам іграшки' } },
  { day: 9, top: 'lights', bottom: 'cottage', task: { type: 'text', text: 'Дивимось:<br/><a href="https://uaserials.my/116-doktor-hto-sezon-2.html">Різдвяна серія "Доктор Хто" 2 сезон, серія 0</a>' } },
  { day: 10, top: 'snow', bottom: 'forest', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 11, top: 'dots', bottom: 'village', task: { type: 'text', text: 'Інтерактив:<br/>Граємо у geogueser під новорічну музику, допоки не випаде країна назва якої починається на "К" чи на "Л"' } },
  { day: 12, top: 'stars', bottom: 'trees', task: { type: 'text', text: 'Інтерактив:<br/>Збудувати якесь гніздо м\'яке з подушок та ковдр та слухати подкаст/читати' } },
  { day: 13, top: 'dots', bottom: 'candles', task: { type: 'text', text: 'Дивимось:<br/><a href="https://uakino.best/filmy/genre_comedy/8210-rzdvyan-hronki-hronki-rzdva.html">Різдвяні хроніки</a>' } },
  { day: 14, top: 'lights', bottom: 'hills', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 15, top: 'snow', bottom: 'drift', task: { type: 'text', text: 'Завдання:<br/>Звари какао, та можемо глянути <a href="https://uakino.best/animeukr/anime-series/15125-kartolovka-sakura-sakura-zbirach-kart-1-sezon.html">"Сакура ловець карт"</a>' } },
  { day: 16, top: 'dots', bottom: 'forest', task: { type: 'text', text: 'Дивимось:<br/><a href="https://uaserials.com/94-bruklin-9-9-sezon-1.html">Бруклін 99, 3 сезон 10 серія</a>' } },
  { day: 17, top: 'burst', bottom: 'forest', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 18, top: 'snow', bottom: 'town', task: { type: 'text', text: 'Дивимось:<br/><a href="https://megogo.net/ua/view/2114101-sam-udoma-2-zagubleniy-u-nyu-yorku.html">Один удома 2</a>' } },
  { day: 19, top: 'lights', bottom: 'trees', task: { type: 'text', text: 'Інтерактив:<br/>Граємо у "Viewfinder"' } },
  { day: 20, top: 'stars', bottom: 'mountains', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 21, top: 'lights', bottom: 'village', task: { type: 'text', text: 'Інтерактив:<br/>Граємо в настільну гру якусь на вибір (покемони, як приклад)' } },
  { day: 22, top: 'stars', bottom: 'gift', task: { type: 'text', text: 'Завдання:<br/>Купи гарну новорічну іграшку' } },
  { day: 23, top: 'snow', bottom: 'candles', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 24, top: 'dots', bottom: 'town', task: { type: 'text', text: 'Дивимось:<br/>(Різдвяна серія "Теда Лассо") На apple TV 2 сезон, 4 серія' } },
  { day: 25, top: 'burst', bottom: 'xmas', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 26, top: 'snow', bottom: 'forest', task: { type: 'text', text: 'Інтерактив:<br/>Будуємо невеликий шалаш та граємо у Героїв 3 в нашій фортеці' } },
  { day: 27, top: 'lights', bottom: 'village', task: { type: 'text', text: 'Дивимось:<br/><a href="https://uaserials.my/8321-klaus.html">Клаус</a>' } },
  { day: 28, top: 'stars', bottom: 'cottage', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 29, top: 'snow', bottom: 'trees', task: { type: 'text', text: 'Завдання:<br/>В боно, чи іншому магазині, купити смаколиків в яких є щось кисле' } },
  { day: 30, top: 'dots', bottom: 'house', task: { type: 'text', text: 'Обери подарунок' } },
  { day: 31, top: 'burst', bottom: 'newyear', task: { type: 'text', text: 'Завдання:<br/>Придбати/зварити кави та йдемо до ялинки у дворі' } }
];
