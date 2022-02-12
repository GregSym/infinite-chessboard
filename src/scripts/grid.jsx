import { Component, useState } from "react";
import { GridStruct } from "../maths/gridStruct.ts";
import "../styles/grid.css";

const adjacency = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const mockGrid = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

const mockGridMap = new Map();

// setup indexable grid
mockGrid.map((row, y) =>
  row.map((value, x) => mockGridMap.set(x.toString() + y.toString(), value))
);

const gridData = new GridStruct(mockGridMap);

console.log(mockGridMap);

class Cell extends Component {
  cellClickEvent = (index, grid) => {
    if (grid.get(...index) > 0) return;
    var neighbourSum = adjacency
      .map((neighbour) => {
        return gridData.get(index[0] + neighbour[0], index[1] + neighbour[1]);
      })
      .reduce((partialSum, a) => partialSum + a, 0);
    console.log(neighbourSum);
    if (neighbourSum === Math.max(...this.props.grid.hashMap.values()) + 1) {
      // thanks Florian Margaine (answerer), mikemaccana asker, https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
      console.log("valid stone!");
      this.props.grid.set(neighbourSum, ...this.props.index);
      // this.cellValue = neighbourSum;
      this.props.redrawGrid(this.props.grid.copy());
      // this.setState(() => {});
    }
  };
  render() {
    console.log(this.cellValue);
    return (
      <div
        onClick={() => this.cellClickEvent(this.props.index, this.props.grid)}
      >
        <h1>Underlying value: {this.props.grid.get(...this.props.index)}</h1>
      </div>
    );
  }
}

export default function Grid() {
  const [_grid, setGrid] = useState(gridData);
  console.log("rendering!");
  return (
    <>
      <div>
        {_grid.shapedIteration().map((col, x) => (
          <div key={x} className="rowStyle">
            {col.map((value, y) => (
              <Cell
                key={y}
                redrawGrid={(newGrid) => setGrid(newGrid)}
                grid={_grid}
                index={[x, y]}
              />
            ))}
          </div>
        ))}
      </div>
      <div>{Math.max(...gridData.hashMap.values())}</div>
    </>
  );
}
