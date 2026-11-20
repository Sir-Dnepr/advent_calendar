(function () {
  'use strict';

  function kyivDate(now) {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Kyiv', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(now || new Date());
    const values = {};
    parts.forEach(function (part) { values[part.type] = Number(part.value); });
    return {
      year: values.year,
      month: values.month,
      day: values.day,
      key: [values.year, String(values.month).padStart(2, '0'), String(values.day).padStart(2, '0')].join('-')
    };
  }

  function isUnlocked(day, date, year, month) {
    return date.year > year ||
      (date.year === year && (date.month > month || (date.month === month && date.day >= day)));
  }

  function parsePreviewDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(5, 7));
    const day = Number(value.slice(8, 10));
    const date = new Date(Date.UTC(year, month - 1, day));
    if (date.getUTCFullYear() !== year || date.getUTCMonth() + 1 !== month || date.getUTCDate() !== day) return null;
    return { year: year, month: month, day: day, key: value };
  }

  window.ADVENT_TIME = { kyivDate: kyivDate, isUnlocked: isUnlocked, parsePreviewDate: parsePreviewDate };
})();
