import React, { Component } from 'react'
import EmploymentHistoryIcon from './images/icons/employmenthistory.png'

const member = {
    "jobs" : [
        {
            "title": `Senior Software Develop Engineer, Infinera India Private Limited, 
            Bangalore`,
            "responsibilities": [
               `Develop embedded software applications to perform routing and signlaling in an optical network.`,
               `Add enhanced features to the testing framework using Javascript.`
            ],
            "period": "Jun. 2020 - Present"
        },
        {
           "title": `Software Design Engineer II, Tektronix Engineering India Private Limited, 
           Bangalore`,
           "responsibilities": [
              `Design and develop platform independent software solutions and web solutions that enable users to 
              communicate to instruments and control them using PC.`,
              `Use systematic approches and tools to design, develop and test the software and 
              improve the quality.`
           ],
           "period": "Jul. 2014 - May 2020"
        },
        {
           "title": "Intern, Gnostice Information Technologies, Bangalore",
           "responsibilities": [
              "Implement software using architectural and detailed design given.",
              "Build a developer friendly backend class library that provides generic API's.",
              "Consume the API's and build the UI using existing libraries."
           ],
           "period": "Jan. 2014 - Jun. 2014"
        }
     ]
}

class Jobs extends Component {
    render() {
        return (
            <div>
                <h3>
                    <img src={EmploymentHistoryIcon} className="smallIcon" alt="employment history"></img> Employment History
                </h3>
                    <ul className="nondecoratedList">
                        {
                            member.jobs.map(job =>
                                    <li>
                                        <label className="subtitle">{job.title}</label><br></br>
                                        <label className="subSubtitle">{job.period}</label><br></br><br></br>
                                        <ul className="unorderedList">
                                            {
                                                job.responsibilities.map(responsibility =>
                                                    <li>
                                                        {responsibility}
                                                    </li> 
                                                    )
                                            }
                                        </ul>
                                    </li>
                                )
                        }
                    </ul>
            </div>
        )
    }
}

export default Jobs;