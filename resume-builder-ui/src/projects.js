import React, { Component } from 'react'
import ProjectsIcon from './images/icons/projects.png'

const member = {
    "projects": [
        {
            "title": "Resume Builder",
            "descriptionItems": [
                "A simple and elagant way to build your resume from scratch.",
                "Built with React to ensure faster rendering.",
                "Uses Material UI keeping the user interface tidy.",
                "Uses Express on the backend and MongoDB.",
                "This resume is built using this tool.",
            ],
            "responsibilities": [
                "Developed the front end using React.",
                "Learnt MongoDB, created models and implemented REST API's using Express.",
                "Integrated the components."
            ]

        },
        {
            "title": "TekExcelAddin Prototype",
            "descriptionItems": [
                `TekExcelAddin is an add-in to Microsoft™ Excel 
                and allows the users to connect to 
                an oscilloscope, send and receive settings, capture and plot waveform data, 
                measurements and Triggered captures.`,
                "Has a responsive UI built using UI Fabric React.",
                "Uses Node server to provide REST API's.",
                "Node server communicates to C/C++ instrument parser using sockets.",
                "This was not productized due to security reasons."
            ],
            "responsibilities": [
                "Designed the user interface for the add in using Fabric React.",
                "Implemented an N-API wrapper to invoke native API's on the instrument side from Node.",
                "Developed a working prototype that can communicate to any instrument."
            ]
        },
        {
            "title": "TekExcelAddin",
            "descriptionItems": [
                `An add-in to Microsoft™ Excel 
                and allows the users to connect to 
                an oscilloscope, send and receive settings, capture and plot waveform data, 
                measurements and Triggered captures.
                `,
                `Enables post analysis of data. What a user can achieve with it is 
                only restricted by his/her imagination.`,
                `It's a C# Winform Application that uses TCP sockets to communicate 
                to the instrument parser`,
            ],
            "responsibilities": [
                "Refined the requirements.",
                "Implemented the complete UI and backend."
            ]
        },
        {
            "title": "LXI",
            "descriptionItems": [
                `LXI stands for LAN eXtensions for Instrumentation. It is the standard for LAN 
                equipped instrumentation that helps reduce the time it takes to set up, 
                configure, and debug test systems.`,
                `Provides a web solution to access, control supported instruments.`,
                `Enables Remote Desktop feature on a browser as an option.`,
                `Ensures broad instrument availability`,
                `Is supported by a wide array of instruments.`,
                `Uses tomcat web server as a middleware between the Web UI and the instrument parser.`
            ],
            "responsibilities": [
                `Develped the web UI and added tomcat server support.`,
                `Implemented tomcat server support at the backend.`,
                `Implemented Java Servelets.`,
                `Added support to new instrument series.`,
                `Actively involved in regular maintenance and bux fixes.`
            ]

        },
        {
            "title": "LXI Talker/Listener",
            "descriptionItems": [
                `Talker/Listener is a tool added to LXI as a company specific feature.`,
                `Enables user to send commands, change instrument settings and also get back 
                response from instruments using web interface.`,
                `It's integrated to LXI and works like any other LXI web page.`
            ],
            "responsibilities": [
                "Refined the requirements.",
                "Implemented the UI.",
                "Implemented Servlets.",
                "Implemented the C/C++ backend."
            ]
        },
        {
            "title": "Optical GMPLS",
            "descriptionItems": [
                `Generalized Multi-Protocol Label Switching (GMPLS) protocol is used in combination with 
                Dense Wavelength Division Multiplexing (DWDM).`,
                `Defines an optical network route intelligently from end to end.`,
                `Provides an option to automatically restore to a new route and revert to the original route.`
            ],
            "responsibilities": [
                "Involed in maintenance and bux fixes for Revertible Restoration Support.",
                "Enhanced the software to support a new power control mode to reduce power consumption.",
                "Provided support for a new network card."
            ]
        }
    ]
}

class Projects extends Component {
    render() {
        return (
            <div>
                <br/>
                <h3>
                    <img src={ProjectsIcon} className="smallIcon" alt="projects"></img> Projects
                </h3>
                <ul className="nondecoratedList">
                    {
                        member.projects.map(project =>
                            <li>
                                <h4>{project.title}</h4>
                                <div className="flexContainer">
                                    <div className="resumeMain">
                                        <ul className="unorderedList">
                                            {
                                                project.descriptionItems.map(descItem =>
                                                    <li>
                                                        {descItem}
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="emptyDiv"></div>
                                    <div className="side">
                                        <ul className="unorderedList">
                                            {project.responsibilities.map(responsibility =>
                                                <li>{responsibility}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Projects;