import React from 'react'

const member = {
    "workshops": [
        "Workshop on Office App Development by Microsoft Corporation held at Chancery Pavilion, Bangalore at 2015.",
        "Information Security & Cyber Forensics coundcted by CyberCure Solutions at Dept. of CSE< RVCE in Feb, 2012.",
        "Android Application Development conducted by Blrdroid in Dept. of CSE, RVCE in Feb 2013."
    ]
}

const Workshops = () => {
        return (
            <div>
                <h3>
                    Workshops
                </h3>
                <ul className="unorderedList">
                    {
                        member.workshops.map(workshop =>
                            <li>
                                {workshop}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
}

export default Workshops