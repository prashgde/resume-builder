import React, { Component } from 'react';
import ProfessionalSummaryIcon from './images/icons/professionalsummary.png'

const member = {
    "professionalSummary":
    `Skillful Software Engineer with verifiable success in delivering 
    appropriate technology solutions to the customers. 
    Comprehensive knowledge of agile methodologies, desktop and web-based applications. 
    Innovative change agent with a unique mix 
    of high-level technology direction and deep technical expertise. 
    Keenly interested in persuing the career as a full stack developer.`
}

class ProfessionalSummary extends Component {
    render() {
        return (
            <div>
                <h3>
                    <img src={ProfessionalSummaryIcon} className="smallIcon" alt="professional summary"></img> Professional Summary
                </h3>
                <p className="professionalSummary">
                    {member.professionalSummary}
                </p>
            </div>
        )
    }
}

export default ProfessionalSummary;