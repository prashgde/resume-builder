import React from 'react'
import { TextField, IconButton, Button } from '@material-ui/core'
import AvatarPlaceholder from './images/avatarplaceholder.png'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import BackwardArrowIcon from '@material-ui/icons/ArrowBackIos'
import ForwardArrowIcon from '@material-ui/icons/ArrowForwardIos'

const styles = {
    form: {
        marginLeft: "20vh"
    },
    horizontal: {
        display: "flex",
        flexDirection: "row"
    },
    vertical: {
        dispaly: "flex",
        color: "red"
    },
    textFieldContainer: {
        margin: "3vh"
    },
    avatar: {
        position: "relative",
        height: "20vh",
        width: "20vh",
        margin: "5vh"
    },
    buttonContainer: {
        marginLeft: "-20vh"
    },
    button: {
        margin: "1vh"
    }
}

export default function InputPersonal() {
    return (
        <div>
            <h2>Personal Information</h2>
            <form autoComplete="on" style={styles.form}>
                <div style={styles.horizontal}>
                    <div className="avatarContainer">
                        <img src={AvatarPlaceholder} style={styles.avatar} alt="Snow" />
                        <IconButton className="uploadImageButton"
                            color="primary"
                        >
                            <PhotoCamera />
                        </IconButton>
                    </div>
                    <div style={styles.vertical}>
                        <div style={styles.horizontal}>
                            <div style={styles.textFieldContainer}>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="Required"
                                    helperText="Your name"
                                />
                            </div>
                            <div style={styles.textFieldContainer}>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="Required"
                                    type="email"
                                    helperText="Email address"
                                />
                            </div>
                        </div>
                        <div style={styles.horizontal}>
                            <div style={styles.textFieldContainer}>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="Required"
                                    type="tel"
                                    helperText="Phone number"
                                />
                            </div>
                            <div style={styles.textFieldContainer}>
                                <div>
                                    <TextField
                                        required
                                        variant="outlined"
                                        label="Required"
                                        helperText="Address Line 1"
                                    />
                                </div>
                                <br></br>
                                <div>
                                    <TextField
                                        variant="outlined"
                                        label="Optional"
                                        helperText="Address Line 2"
                                    />
                                </div>
                                <br></br>
                                <div>
                                    <TextField
                                        variant="outlined"
                                        label="Optional"
                                        helperText="Address Line 3"
                                    />
                                </div>
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
                </div>
            </form>
        </div>
    )
}