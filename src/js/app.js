/* eslint-disable no-unused-vars */
import Board from '../Board';

const fields = Array.from(document.querySelectorAll('.field'));

const board = new Board(fields);

document.addEventListener('DOMContentLoaded', () => {
  const interval = setInterval(() => {
    board.deleteActiveClass();
    board.addActiveClass();
  }, 1000);
});