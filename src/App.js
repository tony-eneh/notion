import "./App.css";
import { Header } from "./Header";
import { Configurator } from "./Configurator";
import { SVGDisplay } from "./SVGDisplay";
import { Component } from "react";
import { CENTER } from "./constants";
import { defaultValues, dFunctions } from "./Configurator/Shapes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shape: "Circle", details: {} };
    this.handleShape = this.handleShape.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.initializeInputs = this.initializeInputs.bind(this);
    this.generateD = this.generateD.bind(this);
  }

  generateD() {
    // convert the shape details to d attribute value
    return dFunctions[this.state.shape]({ ...CENTER, ...this.state.details });
  }

  initializeInputs() {
    // get the default details for the currently selected shape and set them
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
        <SVGDisplay d={this.generateD()} />
      </div>
    );
  }
}

export default App;
