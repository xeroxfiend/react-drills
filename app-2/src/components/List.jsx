import React, {Component} from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      list: ["I", "suck", "at", "this"]
    };
  }

  render() {
    return (
        <div>
        <h2>{this.state.list[0]}</h2>
        <h2>{this.state.list[1]}</h2>
        <h2>{this.state.list[2]}</h2>
        <h2>{this.state.list[3]}</h2>
        </div>
    )
  }
}

export default List
