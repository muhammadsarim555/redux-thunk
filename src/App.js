import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Store from "./store";
import { updateData, addData } from "./store/action";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      console.log(Store.getState(), "finalist");
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
            className="App-link"
            onClick={() => Store.dispatch(updateData())}
          >
            Call Api
          </button>
          <button
            className="App-link"
            onClick={() => Store.dispatch(addData({ name: "sarim", age: 19 }))}
          >
            Add Data
          </button>
        </header>
      </div>
    );
  }
}

export default App;
