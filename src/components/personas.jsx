import React, { Component } from "react";
import { GetPersona } from "./../Service/perosnasServices";
import { unlink } from "fs";

class Personas extends Component {
  state = {
    Datos: GetPersona()
  };

  handlerdelete = persona => {
    const Datos = this.state.Datos.filter(p => p.id !== persona.id);
    this.setState({ Datos });
    console.log(persona);
  };

  handlerAdd = () => {
    const Datos = this.state.Datos;
    const newPersona = {
      id: Math.random() * 1000,
      Nombres: "Cris",
      Apellidos: "Muñiz",
      Deporte: "Baseball",
      Municipio: "Jinotepe",
      Edad: Math.random() * 100,
      Estado: true
    };
    Datos.push(newPersona);
    this.setState({ Datos });
  };

  render() {
    if (this.state.Datos.length === 0) {
      return <h1 className="container">No hay personas en la listas</h1>;
    }
    return (
      <div>
        {/* <table className="table">
          {this.state.Datos.map(persona => (
            <tbody>
              <tr>
                <th key={persona.id} scope="row">
                  {persona.id}
                </th>
                <td> {persona.Nombres} </td>
                <td>{persona.Apellidos} </td>
                <td> {persona.Deporte} </td>
                <td> {persona.Municipio} </td>
                <td>
                  <button
                    onClick={() => this.handlerdelete(persona)}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
          <thead>
            <tr>
              <th scope="col">Identificador</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Deporte</th>
              <th scope="col">Municipio</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
        </table> */}
      </div>
    );
  }
  verificaredad(Edad) {
    let clase = "badge mr-3 badge-";
    clase += Edad < 31 ? "info" : "danger";
    return clase;
  }
}

export default Personas;
