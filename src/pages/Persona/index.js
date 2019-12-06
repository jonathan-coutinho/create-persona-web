import React, { Component } from 'react';
import "./styles.css"
import {Link} from "react-router-dom"
import api from "../../service/api"
import Firstform from "../../components/firstform"
class Persona extends Component {

    state = {
        name: "",
        sex: "",
        age: "",
        hole: false,
    }

    handleChange = ({target}) => {
        console.log (target.name, target.value)
        this.setState ({[target.name] : target.value})
    } 
    render() {
        return (
            <div className="myContainer">
              <h2 className="header">Gerador de Persona</h2>
              <h4 className="myControl">Criando minha persona</h4>
              <Firstform handleChange={this.handleChange}></Firstform>
         
            <footer className="mySpacingContainer">
            <Link to ="/" type="submit" className="btn btn-primary btn-lg">Voltar</Link>

            <Link to ="/persona" type="submit" className="btn btn-primary btn-lg">Avançar</Link>
       
            </footer>
            </div>
          );
    }
}

export default Persona;
