import React from 'react'
import { Fab, Button, TextField, Checkbox } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BackwardArrowIcon from '@material-ui/icons/ArrowBackIos'
import ForwardArrowIcon from '@material-ui/icons/ArrowForwardIos'

const styles = {
    vertical: {
        display: "flex"
    },
    horizontal: {
        display: "flex",
        flexDirection: "row",
        marginTop: "-3vh"
    },
    textFieldContainer: {
        margin: "3vh",
        display: "flex"
    },
    checkbox: {
        float: "left"
    },
    checkboxContainer: {
        marginLeft: "3vh"
    },
    checkboxLabel: {
        float: "left",
        marginTop: "1vh"
    },
    strongLabel: {
        fontFamily: "Roboto-Bold",
        fontSize: "14pt"
    },
    inputContainer: {
        marginLeft: "50vh"
    },
    fab: {
        marginTop: "5vh"
    },
    buttonContainer: {
        margin: 0
    },
    h3: {
        color: "black",
        fontFamily: "Roboto-Bold",
        fontSize: "13pt",
        marginLeft: "-50vh"
    },
    button: {
        margin: "1vh"
    },
    main: {
        marginBottom: "5vh"
    }
}

class InputEmpHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             inputJobList: [],
            jobNumber: 2}
    }
    render() {
        return (
            <div className="main">
                <h2>Employment History</h2>
                <br></br><br></br>
                <form>
                        <InputJob jobNumber={1}/>
                        {this.state.inputJobList.map(inputjob => inputjob)}
                        <div style={styles.fab}>
                            <Fab color="primary" size="medium" onClick={() => {
                              const inputJobList = this.state.inputJobList
                              let jobNumber = this.state.jobNumber
                              this.setState({
                                  jobNumber: jobNumber+1,
                                  inputJobList: inputJobList.concat(<InputJob jobNumber={jobNumber}/>)
                              })  
                            }}>
                                <AddIcon />
                            </Fab> &nbsp;&nbsp; <label style={styles.strongLabel}>Click here to add another job</label>
                        </div>
                        <div style={styles.buttonContainer}>
                            <br></br><br></br>
                            <Button
                                variant="contained"
                                color="primary"
                                style={styles.button}
                                startIcon={<BackwardArrowIcon />}>
                                Back
                                </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                                style={styles.button}
                                endIcon={<ForwardArrowIcon />}>
                                Next
                                </Button>
                        </div>
                </form>
            </div>
        )
    }
}

function InputJob(props) {
    return (
        <div className="main" style={styles.main}>
            <div style={styles.inputContainer}>
                <h3 style={styles.h3}>Job {props.jobNumber}</h3>
                <div style={styles.vertical}>
                    <div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                label="Required"
                                helperText="Your job title"
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                label="Required"
                                helperText="Company name"
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                label="Required"
                                helperText="Company Location"
                            />
                        </div>
                        <div style={styles.horizontal}>
                            <div style={styles.textFieldContainer}>
                                <TextField
                                    required
                                    variant="outlined"
                                    type="date"
                                    helperText="Start date (required*)"
                                />
                            </div>
                            <div style={styles.textFieldContainer}>
                                <TextField
                                    required
                                    variant="outlined"
                                    type="date"
                                    helperText="End date (required*)"
                                />
                            </div>
                        </div>
                        <div style={styles.checkboxContainer}>
                            <Checkbox style={styles.checkbox} color="default" value="currentCompany" />
                            <label style={styles.checkboxLabel}>I currently work here</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputEmpHistory;