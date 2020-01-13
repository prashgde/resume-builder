import React, { Component } from 'react'
import { Fab, Button, TextField } from '@material-ui/core'
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

class InputEducation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputInstituteList: [],
            instituteNumber: 2
        }
    }
    render() {
        return (
            <div>
                <h2>Education</h2>
                <br></br><br></br>
                <form>
                    <InputInstitute instituteNumber={1}/>
                    {this.state.inputInstituteList.map(inputInstitute => inputInstitute)}
                    <div style={styles.fab}>
                        <Fab color="primary" size="medium" onClick={() => {
                            const inputInstituteList = this.state.inputInstituteList
                            let instituteNumber = this.state.instituteNumber
                            this.setState({
                                instituteNumber: instituteNumber + 1,
                                inputInstituteList: inputInstituteList.concat(<InputInstitute instituteNumber={instituteNumber} />)
                            })
                        }}>
                            <AddIcon />
                        </Fab> &nbsp;&nbsp; <label style={styles.strongLabel}>Click here to add another institute</label>
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

function InputInstitute(props) {
    return (
        <div className="main" style={styles.main}>
            <div style={styles.inputContainer}>
                <h3 style={styles.h3}>Institue {props.instituteNumber}</h3>
                <div style={styles.vertical}>
                    <div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                label="Required"
                                helperText="Name of the institute"
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                label="Required"
                                helperText="City"
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                label="Required"
                                helperText="Year of passing"
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                label="Required"
                                helperText="Result"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputEducation;