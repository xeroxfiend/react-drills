import React, {Component} from 'react'

class TextDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterThis: ['I', 'really', 'suck', 'at', 'this', 'but', 'beans', 'are', 'cool']
        }                
    }     
    
    render() {
        let filter = this.state.filterThis.filter(el => {
            console.log(this)
            if (el.includes(this.props.filtered)) {
                return true
            }
        }).map((element, index) => {
            return <li key={index}>{element}</li>
        })

        return (
            <div>
            {filter}
            </div>
        )
    }
}

export default TextDisplay