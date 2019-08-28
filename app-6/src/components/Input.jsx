import React, {Component} from 'react'
import List from './List'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange(e) {
        this.setState({userInput: e})
    }

    handleClick() {

    }

    render() {
        return (
            <div className="list">
                <input onChange={e => handleChange(e.target.value)} type="text"/>
                <button onClick={this.handleClick()}>Add</button>
                <List
                listItem={this.state.userInput} />
            </div>
        )
    }

}

export default Input