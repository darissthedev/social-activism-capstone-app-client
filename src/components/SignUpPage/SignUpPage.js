import React, { Component } from 'react'

class SignUpPage extends Component {
    render() {
        return (
            <div>
                <section className='sign-up-page'>
                    <form className='sign-up-page-form'>
                        <div className="sign-up-page-header">
                            <h1>Create Account</h1>
                        </div>
                        <div className='form-item'>
                            <label htmlFor='sign-up-page-name'>Full Name</label>
                            <input type="text" placeholder="Full Name" required id="sign-up-page-name" />
                        </div>

                        <div className='form-item'>
                            <label htmlFor='sign-up-page-email'>Email Address</label>
                            <input type="text" placeholder="Email Address" required id="sign-up-page-email" />
                        </div>

                        <div className='form-item'>
                            <label htmlFor='sign-up-page-account-type'>Account Type</label>
                                <select name="account-type" id="sign-up-page-account-type" required>
                                    <option value="">A</option>
                                    <option value="">B</option>
                                    <option value="">C</option>
                                    <option value="">D</option>
                                </select>
                        </div>

                        <div className='form-item'>
                            <label htmlFor='sign-up-page-org-name'>Organization Name</label>
                            <input type="text" placeholder="Organization Name" id="sign-up-page-org-name" />
                        </div>

                        <div className='form-item'>
                            <label htmlFor='sign-up-page-password'>Password</label>
                            <input type="text" placeholder="Password" required id="sign-up-page-password" />
                        </div>

                        <div className='form-item'>

                            <p>
                                Already have an account?
                                <a href="/">Log In</a>
                            </p>
                        </div>

                        <div className='form-item'>
                             <a href="/" className="myButton">Sign Up</a>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default SignUpPage
