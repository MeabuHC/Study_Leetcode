var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.unshift(t);
  var count = 0;
  for (let time of this.queue) {
    if (time >= t - 3000) count += 1;
    else break;
  }

  return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
