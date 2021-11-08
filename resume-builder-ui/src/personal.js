import React, { Component } from 'react';
import Avatar from './avatar'
import MyAvatar from './images/Prasanna.jpg'
import HomeIcon from './images/icons/header/home.png'
import MailIcon from './images/icons/header/mail.png'
import PhoneIcon from './images/icons/header/phone.png'

const member = {
    "personal": {
        "name": "PRASANNA HEGDE",
        "address": "Honavar, Karnataka - 581 334",
        "email": "prasanna.chittani@gmail.com",
        "phone": "+91-99009-63303"
    }
}

class Personal extends Component {
    render() {
        return (
            <div className="personal">
                <div className="flexContainer">
                    <div><Avatar avatarURL={MyAvatar} /></div>
                    <div className="name"><br></br>{member.personal.name}</div>
                </div>
                <br></br>
                <div><div className="flexContainer"><img src={HomeIcon} className="smallIcon" alt="Address"></img>
                    <div>
                        <div>&nbsp;{member.personal.address}</div>
                    </div></div>
                </div>
                <div><div><img className="smallIcon" src={MailIcon} alt="email"></img>&nbsp;{member.personal.email}</div></div>
                <div><div><img className="smallIcon" src={PhoneIcon} alt="phone"></img>&nbsp;{member.personal.phone}</div></div>
            </div>
        )
    }
}

export default Personal;