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

class InputRewsAndReco extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputList: [],
            inputNumber: 2
        }
    }
    render() {
        return (
            <div>
                <h2>Rewards and Recognition</h2>
                <br></br><br></br>
                <form>
                    <Input inputNumber={1} />
                    {this.state.inputList.map(input => input)}
                    <div style={styles.fab}>
                        <Fab color="primary" size="medium" onClick={() => {
                            const inputList = this.state.inputList
                            let inputNumber = this.state.inputNumber
                            this.setState({
                                inputNumber: inputNumber + 1,
                                inputList: inputList.concat(<Input inputNumber={inputNumber} />)
                            })
                        }}>
                            <AddIcon />
                        </Fab> &nbsp;&nbsp; <label style={styles.strongLabel}>Click here to add another reward/recognition</label>
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

export function Input(props) {
    return (
        <div className="main" style={styles.main}>
            <h3 style={styles.h3}>Reward/Recognition {props.inputNumber}</h3>
            <div style={styles.vertical}>
                <div style={styles.inputContainer}>
                    <div style={styles.textFieldContainer}>
                        <TextField
                            required
                            variant="outlined"
                            fullWidth
                            label="Required"
                            helperText="Reward/recognition you got"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputRewsAndReco