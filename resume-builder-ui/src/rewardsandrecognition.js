import React, { Component } from 'react'

const member = {
    "rewardsandrecognition": [
        `Runner up of Best Booth for TekExcel Addin in Scintilla 2018, an Engineering symposium held at Tektronix, Fluke, Anderson-Negele and Setra.`,
        `Multiple "Inspire Awards" for contribution to LXI Certification for different series of instruments.`,
        "Runner Up at Table Tennis Tournament held at Tektronix, Fluke, Anderson-Negele.",
        "Winner of Fortive has got talent for singing/whistling performace.",
        "Winner of several cultural activities held at Tektronix and Fluke.",
        "Was selected for District Level Hindusthani Classical Music in Uttara Kannada for singing with Harmonium."
    ]
}

class RewardsAndRecognition extends Component {
    render() {
        return (
            <div>
                <h3>
                    Rewards And Recognition
                </h3>
                <ul className="unorderedList">
                    {
                        member.rewardsandrecognition.map(rr =>
                            <li>
                                {rr}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default RewardsAndRecognition;