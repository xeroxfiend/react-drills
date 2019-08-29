import React, {Component} from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      whatever: ''
    };
  }

  handleClick() {
      this.setState({
        listItems: [...this.state.listItems, this.props.listItem]        
      })
      // console.log(this.state.whatever)
      // console.log(userItem)
    // this.setState({
    //   listItems: this.listItems.push(this.props.listItem)
    // })
  }

  render() {


    let list = this.state.listItems.map((e, i) => <li key={i}>{e}</li>)

    return (
      <div>
        <button onClick={() => this.handleClick()}>Add</button>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default List;
