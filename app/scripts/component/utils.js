let instance = null;

/**
 *
 *
 * @class UtilsStore
 */

class UtilsStore {

  constructor() {
    if (!instance) {
      instance = this;
    }
    this.time = new Date();
    this.test = () => {
      console.log('test of ' + this.time + ' instance is launched =');
    }
    return instance;
  }
  // rest is the same code as preceding example
}

const UtilsInstance = new UtilsStore();
// Object.freeze(UtilsInstance);

export default UtilsInstance;
