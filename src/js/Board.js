export default class Board {
    constructor(fields) {
      this.fields = fields;
      this.random = null;
    }
  
    setsRandomNumber() {
      let randomNumber = Math.floor(Math.random() * (this.fields.length - 1));
      while (randomNumber === this.random) {
        randomNumber = Math.floor(Math.random() * (this.fields.length - 1));
      }
      this.random = randomNumber;
      return randomNumber;
    }
  
    deleteActiveClass() {
      const item = this.fields.filter((el) => el.classList.contains('field_active'))[0];
      // const item = this.fields.querySelector('.field_active');
      if (item) item.classList.remove('field_active');
    }
  
    addActiveClass() {
      const item = this.fields[this.setsRandomNumber()];
      item.classList.add('field_active');
    }
  }