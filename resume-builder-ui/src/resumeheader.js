import React, { Component } from 'react'
import Personal from './personal'
import Social from './social'

class ResumeHeader extends Component {
    render() {
        return (
            <div className="resumeHeader">
                <Personal/>
                <Social/>
            </div>
        )
    }
}

export default ResumeHeader;