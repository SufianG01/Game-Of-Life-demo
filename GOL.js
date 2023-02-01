// Project Brief
// The aim of this project is to create a simple implementation of Conway’s Game of Life using
// Test Driven Development and Ping Pong Pair Programming.
// This project is focussed on a simple implementation of the rules applied to a cell and does not
// need to be a full implementation of the game.
// Your Project
// The game should be created using JavaScript. The game function should apply the following
// rules:
// 1. Any live cell with fewer than two live neighbours dies as if by under population.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.

let testCases = [
  {
    cell: 1,
    neighbors: [0, 1, 0]
  },
  {
    cell: 0,
    neighbors: [1, 1, 1]
  },
  {
    cell: 1,
    neighbors: [0, 0, 1]
  },
  {
    cell: 0,
    neighbors: [1, 0, 0]
  },
  {
    cell: 1,
    neighbors: [0, 1, 1]
  }
];

const applyRules = (cell, neighbors) => {
  const liveNeighbors = neighbors.filter((neighbors) => neighbors === 1).length;
  if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
    return 0;
  } else if (cell === 1 || liveNeighbors === 3) {
    return 1;
  } else {
    return 0;
  }
};
const liveneighbors = (neighbors) => {
    return neighbors.filter((neighbor) => neighbor === 1).length;
    };


    module.exports = { applyRules, liveneighbors };