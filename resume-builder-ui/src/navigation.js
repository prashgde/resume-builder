import React, { Component } from 'react'
import { Link } from 'react-router-dom'

let loggedIn = true;

class Navigation extends Component {

    render() {
        let logging = loggedIn ?
            <Link to="/login" id="login">LOGIN</Link> :
            <Link to="/logout" id="logout">LOGOUT</Link>
        return (
            <div className="navigationWrapper flexContainer">
                <nav id="primaryNav" className="navigation">
                    <Link to="/">HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/about">ABOUT</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/contactus">CONTACT US</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/temp">TEMP</Link>
                </nav>
                <nav id="secondaryNav" className="navigation">
                    {logging}
                </nav>
            </div>
        )
    }
}

export default Navigation;