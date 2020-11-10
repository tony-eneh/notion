import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Configurator } from "./Configurator";
import { SVGDisplay } from "./SVGDisplay";
import { Component } from "react";
import { getD } from "./Configurator/Circle";
import { CENTER } from "./constants";
import { configFields, defaultValues } from "./Configurator/Shapes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shape: "Circle", details: {} };
    this.handleShape = this.handleShape.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
  }

  initializeInputs() {
    // get the values for the currently selected shape and set state with it
    this.setState({ details: defaultValues[this.state.shape] });
  }

  handleShape(shape) {
    // fetch the default values for this shape
    // then set both the shape and its details to state
    const details = defaultValues[shape];
    this.setState({ shape, details });
  }

  handleDetails(detail) {
    // create a new details object with new value merged in
    const details = { ...this.state.details, ...detail };
    this.setState({ details });
  }

  componentDidMount() {
    // populate input elements with default values
    this.initializeInputs();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Configurator
          setShape={this.handleShape}
          setDetails={this.handleDetails}
          data={this.state}
        />
        <SVGDisplay d={this.state.d} />
      </div>
    );
  }
}

export default App;
