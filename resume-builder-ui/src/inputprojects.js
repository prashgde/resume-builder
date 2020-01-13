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
        marginLeft: "17vh",
        width: "100vh"
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
        fontSize: "13pt"
    },
    button: {
        margin: "1vh"
    },
    main: {
        marginBottom: "5vh"
    }
}

class InputProjects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputProjectList: [],
            projectNumber: 2
        }
    }
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <br></br><br></br>
                <form>
                    <InputProject projectNumber={1} />
                    {this.state.inputProjectList.map(inputProject => inputProject)}
                    <div style={styles.fab}>
                        <Fab color="primary" size="medium" onClick={() => {
                            const inputProjectList = this.state.inputProjectList
                            let projectNumber = this.state.projectNumber
                            this.setState({
                                projectNumber: projectNumber + 1,
                                inputProjectList: inputProjectList.concat(<InputProject projectNumber={projectNumber} />)
                            })
                        }}>
                            <AddIcon />
                        </Fab> &nbsp;&nbsp; <label style={styles.strongLabel}>Click here to add another project</label>
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

function InputProject(props) {
    return (
        <div className="main" style={styles.main}>
            <h3 style={styles.h3}>Project {props.projectNumber}</h3>
            <div>
                
                <div style={styles.vertical}>
                    <div style={styles.inputContainer}>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                fullWidth
                                label="Required"
                                helperText="Name of your project"
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                multiline
                                fullWidth
                                rows="4"
                                variant="outlined"
                                label="Required"
                                helperText="Enter the project details here. 'Enter' seperates the items and presents as a bulleted list."
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                multiline
                                fullWidth
                                rows="4"
                                variant="outlined"
                                label="Rrequired*"
                                helperText="Enter your contribution here. 'Enter' seperates the items and presents as a bulleted list."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputProjects;