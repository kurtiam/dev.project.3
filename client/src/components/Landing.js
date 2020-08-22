import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="main">
                <div className="row">
                    <div className="container">
                        <div className="jumbotron mt-5">
                            <div className="col-sm-8 mx-auto">
                                <h1 className="text-center">Welcome to TutorNet</h1>
                                <br></br>
                                <h4 className="text-center">Please log in or register to get a Match!</h4>
                                <br></br>
                                <p className="text-center"> TutorNet is...
                        <br></br>
                                    <br></br>
                                    <br></br>
                        Find a tutor in 3 easy steps:
                        <br></br>
                                    <br></br>
                        1. Login or register<br></br>
                        2. Enter your info<br></br>
                        3. Review yor Matches</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;