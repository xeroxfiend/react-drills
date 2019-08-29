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
        // console.log(e)
    }


    render() {
        return (
            <div className="list">
                <input onChange={e => this.handleChange(e.target.value)} type="text"/>                
                <List
                listItem={this.state.userInput} />
            </div>
        )
    }

}

export default Input