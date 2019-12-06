import React, { Component } from 'react';
import "./styles.css"
import {Link} from "react-router-dom"
import api from "../../service/api"
import FirstForm from "../../components/Firstform"
import SecondForm from "../../components/Secondform"
import ThirdForm from "../../components/Thirdform"
import FourthForm from "../../components/Fourthform"
import PesonasList from "../../components/PersonasList"
import PersonasList from '../../components/PersonasList';

class Persona extends Component {

    state = {
        name: "",
        sex: "",
        age: "",
        role: "",
        dreams: "",
        problems: "",
        where_works: "",
        scolarship: "",
        communication_means: "",
        company_help: "",
        company_workers: "",
        company_role: "",
        image: "",
        loading: false,
        renderForm : 1,
        

    }

    handleChange = ({target}) => {
        console.log (target.name, target.value)
        this.setState ({[target.name] : target.value})
    }
    selectImage = (image) => {
        this.setState ({image})
    }
    renderForms() {
        const {renderForm} = this.state

        if (renderForm ===1) {
            return (<FirstForm handleChange ={this.handleChange}></FirstForm>)
        } else if (renderForm ===2) {
            return (<SecondForm handleChange = {this.handleChange}></SecondForm>)
        } else if (renderForm ===3) {
            return (<ThirdForm handleChange = {this.handleChange}></ThirdForm>)
        } else if (renderForm ===4) {
            return (<FourthForm handleChange = {this.handleChange}></FourthForm>)
        } else {
            return (<PersonasList image ={this.state.image} selectImage={this.selectImage}></PersonasList>)
        }
    } 
    changeForms (n) {
        const {renderForm} = this.state
        if (renderForm === 1 && n === -1) {
            return
        } else if (renderForm === 5 && n === 1) {
            return
         } else {
            this.setState ({renderForm : renderForm + n})
         }
    }

    render() {
        return (
            <div className="myContainer">
              <h2 className="header">Gerador de Persona</h2>
              {this.renderForms()} 
 

            <footer className="mySpacingContainer">
            <button onClick={() => (this.changeForms(-1))} type="submit" className="btn btn-primary btn-lg">Voltar</button>

            <button onClick={() => (this.changeForms(1))} type="submit" className="btn btn-primary btn-lg">Avançar</button>
       
            </footer>
            </div>
          );
    }
}

export default Persona;
