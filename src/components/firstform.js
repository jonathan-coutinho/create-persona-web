import React, { Component } from 'react';


class FirstForm extends Component {


    render(){
        return (<form className={"myForm"}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nome da persona:</label>
           <input
           name = "name"
           onChange={this.props.handleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Joaquim Teixeira"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Sexo:</label>
          <select className="form-control" id="exampleFormControlSelect1" name = "sex" onChange = {this.props.handleChange}>
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
        </div>  
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Idade:</label>
              <input
               name ="age"
               onChange ={this.props.handleChange}
               type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Ocupação:</label>
              <input
               name ="role"
               onChange ={this.props.handleChange}
               type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
      
       
      </form>
   );
    }
}
export default FirstForm


     