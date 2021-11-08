import React, {Component} from 'react'
import EducationIcon from './images/icons/education.png'

const member = {
    "institutes": [
        {
            "name": "Rastriya Vidyalaya College of Engineering, Bangalore",
            "yearOfPassing": "2014",
            "result": "CPGA: 8.82"
        },
        {
            "name": "Alva's Pre-University College, Moodabidri",
            "yearOfPassing": "2010",
            "result": "Percentage: 94.83"
        }
    ]
}

class Education extends Component {
    render() {
        return (
            <div>
                <br/>
                <h3>
                    <img src={EducationIcon} className="smallIcon" alt="education"></img> Education
                </h3>
                <ul className="nondecoratedList">
                    {
                        member.institutes.map(institute =>
                            <li>
                                <label className="subtitle">{institute.name}</label>
                                <br></br>
                                <label className="subSubtitle">
                                {institute.yearOfPassing}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {institute.result}
                                <br></br><br></br>
                                </label>
                            </li>
                            )
                    }
                </ul>
            </div>
        )
    }
}

export default Education;