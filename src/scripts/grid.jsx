import { Component } from "react";
import { rowStyle } from "../styles/grid.css";

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

console.log(mockGridMap);

class Cell extends Component {
  cellValue = this.props.value;
  cellClickEvent = (index, value) => {
    if (value === 1) return;
    var neighbourSum = adjacency
      .map((neighbour) => {
        return mockGridMap.has(
          (index[0] + neighbour[0]).toString() +
            (index[1] + neighbour[1]).toString()
        )
          ? mockGridMap.get(
              (index[0] + neighbour[0]).toString() +
                (index[1] + neighbour[1]).toString()
            )
          : 0;
      })
      .reduce((partialSum, a) => partialSum + a, 0);
    console.log(neighbourSum);
    if (neighbourSum === Math.max(mockGrid) + 1)
      this.setState(() => (this.cellValue = neighbourSum));
    // thanks Florian Margaine (answerer), mikemaccana asker, https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  };
  render() {
    return (
      <div
        onClick={() => this.cellClickEvent(this.props.index, this.props.value)}
      >
        <h1>Underlying value: {this.cellValue}</h1>
      </div>
    );
  }
}

export default class Grid extends Component {
  render() {
    return (
      <div>
        {mockGrid.map((row, y) => (
          <div className="rowStyle">
            {row.map((value, x) => (
              <Cell value={value} index={[x, y]} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
