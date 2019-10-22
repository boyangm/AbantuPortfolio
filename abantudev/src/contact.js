import React, {Component} from 'react';

class Contact extends Component{
    state = {
        body: {
            name: '',
            email: '',
            message: ''
        }
    }
    handleChange =(e) =>{
       const {name, value}= e.target;
        this.setState(prevState =>({
            ...prevState.body, [name]:value
        }))
    }
    handleSubmit =(e) =>{
        e.preventDefault();
     const {name, email , message} = this.state;
        this.setState({
            body:{
                name,
                email,
                message
            }
        });
        return this.renderData(this.state.body)
        
        
    }

    renderData = data =>{
        console.log(this.state.body);
    }
    render(){
        
        return(
            <div>
            <h3>{this.state.body.name}</h3>
            <form onSubmit = {this.handleSubmit}>
            <label for ="name">Name:</label>
                <input onChange = {this.handleChange}  value ={this.state.body.name} type= 'text'  ref= {input => this.name = input} name = 'name' />
            <label for ="email">Email:</label>
                <input onChange = {this.handleChange} value ={this.state.body.email}  type= 'text' ref= {input => this.email = input} name = 'email' />
            <label for ="message">message:</label>
                <textarea onChange = {this.handleChange} value ={this.state.body.message}  ref= {textarea => this.message = textarea} name = 'message' />
            <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default Contact