import Person from '../class/Person';

test ('проверяем создание экземпляра класса Person', () => {
  const person = new Person();
  const correct = {
    attack: 100,
    cells: [100, 90, 80, 70, 60]
  }
  expect(person).toEqual(correct)
})