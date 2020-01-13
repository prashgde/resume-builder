import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import SkillsIcon from './images/icons/skills.png'

const member = {
    "skills": [
        {
            "name": "OOPS",
            "rating": 4
        },
        {
            "name": "Web Development",
            "rating": 4
        },
        {
            "name": "C#",
            "rating": 4
        },
        {
            "name": "CSS",
            "rating": 3
        },
        {
            "name": "C++",
            "rating": 3
        },
        {
            "name": "HTML",
            "rating": 4
        },
        {
            "name": "Javascript",
            "rating": 4
        },
        {
            "name": "React",
            "rating": 3.5
        },
    ]
}

class Skills extends Component {
    render() {
        return(
            <div>
                <h3>
                    <img src={SkillsIcon} className="smallIcon" alt="skills"></img>Skills
                </h3>
                <ul className="nondecoratedList"><br></br>
                    {
                        member.skills.map(skill => 
                            <li>
                                {skill.name}
                                <hr style = {{visibility: 'hidden', height: "0"}}></hr>
                                <LinearProgress color="secondary" variant="determinate" value={skill.rating*20}/>
                                <hr style = {{visibility: 'hidden', height: "10pt"}}></hr>
                            </li>
                            )
                    }
                </ul>
            </div>
        )
    }
}

export default Skills;