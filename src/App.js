import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Configurator } from "./Configurator";
import { SVGDisplay } from "./SVGDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <Configurator />
      <SVGDisplay />
    </div>
  );
}

export default App;
