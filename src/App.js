import React, { Component } from "react";
import Navegacion from "./components/navegacion";
import Menu_Superior from "./components/Menu_Superior";
import MenuLateral from "./components/MenuLateral";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu_Superior />

        <div className="container-fluid">
          <div className="row">
            <MenuLateral />
            <Navegacion />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
