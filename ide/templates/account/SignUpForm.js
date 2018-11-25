import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormFieldLabel" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormFieldInput" placeholder="enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormFieldLabel" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormFieldInput" placeholder="name@example.com" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormFieldLabel" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormFieldInput" placeholder="enter your desired password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              
              

             

              <div className="FormField">
                  <button className="FormFieldButton mr-20">Sign Up</button> <Link to="/sign-in" className="FormFieldLink">I already have an account</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;
