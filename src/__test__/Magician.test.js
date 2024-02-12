import Magician from '../class/Magician';

test ('проверяем создание экзю класса Magician', () => {
  const mag = new Magician();
  const correct = {
    attack: 100,
    cells: [100, 90, 80, 70, 60]
  }
  expect(mag).toEqual(correct)
});

test ('проверяем работу геттера', () => {
  const mag = new Magician();
  expect(mag.get()).toBe(100)
})

test ('проверяем работу cеттера без "дурмана"', () => {
  const mag = new Magician();
  expect(mag.set(2, false)).toBe(90)
})