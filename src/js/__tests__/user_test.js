import character from '../units';
import attackSelection from '../attackSelection';

test('проверка фунцкии ', () => {
  const unit = character();
  const received = attackSelection(unit);
  const expected = [{
    id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
  }, {
    id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
  }];
  expect(received).toEqual(expected);
});
