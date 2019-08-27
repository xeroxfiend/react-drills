import React, {Component} from "react";
import TextDisplay from './TextDisplay'

class InputField extends Component {
  constructor() {
    super();
    this.state = {
        input: ''
    };
  }

  handleChange(e) {
      this.setState({input: e})
    //   console.log(this.state.input)
      
  }

  render() {
      return (
      <div>
        <input onChange={(e) => this.handleChange(e.target.value)} type="text" className="userInput" />
        <TextDisplay
        text= {this.state.input}/>
    </div>
      )
}

}

export default InputField;
