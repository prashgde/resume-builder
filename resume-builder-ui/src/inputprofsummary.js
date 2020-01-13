import React from 'react'
import { TextField, Button } from '@material-ui/core'
import BackwardArrowIcon from '@material-ui/icons/ArrowBackIos'
import ForwardArrowIcon from '@material-ui/icons/ArrowForwardIos'

const styles = {
    formContainer: {
        width: "50vh",
        marginLeft: "50vh"
    },
    form: {
        margin: "3vh"
    },
    button: {
        margin: "1vh"
    }
}

export default function InputProfSummary() {
    return (
        <div style={styles.formContainer}>
            <h2>Professional Summary</h2>
            <form style={styles.form}>
                <TextField
                    required
                    variant="outlined"
                    multiline
                    rows="4"
                    fullWidth
                    label="Required"
                    helperText="Professional Summary"
                >

                </TextField>
                <br></br><br></br>
                <Button
                    variant="contained"
                    color="primary"
                    style={styles.button}
                    startIcon={<BackwardArrowIcon/>}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={styles.button}
                    endIcon={<ForwardArrowIcon/>}>
                    Next
                </Button>
            </form>
        </div>
    )
}