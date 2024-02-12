import Person from './Person'

export default class Magician extends Person{
  constructor(attack){
    super(attack)
    this.attack = 100;
  }
}