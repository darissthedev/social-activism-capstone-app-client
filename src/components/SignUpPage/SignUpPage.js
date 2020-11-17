import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const emailRegex = RegExp(/^[a-zA-A0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}

class SignUpPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: "",
            email: "",
            accountType: "",
            orgName: "",
            password: "",
            formErrors: {
                fullname: "",
                email: "",
                accountType: "",
                password: ""
            }
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (formValid(this.state.formErrors)) {
            console.log(`
            --submitting--
            Fullname: ${this.state.fullname}
            Email: ${this.state.email}
            Account Type: ${this.state.accountType}
            Organization: ${this.state.orgName}
            Password: ${this.state.password}
            `)
            
        } else {
            console.error(`form invalid - display error message`);
        }
    };

    handleChange = evt => {
        evt.preventDefault();
        const { name, value } = evt.target;
        let formErrors = this.state.formErrors;

        switch(name){
            case "fullname":
                formErrors.fullname = 
                value.length < 3 && value.length > 0
                    ? "minimum 3 characters requied" 
                    : "";
                break;
                case "email":
                formErrors.email = 
                emailRegex.test(value) && value.length > 0
                    ? "" 
                    : "invalid email address";
                break;
                case "password":
                formErrors.password = 
                value.length < 8 && value.length > 0
                    ? "minimum 8 characters requied" 
                    : "";
                break;
                case "org-name":
                formErrors.orgName = 
                value.length < 3 && value.length > 0
                    ? "minimum 3 letters requied" 
                    : "";
                break;
                default:
                    break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
    };

    validateUserName(inputEmail) {

    }

    validatePassword(inputPassword) {

    }


    render() {
        const { formErrors } = this.state
        return (
            <div>
                <section className='sign-up-page'>
                    <div className="sign-up-page-header">
                        <h1>Create Account</h1>
                    </div>
                    <form 
                        className='sign-up-page-form'
                        onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <label 
                                htmlFor='sign-up-page-name'>
                                Full Name
                            </label>
                            <input 
                                type="text"
                                placeholder="Full Name"
                                required 
                                name="fullname"
                                id="sign-up-page-name"
                                onChange={this.handleChange} 
                                />
                                {formErrors.fullname.length > 0 && (
                            <span className="errorMessage">{formErrors.fullname}</span>
                        )}
                        </div>

                        <div className='form-item'>
                            <label 
                                htmlFor='sign-up-page-email'>
                                Email Address
                            </label>
                            <input  
                                type="text"
                                placeholder="Email Address"
                                required 
                                name="email"
                                id="sign-up-page-email"
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )}
                        </div>

                        <div className='form-item'>
                            <label 
                                htmlFor='sign-up-page-account-type'>
                                Account Type
                            </label>
                            <select 
                                name="account-type"
                                id="sign-up-page-account-type"
                                required
                                onChange={this.handleChange}>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                                <option value="">D</option>
                            </select>
                        </div>

                        <div className='form-item'>
                            <label 
                                htmlFor='sign-up-page-org-name'>
                                Organization Name
                            </label>
                            <input 
                                type="text"
                                placeholder="Organization Name"
                                id="sign-up-page-org-name"
                                name="org-name"
                                onChange={this.handleChange}
                            />
                            {/* {formErrors.orgName.length > 0 && (
                            <span className="errorMessage">{formErrors.orgName}</span>
                        )} */}
                        </div>

                        <div className='form-item'>
                            <label 
                                htmlFor='sign-up-page-password'>
                                Password
                            </label>
                            <input 
                                type="password"
                                placeholder="Password"
                                required 
                                name="password"
                                id="sign-up-page-password"
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                        )}
                        </div>

                        <div className='form-item'>

                            <small>
                                Already have an account?
                                <Link to="/log-in">
                                    Log In
                                </Link>
                            </small>
                        </div>

                        <div className='form-item'>
                            <button 
                                type="submit">
                                Create Account
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default SignUpPage
