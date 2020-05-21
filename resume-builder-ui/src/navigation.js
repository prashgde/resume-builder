import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLoginClick() {
        this.setState({ loggedIn: true });
    }
    
    handleLogoutClick() {
        this.setState({ loggedIn: false });
    }

    render() {
        let logging = this.state.loggedIn ?
        <Link to="/logout" id="logout" onClick={this.handleLogoutClick}>LOGOUT</Link> :
            <Link to="/login" id="login" onClick={this.handleLoginClick}>LOGIN</Link>
        return (
            <div className="navigationWrapper flexContainer">
    <div>{this.props.loggedIn}</div>
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