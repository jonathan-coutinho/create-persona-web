import React, { Component } from 'react';


class ThirdForm extends Component {


    render(){
        return (<form className={"myForm"}>

    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Quais os principais objetivos desta Persona?</label>
    <textarea name = "dreams" className="form-control" id="exampleFormControlTextarea1" rows="3" 
    onChange ={this.props.handleChange} 
    ></textarea>
    </div> 
    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea2">Quais os principais desafios desta Persona?</label>
    <textarea name = "problems" className="form-control" id="exampleFormControlTextarea2" rows="3"
    onChange ={this.props.handleChange}></textarea>
    </div> 
      </form>
   );
    }
}
export default ThirdForm