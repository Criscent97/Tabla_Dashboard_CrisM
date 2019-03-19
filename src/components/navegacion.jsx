import React, { Component } from "react";
import { GetPersona } from "./../Service/perosnasServices";

class Navegacion extends Component {
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
      return (
        <h1>
          <br />
          <br />
          No hay personas en la lista
        </h1>
      );
    }
    return (
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <h1>Listado de Personas: {this.state.Datos.length}</h1>
        <button onClick={this.handlerAdd} className="btn btn-info">
          Agregar Persona
        </button>
        <table className="table">
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
        </table>
      </main>
    );
  }
}

export default Navegacion;
