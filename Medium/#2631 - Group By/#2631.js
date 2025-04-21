/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  var map = new Map();
  for (var element of this) {
    var key = fn(element);
    if (map.has(key)) {
      map.get(key).push(element);
    } else {
      map.set(key, [element]);
    }
  }

  return Object.fromEntries(map);
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
