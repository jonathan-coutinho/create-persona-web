import React, { Component } from 'react';
import "./styles.css"
import {Link} from "react-router-dom"
import api from "../../service/api"

class UserForm extends Component {

    state = {
        nome: "jonathan",
        email: "",
        cargo: "",
        loading: false,
    }

    handleChange = ({target}) => {

        this.setState ({[target.name] : target.value})
    }

    saveUser = async () => {
        const {nome, cargo, email} = this.state
        this.setState ({loading:true})
        try{
            const response = await api.post ("/user" , {nome,cargo,email})
            console.log (response)
            this.setState ({loading:false})
        }catch (err){
            console.log (err)
            this.setState ({loading:false})
        }
    }
 
    render() {
        return (
            <div className="myContainer">
              <h2 className="header">Gerador de Persona</h2>
              <h4 className="myControl">Queremos saber quem você é</h4>
              <form className={"myForm"}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Qual o seu nome?</label>
             <input
             name = "nome"
             onChange={this.handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Joaquim Teixeira"></input>
            <small id="emailHelp" className="form-text text-muted">Insira seu nome</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Qual o seu email?</label>
                <input
                 name ="email"
                 onChange ={this.handleChange}
                 type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            <small id="emailHelp" className="form-text text-muted">Insira seu e-mail</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Qual seu cargo?</label>
            <select className="form-control" id="exampleFormControlSelect1" name = "cargo" onChange = {this.handleChange}>
              <option>CEO/Presidente</option>
              <option>Jornalista</option>
              <option>Engenheiro</option>
              <option>Estudante</option>
              <option>Outros</option>
            </select>
          </div>  
         
        </form>
            <footer className="mySpacingContainer">
            <Link to ="/" type="submit" className="btn btn-primary btn-lg">Voltar</Link>

            <Link to ="/persona" type="submit" className="btn btn-primary btn-lg">Avançar</Link>

            {/* <button type="submit" className="btn btn-primary btn-lg" onClick={this.saveUser}>
                {this.state.loading? (<div class="spinner-border" role="status">
             </div>) : "Avançar"}        
             </button> */}
            </footer>
            </div>
          );
    }
}

export default UserForm;
