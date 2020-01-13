import React, {Component} from 'react'
import Main from './resumemain'
import Side from './side'
import EmptyDiv from './emtpydiv'
import Projects from './projects'

class ResumeBody extends Component {
    render() {
        return(
            <div>
                <div className="resumeBody">
                <Main/>
                <EmptyDiv/>
                <Side/>
            </div>
            <div>
                <Projects/>
            </div>
            </div>
        )
    }
}

export default ResumeBody;