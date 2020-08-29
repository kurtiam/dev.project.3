import React, { Component } from 'react';


class Register extends Component {

  render() {
    return (

      <div className="container">

        <div className="col-md-6 mt-5 mx-auto">

          {/* <button onclick="location.href='/tutor'" className="btn btn-lg btn-primary btn-block" > I want to teach  </button> */}

          {/* <button onclick="window.location.href='/tutor'">Continue</button> */}

          <form method="get" action="/tutor">
            <button type="submit" className="btn btn-lg btn-primary btn-block">I want to teach </button>
          </form>


        </div>


        <div className="col-md-6 mt-5 mx-auto">
          <form action="/student" className="inline">
            <button type="submit" className="btn btn-lg btn-primary btn-block" > I want to learn  </button>
          </form>
        </div>


      </div>

    )
  }

}

export default Register;