import React, { Component } from 'react';
import "./styles.css"
import {Link} from "react-router-dom"

class UserForm extends Component {
 
    render() {
        return (
            <div className="myContainer">
              <h2 className="header">Gerador de Persona</h2>
              <h4 className="myControl">Queremos saber quem você é</h4>
              <form className={"myForm"}>
          <div class="form-group">
            <label for="exampleInputEmail1">Qual o seu nome?</label>
             <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Joaquim Teixeira"></input>
            <small id="emailHelp" class="form-text text-muted">Insira seu nome</small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Qual o seu email?</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            <small id="emailHelp" class="form-text text-muted">Insira seu e-mail</small>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Qual seu cargo?</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>CEO/Presidente</option>
              <option>Jornalista</option>
              <option>Engenheiro</option>
              <option>Estudante</option>
              <option>Outros</option>
            </select>
          </div>  
         
        </form>
            <footer className="mySpacingContainer">
            <Link to ="/" type="submit" class="btn btn-primary btn-lg">Voltar</Link>
            <button type="submit" class="btn btn-primary btn-lg">Avançar</button>
            </footer>
            </div>
          );
    }
}

export default UserForm;
