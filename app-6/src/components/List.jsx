import React, {Component} from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItems: ''
        }
    }

    render() {
        let userInput = this.props.listItem
        return (
            <ul>
                <li>{userInput}</li>
            </ul>
        )
    }
}


export default List