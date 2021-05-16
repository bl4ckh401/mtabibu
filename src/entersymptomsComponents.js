import { Button, TextareaAutosize } from "@material-ui/core";
import React from "react";



class SymptomComponents extends React.Component{
    constructor(){
        super();
            this.state = {
                symptom:""
            }
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]:value,
            })
        }
    render(){
         return(
        <div className='Enterform'>
            <h2>Enter Symptoms to get Prescription</h2>
            <section>
                <form className>
                <TextareaAutosize name="symptom" value={this.state.symptom} onChange={this.handleChange}></TextareaAutosize>
                <Button className='btn-submit' color='primary' variant='contained' type='submit' >CONSULTATION</Button>
                </form>
            </section>
        </div>
    );
}
}
export default SymptomComponents;