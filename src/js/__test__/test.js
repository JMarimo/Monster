import Board from './Board';

const fields = Array.from(document.querySelectorAll('.field'));
const board = new Board(fields);

test('test class Board', () => {
  const result = board.setsRandomNumber();
  const result2 = board.setsRandomNumber();
  expect(result).not.toBe(result2);
});