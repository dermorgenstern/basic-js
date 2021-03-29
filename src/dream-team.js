const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(membersArr=[]) {
  if (!(Array.isArray(membersArr) && (membersArr.length > 0))) return false;
  return membersArr.filter(el => (typeof(el) === 'string')).map(el => el.trim().charAt(0).toUpperCase()).sort().join('');
};