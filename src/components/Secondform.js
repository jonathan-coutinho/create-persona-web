import React, { Component } from 'react';


class SecondForm extends Component {


    render(){
        return (<form className={"myForm"}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Onde sua Persona trabalha:</label>
           <input
           name = "where_works"
           onChange={this.props.handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Joaquim Teixeira"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Nível de escolaridade:</label>
          <select className="form-control" id="exampleFormControlSelect1" name = "scolarship" onChange = {this.props.handleChange}>
            <option>Ensino Médio</option>
            <option>Ensino Técnico</option>
            <option>Ensino Superior </option>
            <option>Mestrado</option>
            <option>Doutorado</option>
          </select>
        </div>  
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Quais os meios de comunicação usados pela Persona?</label>
              <input
               name ="communication_means"
               onChange ={this.props.handleChange}
               type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>  
      </form>
   );
    }
}
export default SecondForm