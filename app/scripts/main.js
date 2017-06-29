import UtilsInstance from './component/utils';

class Main {
  constructor() {
    console.log(UtilsInstance.test());
  }
}

// console.log('== Test launched == ');

document.addEventListener('DOMContentLoaded', () => new Main());