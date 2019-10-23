import React, {Component} from 'react';
import history from "./history"
import {Route} from 'react-router-dom';

class Contact extends Component{
    state = {
            name: '',
            email: '',
            message: ''
    }
    
    handleChange =(e) =>{
       const {name, value}= e.target;
        this.setState({[name]: value})
    }
    handleSubmit =(e) =>{
        e.preventDefault();
     const {name, email , message} = this.state;
        this.setState({
                name,
                email,
                message
            }
        );
        e.target.reset();
       this.renderData(this.state)
        
        
    }


    renderData = data =>{
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data) 
        }).then(res => { 
            console.log(res);
        })
        console.log(data);
        return (
            <Route
              path="/" />
          );
    }
    render(){
        
        return(
            <div className = "contactCont">
            <h3>Contact Us!</h3>
            <form onSubmit = {this.handleSubmit} ref={(el) => this.myFormRef = el}>
            <label for ="name">Name:</label>
                <input onChange = {this.handleChange}  value ={this.state.name} type= 'text' name = 'name' />
            <label for ="email">Email:</label>
                <input onChange = {this.handleChange} value ={this.state.email}  type= 'text' name = 'email' />
            <label for ="message">Message:</label>
                <textarea onChange = {this.handleChange} value ={this.state.message}  name = 'message' />
            <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default Contact