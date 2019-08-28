import React, {Component} from 'react'

class Image extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.state.props.url)
        return (
            <img src={this.props.url} alt="Picture of the NCC-1701 USS Enterprise"/>
        )
    }
}

export default Image