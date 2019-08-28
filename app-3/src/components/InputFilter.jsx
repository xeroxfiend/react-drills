import React, {Component} from "react";
import TextDisplay from "./TextDisplay";

class InputFilter extends Component {
  constructor() {
    super();
    this.state = {
      userFilter: ""
    };
  }

  handleChange(e) {
    this.setState({userFilter: e});
    console.log(this.state.userFilter)
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleChange(e.target.value)}
          placeholder="Filter me"
          type="text"
          name=""
          id=""
        />
        <TextDisplay filtered={this.state.userFilter} />
      </div>
    );
  }
}

export default InputFilter;
