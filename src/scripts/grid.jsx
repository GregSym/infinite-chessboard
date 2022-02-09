import { Component } from "react";
import { rowStyle } from "../styles/grid.css";

const mockGrid = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

class Cell extends Component {
  render() {
    return (
      <div>
        <h1>Underlying value: {this.props.value}</h1>
      </div>
    );
  }
}

export default class Grid extends Component {
  render() {
    return (
      <div>
        {mockGrid.map((row) => (
          <div className="rowStyle" float="left">
            {row.map((value) => (
              <Cell value={value} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
