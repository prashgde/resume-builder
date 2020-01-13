import React from 'react'
import { TextField, Button } from '@material-ui/core'
import BackwardArrowIcon from '@material-ui/icons/ArrowBackIos'
import ForwardArrowIcon from '@material-ui/icons/ArrowForwardIos'

const styles = {
    form: {
        marginLeft: "45vh"
    },
    horizontal: {
        display: "flex",
        flexDirection: "row"
    },
    vertical: {
        dispaly: "flex"
    },
    textFieldContainer: {
        margin: "3vh"
    },
    buttonContainer: {
        marginLeft: "-45vh"
    },
    button: {
        margin: "1vh"
    }
}

export default function InputSocial() {
    return (
        <div style={styles.main}>
            <h2>Social Information</h2>
            <form style={styles.form}>
                <div style={styles.vertical}>
                    <div style={styles.horizontal}>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                required
                                variant="outlined"
                                label="Required"
                                helperText="Your LinkedIn account ID"
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                variant="outlined"
                                label="Optional"
                                helperText="Facebook account ID"
                            />
                        </div>
                    </div>
                    <div style={styles.horizontal}>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                variant="outlined"
                                label="Optional"
                                helperText="Instagram Account ID"
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                variant="outlined"
                                label="Optional"
                                helperText="Twitter Account ID"
                            />
                        </div>
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
                </div>
            </form>
        </div>
    )
}