import React, { Component } from 'react'
import SocialIcon from './images/icons/social/social.png'
import LinkedInIcon from './images/icons/social/linkedin.png'
import FacebookIcon from './images/icons/social/facebook.png'
import InstagramIcon from './images/icons/social/instagram.png'
import TwitterIcon from './images/icons/social/twitter.png'

const member = {
    "social": {
        "linkedin": "https://www.linkedin.com/in/prasanna-hegde/",
        "facebook": "https://www.facebook.com/prasanna.hegde.7712",
        "instagram": "https://www.instagram.com/impetuously_versatile",
        "twitter": "https://twitter.com/prashgde"
    }
}

class Social extends Component {
    render() {
        return (
            <div className="social">
                <h3><div className="flexContainer icon">&nbsp;&nbsp;&nbsp;&nbsp;<img src={SocialIcon} alt="social"></img><div>&nbsp;&nbsp;Social</div></div></h3>

                <div><div><img className="smallIcon" src={LinkedInIcon} alt="linkedin"></img>&nbsp;{member.social.linkedin}</div></div>
                <div><div><img className="smallIcon" src={FacebookIcon} alt="facebook"></img>&nbsp;{member.social.facebook}</div></div>
                <div><div><img className="smallIcon" src={InstagramIcon} alt="instagram"></img>&nbsp;{member.social.instagram}</div></div>
                <div><div><img className="smallIcon" src={TwitterIcon} alt="twitter"></img>&nbsp;{member.social.twitter}</div></div>
            </div>
        )
    }
}

export default Social;