import React, {Component} from "react";
import InputField from './InputField'

class TextDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return( 
    <div>
        <span className="display">{this.props.text}</span>
        </div>
    )
  }
}

export default TextDisplay;
