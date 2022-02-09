import { Component } from "react";

const mockGrid = [[1, 0, 0],
[0, 0, 0],
[0, 0, 1]]


class Cell extends Component {
    render() {
        return <div>
            <h1>Underlying number: {this.props.value}</h1>
        </div>
    }
}

export default class Grid extends Component {

    render() {
        return <div>
            {mockGrid.map(row => <span>{row.map(value => <Cell value={value} />)}</span>)}
        </div>
    }
}