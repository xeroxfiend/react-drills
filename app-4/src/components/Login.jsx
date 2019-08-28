import React, {Component} from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
        user: '',
        pass: ''
    }
  }

  handleChangeUser(e) {
      this.setState({
          user: e
      })      
  }

  handleChangePass(e) {
      this.setState({
          pass: e
      })
      
  }

  handleClick() {
      alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
      this.setState({
          user: '', 
          pass: ''
      })

  }


  render() {
      return (
          <div className="login">
              <input onChange={e => this.handleChangeUser(e.target.value)} placeholder='User Name' type="text"/>
              <input onChange={e => this.handleChangePass(e.target.value)} placeholder='Password' type="text"/>
              <button onClick={e => this.handleClick()}>Login</button>
          </div>
      )
  }
}

export default Login;
