import React from 'react'

const member = {
    "interests": [
        {
            "category": "Music",
            "interests": [
                "Sing", "Play harmonium and piano"
            ]
        },
        {
            "category": "Sports",
            "interests": [
                "Table Tennis", "Badminton"
            ]
        },
        {
            "category" : "Misc",
            "interests" : [
                "Chess", "Rubik's cube"
            ]
        }
    ]
}

export default function Interests() {
    return (
        <div>
            <h3>
                Interests
            </h3>
            <ul className="nondecoratedList">
                {
                    member.interests.map(interest => 
                        <li>
                            <label className="subtitle">{interest.category}</label>
                            <ul className="unorderedList">
                            {interest.interests.map(interest => 
                                <li>
                                    {interest}
                                </li>
                                )}
                            </ul>
                            <br></br>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}