export default class Person {
  constructor() {
    this.attack = 100;
    this.cells = [100, 90, 80, 70, 60];
  }
  get(){
    return this.attack
  }
  set(cell, dope=false){
    if (dope) {
      return this.attack*this.cells[cell-1]/100 - Math.round(Math.log2(cell) * 5)
    } else {
      return this.attack*this.cells[cell-1]/100
    }
  }
}