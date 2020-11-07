import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Configurator } from "./Configurator";
import { SVGDisplay } from "./SVGDisplay";
import { Component } from "react";

class App extends Component {
  handleConfigChange(config) {
    console.log("config changed", config);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Configurator onChange={this.handleConfigChange} />
        <SVGDisplay />
      </div>
    );
  }
}

export default App;
