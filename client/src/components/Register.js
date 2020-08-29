import React, { Component } from 'react';


class Register extends Component {

  render() {
    return (

      <div className="container">

        <div className="col-md-6 mt-5 mx-auto">
          <form action="/tutor" class="inline">
            <button type="submit" className="btn btn-lg btn-primary btn-block" > I want to teach  </button>
          </form>
        </div>


        <div className="col-md-6 mt-5 mx-auto">
          <form action="/student" class="inline">
            <button type="submit" className="btn btn-lg btn-primary btn-block" > I want to learn  </button>
          </form>
        </div>


      </div>

    )
  }

}

export default Register;