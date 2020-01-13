import React from 'react'
import RewardsAndRecognition from './rewardsandrecognition'
import Workshops from './workshops'
import EmptyDiv from './emtpydiv'
import Interests from './interests'

const ResumeFooter = () => {
    return (
        <div className="resumeFooter">
            <div className="resumeMain">
                <RewardsAndRecognition />
                <Workshops />
            </div>
            <EmptyDiv />
            <Interests className="side" />
        </div>
    )
}

export default ResumeFooter;