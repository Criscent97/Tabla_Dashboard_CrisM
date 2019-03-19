import React, { Component } from "react";

const persona = [
  // {id:1,Nombre:'Maria',Edad:27,Estado:true},
  // {id:2,Nombre:'Marcos',Edad:30,Estado:true},
  // {id:3,Nombre:'Luis',Edad:40,Estado:true},
  // {id:4,Nombre:'Maria',Edad:27,Estado:true},
  // {id:5,Nombre:'Patricia',Edad:27,Estado:true},
  // {id:6,Nombre:'Ana',Edad:20,Estado:true},
  {
    id: 1,
    Nombres: "Maria Eugenia",
    Apellidos: "Valladares Cano",
    Deporte: "Football",
    Municipio: "Jinotepe",
    Edad: 27,
    Estado: true
  },
  {
    id: 2,
    Nombres: "Carlos Enrique",
    Apellidos: "Martinez Cano",
    Deporte: "Football",
    Municipio: "Diriamba",
    Edad: 22,
    Estado: true
  },
  {
    id: 3,
    Nombres: "Alicia Priscila",
    Apellidos: "Aviles Sarria",
    Deporte: "Tenis",
    Municipio: "San Marcos",
    Edad: 21,
    Estado: true
  },
  {
    id: 4,
    Nombres: "Marcos",
    Apellidos: "Soza Lopez",
    Deporte: "PingPong",
    Municipio: "El Crucero",
    Edad: 24,
    Estado: true
  },
  {
    id: 5,
    Nombres: "Karla Maribel",
    Apellidos: "Sevilla Navarro",
    Deporte: "Esgrima",
    Municipio: "La Concepción",
    Edad: 29,
    Estado: true
  },
  {
    id: 6,
    Nombres: "Juana Mercedes",
    Apellidos: "Sevilla Navarro",
    Deporte: "Esgrima",
    Municipio: "La Concepción",
    Edad: 20,
    Estado: true
  }
];
export function GetPersona() {
  return persona;
}
