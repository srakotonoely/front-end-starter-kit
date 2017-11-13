import UtilsInstance from './component/utils';

class Main {
  constructor() {
    console.log(UtilsInstance.test());
  }
}

document.addEventListener('DOMContentLoaded', () => new Main());