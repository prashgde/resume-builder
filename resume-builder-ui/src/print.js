import React from 'react'
import ReactToPrint from 'react-to-print'
import Resume from './resume'
import { Button } from '@material-ui/core'
import PrintIcon from '@material-ui/icons/Print'

class Print extends React.Component {
    render() {
        return (
            <div>
                <div className="background headerContainer">
                    <ReactToPrint
                        trigger={() => <Button variant="contained" color="secondary" startIcon={<PrintIcon />}>Print</Button>}
                        content={() => this.componentRef}
                    />
                </div>

                <Resume ref={el => (this.componentRef = el)} />

            </div>
        );
    }
}

export default Print;
