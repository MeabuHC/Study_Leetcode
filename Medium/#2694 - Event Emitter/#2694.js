class EventEmitter {
  constructor() {
    this.cache = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.cache.has(eventName)) {
      this.cache.set(eventName, [callback]);
    } else {
      this.cache.get(eventName).push(callback);
    }

    return {
      unsubscribe: () => {
        const eventCallbacks = this.cache.get(eventName);
        if (eventCallbacks) {
          this.cache.set(
            eventName,
            eventCallbacks.filter((cb) => cb !== callback)
          );
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const eventCallbacks = this.cache.get(eventName);
    var result = [];
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => result.push(callback(...args)));
    }
    return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
