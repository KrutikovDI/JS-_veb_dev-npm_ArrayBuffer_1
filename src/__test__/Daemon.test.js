import Daemon from '../class/Daemon';

test ('проверяем создание экзю класса Daemon', () => {
  const dam = new Daemon();
  const correct = {
    attack: 100,
    cells: [100, 90, 80, 70, 60]
  }
  expect(dam).toEqual(correct)
})

test ('проверяем работу cеттера c "дурманом"', () => {
  const mag = new Daemon();
  expect(mag.set(2, true)).toBe(85)
})