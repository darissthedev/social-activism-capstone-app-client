import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

const emailRegex = RegExp(/^[a-zA-A0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// const formValid = formErrors => {
//     let valid = true;
//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false);
//     });
//     return valid;
// }

class SignUpPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            full_name: "",
            email: "",
            account_type: "",
            orgName: "",
            password: "",
            formErrors: {
                full_name: "",
                email: "",
                account_type: "",
                password: ""
            }
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { full_name, email, account_type, orgName, password } = evt.target
        this.setState({ error: null })
        AuthApiService.postUser({
            full_name: full_name.value,
            email: email.value,
            account_type: account_type.value,
            orgName: orgName.value,
            password: password.value,
        })
        .then(user => {
            full_name.value = ''
            email.value = ''
            account_type.value = ''
            orgName.value = ''
            password.value = ''
            TokenService.saveAuthToken(user.authToken)
            this.props.history.push('/explore-feed')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    };

    handleChange = evt => {
        evt.preventDefault();
        const { name, value } = evt.target;
        let formErrors = this.state.formErrors;

        switch(name){
            case "full_name":
                formErrors.full_name = 
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

    render() {
        const { formErrors } = this.state
        return (
            <div>
                <div className="landing"></div>
                <section className='sign-up-page'>
                    <div className="page-content">
                    <header className="sign-up-page-header">
                        <h1>Create Account
                        </h1>
                    </header>
                    <form 
                        className='sign-up-page-form'
                        onSubmit={this.handleSubmit}>
                        <div className='sign-up-page-form-item'>
                            <input 
                                type="text"
                                placeholder="Full Name"
                                required 
                                name="full_name"
                                id="sign-up-page-name"
                                onChange={this.handleChange} 
                                />
                                {formErrors.full_name.length > 0 && (
                            <span className="errorMessage">{formErrors.full_name}</span>
                        )}
                        </div>

                        <div className='sign-up-page-form-item'>
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

                        <div className='sign-up-page-form-item'>
                            <select 
                                name="account_type"
                                id="sign-up-page-account-type"
                                required
                                onChange={this.handleChange}>
                                <option value="none" hidden> Account Type...</option>
                                <option value="activist">Activist</option>
                                <option value="organization">Organization</option>
                            </select>
                        </div>

                        <div className='sign-up-page-form-item'>
                            <input 
                                type="text"
                                placeholder="Organization Name"
                                id="sign-up-page-org-name"
                                name="orgName"
                                onChange={this.handleChange}
                            />
                            {/* {formErrors.orgName.length > 0 && (
                            <span className="errorMessage">{formErrors.orgName}</span>
                        )} */}
                        </div>

                        <div className='sign-up-page-form-item'>
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

                        <div className='sign-up-page-form-item sign-up-small'>

                            <small>
                                Already have an account? 
                                <Link to="/log-in" className="sign-up-log-in"> Log In</Link>
                            </small>
                        </div>

                        <div className='sign-up-page-form-item'>
                            <button 
                                className="red"
                                type="submit">
                                Create Account
                            </button>
                        </div>
                    </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default SignUpPage
