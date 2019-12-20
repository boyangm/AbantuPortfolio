import React, { Component } from 'react';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        errMessage: ''

    }


    redirectToTarget = () => {
        this.props.history.push('/');
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

 // checks to make sure email is valid
    ValidateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        this.setState({ errMessage: "You have entered an invalid email address!" })
        return (false)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = this.state;

        let emailLower = email.toLowerCase()
        if(this.ValidateEmail(emailLower) === true){
            let body = {
                name,
                email: emailLower,
                message
            }
            e.target.reset();
            this.renderData(body)
            this.setState({
                name: '',
                email: '',
                message: ''
            })
            
        }

    }


    renderData = data => {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(data);
            this.redirectToTarget();
        }).catch(err => {
            console.log(err)
        })

    }


    render() {

        return (
            <div className="contactCont">
                <h3>Contact Us!</h3>
                <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                    <label for="name">Name:</label>
                    <input onChange={this.handleChange} value={this.state.name} type='text' name='name' />
                    <label for="email">Email:</label>
                    <p className = 'err'>{this.state.errMessage}</p>
                    <input onChange={this.handleChange} value={this.state.email} type='text' name='email' />
                    <label for="message">Message:</label>
                    <textarea onChange={this.handleChange} value={this.state.message} name='message' />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact