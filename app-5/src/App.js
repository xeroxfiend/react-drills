import React, { Component } from "react";
import "./App.css";
import ImageViewer from "./components/ImageViewer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageViewer />
      </div>
    )
  }
}

export default App;
