import React from 'react';
import "./styles.css"
import logo from "./assets/logo.jpeg"

import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <h2>Gerador de Personas</h2>
      <img alt = "foto principal" src={logo}></img>
      <h4>Empresas procuram diretamente um criador de Personas</h4>
      <h5>Faça logo isso para não ficar para trás</h5>
      <Link to="User" className="btn btn-primary">Começar</Link>
    </div>
  );
}

export default Home;
