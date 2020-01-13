import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import InputPersonal from "./inputpersonal";
import InputSocial from "./inputsocial";
import InputProfSummary from "./inputprofsummary";
import InputEmpHistory from "./inputemphistory";
import InputEducation from "./inputeducation"
import InputProjects from "./inputprojects"
import InputRewsAndReco from "./inputrewsandreco"
import InputWorkshops from "./inputworkshops"
import InputInterests from "./inputinterests"
import InputSkills from "./inputskills";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        margin: "0 5vh 5vh 5vh"
    }
});

class Home extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className="home background">
                <div className="content">
                    <br></br>
                    <h1>Start Building Your Resume</h1>
                    <Router>
                        <div className={classes.root}>
                            <AppBar position="relative" color="secondary">
                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    style={{display: "flex"}}
                                >
                                    <Tab label="Personal" component={Link} to="/personal" />
                                    <Tab label="Social" component={Link} to="/social" />
                                    <Tab label="Summary" component={Link} to="/profsummary" />
                                    <Tab label="History" component={Link} to="/emphistory" />
                                    <Tab label="Education" component={Link} to="/education" />
                                    <Tab label="Projects" component={Link} to="/projects" />
                                    <Tab label="Skills" component={Link} to="/skills"/>
                                    <Tab label="Rews and Reco" component={Link} to="/rewsnreco" />
                                    <Tab label="Workshops" component={Link} to="/workshops" />
                                    <Tab label="Interests" component={Link} to="/interests" />
                                </Tabs>
                            </AppBar>

                            <Switch>
                                <Route path="/personal" exact component={InputPersonal} />
                                <Route path="/social" exact component={InputSocial} />
                                <Route path="/profsummary" exact component={InputProfSummary}/>
                                <Route path="/emphistory" exact component={InputEmpHistory}/>
                                <Route path="/education" exact component={InputEducation}/>
                                <Route path="/projects" exact component={InputProjects}/>
                                <Route path="/skills" exact component={InputSkills}/>
                                <Route path="/rewsnreco" exact component={InputRewsAndReco}/>
                                <Route path="/workshops" exact component={InputWorkshops}/>
                                <Route path="/interests" exact component={InputInterests}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
