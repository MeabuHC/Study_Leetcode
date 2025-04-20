/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  var resultArr = [];
  var completed = 0;

  return new Promise((resolve, reject) => {
    functions.forEach((func, i) => {
      func()
        .then((result) => {
          resultArr[i] = result;
          completed++;
          if (completed === functions.length) {
            resolve(resultArr);
          }
        })
        .catch(reject);
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
