const board = require("./board");

it("should test if the cells match", () => {
  expect(board.getCoords("c1-1")).toMatchObject([0,0]);
  expect(board.getCoords("c1-2")).toMatchObject([0,1]);
  expect(board.getCoords("c1-3")).toMatchObject([0,2]);
  expect(board.getCoords("c2-1")).toMatchObject([1,0]);
  expect(board.getCoords("c2-2")).toMatchObject([1,1]);
  expect(board.getCoords("c2-3")).toMatchObject([1,2]);
  expect(board.getCoords("c3-1")).toMatchObject([2,0]);
  expect(board.getCoords("c3-2")).toMatchObject([2,1]);
  expect(board.getCoords("c3-3")).toMatchObject([2,2]);
});

