import React from 'react';

import ShoppingList from './components/shoppingList';
import Login from './components/login';
import Register from './components/register';
import {Switch, Route} from 'react-router-dom';

class Routes extends React.Component{

    loginSubmit = (values)=>{
        console.log('login values', values);
    }

    registerSubmit = (values)=>{
        console.log('register values', values);
    }

    render(){
        return ( 
            <React.Fragment>
                <div className="container">
                    <Switch>
                            <Route path="/login">
                                <Login onSubmit={this.loginSubmit} />
                            </Route>
                            <Route path="/register">
                                <Register onSubmit={this.registerSubmit} />
                            </Route>
                            <Route path="/" exact>
                                <ShoppingList />
                            </Route>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Routes;