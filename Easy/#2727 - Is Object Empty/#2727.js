/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  var stringObj = JSON.stringify(obj).trim();
  return stringObj === "{}" || stringObj === "[]";
};
