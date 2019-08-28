import React, { Component } from "react";
import "./App.css";
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <Input />
      </div>
    );
  }
}

export default App;
