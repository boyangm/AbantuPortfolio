import React, { Component } from 'react';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',

    }


    redirectToTarget = () => {
        this.props.history.push('/');
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = this.state;
        this.setState({
            name,
            email,
            message
        }
        );
        e.target.reset();
        this.renderData(this.state)
        this.setState({
            name: '',
            email: '',
            message: ''
        })

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