/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const obj = {};

  for (let element of arr1) {
    obj[element.id] = element;
  }

  for (let element of arr2) {
    if (obj[element.id]) {
      obj[element.id] = { ...obj[element.id], ...element };
    } else {
      obj[element.id] = element;
    }
  }

  return Object.values(obj).sort((a, b) => a.id - b.id);
};
