const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) return ('Unable to determine the time of year!');
  if (!(Object.prototype.toString.call(date) === "[object Date]") || ((Object.prototype.toString.call(date) === "[object Date]" && isNaN(date.getTime())))) throw new Error('Bad date');

  const year = date.getFullYear();

  const winter_s = new Date(year, 10, 1);
  const winter_e = new Date(year, 2, 1);

  const spring_s = new Date(year, 2, 1);
  const spring_e = new Date(year, 5, 1);

  const summer_s = new Date(year, 5, 1);
  const summer_e = new Date(year, 8, 1);

  const fall_s = new Date(year, 8, 1);
  const fall_e = new Date(year, 11, 1);

  const year_s = new Date(year, 0, 1);
  const year_e = new Date(year, 11, 31, 23, 59, 59, 999);

  // console.log(year + ' ' + date.getTime() + ' ' + fall_e.getTime());
  // console.log((new Date(1456, 11, 2)).getTime());

  if ((date.getTime() >= spring_s.getTime()) && (date.getTime() < spring_e.getTime())) return 'spring';
  if ((date.getTime() >= summer_s.getTime()) && (date.getTime() < summer_e.getTime())) return 'summer';
  if ((date.getTime() >= fall_s.getTime()) && (date.getTime() < fall_e.getTime())) return 'fall';
  if (((date.getTime() >= year_s.getTime()) && (date.getTime() < winter_e.getTime())) || ((date.getTime() >= winter_s.getTime()) && (date.getTime() < year_e.getTime()))) return 'winter';

};
