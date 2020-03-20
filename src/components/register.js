import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from './../globals/renderfield';

import { required, minLength, email } from './../globals/validations';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {handleSubmit} = this.props;
        return ( 
            <div className="mt-5">
                <h2 className="text-center">Register</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-form form-block">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="form-group">
                                    <Field 
                                        type="email"
                                        component={renderField}
                                        label="Email address:"
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Enter email" 
                                        id="email" />
                                </div>
                                <div className="form-group">
                                    <Field 
                                        type="text" 
                                        component={renderField}
                                        label="Name:"
                                        name="name" 
                                        className="form-control" 
                                        placeholder="Enter name" 
                                        id="name" />
                                </div>
                                <div className="form-group">
                                    <Field 
                                        type="password" 
                                        component={renderField}
                                        label="Password:"
                                        name="password" 
                                        className="form-control" 
                                        placeholder="Enter password" 
                                        id="pwd" />
                                </div>
                                <div className="form-group">
                                    <Field 
                                        type="password" 
                                        component={renderField}
                                        label="Confirm Password:"
                                        name="confirm-password" 
                                        className="form-control" 
                                        placeholder="Enter password" 
                                        id="cPwd" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

Register = reduxForm({
    // a unique name for the form
    form: 'registerForm'
})(Register)
 
export default Register;