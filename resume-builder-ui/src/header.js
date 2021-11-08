import React, { Component } from 'react'
import Navigation from './navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home'
import About from './about'
import ContactUs from './contactus'
import Temp from './temp'

//let loggedIn = true;

/*let logging = () => {
    return (
        loggedIn?<Route path="/login" exact component={handleLoginClick}/>
        :<Route path="/logout" exact component={handleLogoutClick}/>
    )
}*/

/*function handleLoginClick() {
 return null;
}

function handleLogoutClick() {
return null;
}*/

class Header extends Component {
    render() {
        //let logging =
        //        loggedIn?<Route path="/login" exact component={handleLoginClick}/>
        //        :<Route path="/logout" exact component={handleLogoutClick}/>
        return (
                <Router>
                    <Navigation />
                    
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contactus" exact component={ContactUs} />
                        <Route path="/temp" exact component={Temp}/>
                    </Switch>
                </Router>
        )
    }
}

export default Header;