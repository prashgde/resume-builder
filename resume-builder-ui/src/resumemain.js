import React, {Component} from 'react'
import ProfessionalSummary from './professionalsummary'
import EmploymentHistory from './employmenthistory'
import Education from './education'

class ResumeMain extends Component {
    render() {
        return(
            <div className="resumeMain">
                <ProfessionalSummary/>
                <EmploymentHistory/>
                <Education/>
            </div>
        )
    }
}

export default ResumeMain;