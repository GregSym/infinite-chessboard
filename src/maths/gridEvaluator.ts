import { GridStruct } from "./gridStruct";

export class GridEvaluator {
  grid: GridStruct;
  constructor(grid: GridStruct) {
    this.grid = grid;
  }

  isDeadEnd(): boolean {
      /* is another step possible?*/
    var validCells: boolean[] = this.grid.keys().map(([x, y]) => {
      if (this.grid.get(x, y) !== 0) return false;
      if (this.grid.sumAtIndex(x, y) === this.grid.maxValue() + 1) return true;
      return false;
    });
    for (var cell of validCells) {
        if (cell) return false;
    }
    return true;
  }
}
