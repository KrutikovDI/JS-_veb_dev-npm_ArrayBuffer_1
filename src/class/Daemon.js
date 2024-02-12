import Person from './Person'

export default class Daemon extends Person{
  constructor(attack){
    super(attack)
    this.attack = 100;
  }
}