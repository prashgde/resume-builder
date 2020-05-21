import React, { Component } from 'react'
import Navigation from './navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home'
import About from './about'
import ContactUs from './contactus'
import Temp from './temp'
import Login from './login'
import Logout from './logout'

class Main extends Component {
    
    render() {
        return (
                <Router>
                    <Navigation />

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contactus" exact component={ContactUs} />
                        <Route path="/temp" exact component={Temp} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/logout" exact component={Logout} />
                    </Switch>
                </Router>
        )
    }
}

export default Main;