import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import {renderField} from './../globals/renderfield';
import { required, minLength, email } from './../globals/validations';

// import {connect} from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { handleSubmit, submitting } = this.props;
        return ( 
            <div className="mt-5">
                <h2 className="text-center">Login</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-form form-block">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="form-group">
                                    <Field 
                                        type="email" 
                                        name="email" 
                                        label="Email address:"
                                        id="email" 
                                        component={renderField}
                                        className="form-control" 
                                        placeholder="enter email" />
                                </div>
                                <div className="form-group">
                                    <Field type="password" 
                                           name="password" 
                                           label="Password:"
                                           component={renderField} 
                                           className="form-control" 
                                           id="password" 
                                           placeholder="enter password" />
                                </div>
                                <button disabled={submitting} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

// const mapStateToProps = (state)=>{
//     return state;
// }
// const mapDispatchToProps = (dispatch)  => ({
//     // ...
// });


// Login = connect(mapStateToProps, mapDispatchToProps)(Login);

// export default reduxForm({
//     // a unique name for the form
//     form: 'loginForm'
// })(Login);

export default reduxForm({
    form: 'loginForm'
})(Login)

// export default Login;