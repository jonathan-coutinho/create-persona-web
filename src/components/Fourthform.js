import React, { Component } from 'react';


class FourthForm extends Component {


    render(){
        return (<form className={"myForm"}>

    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Como minha empresa pode ajudar essa Persona?</label>
    <textarea name = "company_help" className="form-control" id="exampleFormControlTextarea1" rows="3" 
    onChange ={this.props.handleChange} 
    ></textarea>
    </div> 
    <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Qual o número de funcionários da sua empresa?</label>
          <select className="form-control" id="exampleFormControlSelect1" name = "company_workers" onChange = {this.props.handleChange}>
            <option></option>
            <option>1</option>
            <option>2-3</option>
            <option>4-10</option>
            <option>11-50</option>
            <option>50-200</option>
            <option>Mais que 200</option>
          </select>
        </div> 
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Qual é a área de atuação da sua empresa?</label>
          <select className="form-control" id="exampleFormControlSelect1" name = "company_role" onChange = {this.props.handleChange}>
            <option></option>
            <option>Software e Cloud</option>
            <option>Agronegócio</option>
            <option>Consultorias e Treinamentos</option>
            <option>Ecommerce</option>
            <option>Educação e Ensino</option>
            <option>Imobiliárias</option>
          </select>
        </div> 
    

      </form>
   );
    }
}
export default FourthForm