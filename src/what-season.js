const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (
    !(date instanceof Date) ||
    date.hasOwnProperty("toString") ||
    date?.getMilliseconds() === 0
  )
    throw new Error("Invalid date!");

  let month = date.getMonth();
  return month === 11 || month < 2
    ? "winter"
    : month < 5
    ? "spring"
    : month < 8
    ? "summer"
    : "autumn";
}

module.exports = {
  getSeason,
};
