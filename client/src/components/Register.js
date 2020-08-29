import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import Student from './Student';
import Tutor from './Tutor';

class Register extends Component {

  render() {
    return (



      <Router>
        <div className="App">



          <div className="container">

            <div className="col-md-6 mt-5 mx-auto">
              <form action="/tutor" component={Tutor} className="inline">
                <button type="submit" className="btn btn-lg btn-primary btn-block" > I want to learn  </button>
              </form>
            </div>

            <div className="col-md-6 mt-5 mx-auto">
              <form action="/student" component={Student} className="inline">
                <button type="submit" className="btn btn-lg btn-primary btn-block" > I want to learn  </button>
              </form>
            </div>


          </div>



        </div>

      </Router >
    )
  }

}

export default Register;