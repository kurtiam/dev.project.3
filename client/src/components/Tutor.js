import React, { Component } from 'react';
import { registerT } from './UserFunctions';


class Tutor extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            grade: '',
            subject: '',
            errors: {},
            valid_email: null,

        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    // setting our state on change
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.name === "email") {
            this.checkSubmit(e.target.value)
        }
    }

    // button deactivated until email validation with RegEx
    checkSubmit(email) {
        let valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid_email) {
            this.setState({ valid_email: valid_email })
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            grade: this.state.grade,
            subject: this.state.subject

        }
        // register user on submit and send to the login page
        registerT(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (

            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <h1> Enter Tutor Info </h1>
                            <form noValidate onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <label htmlFor="name">First name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="first_name"
                                        placeholder="Enter your first name"
                                        value={this.state.first_name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Last name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="last_name"
                                        placeholder="Enter your last name"
                                        value={this.state.last_name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Grade:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="grade"
                                        placeholder="middel school"
                                        value={this.state.grade}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Tutor Subject:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        placeholder="Math"
                                        value={this.state.subject}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-lg btn-primary btn-block"
                                    disabled={!this.state.valid_email || !this.state.password || !this.state.subject || !this.state.first_name} >
                                    Register
                               </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
export default Tutor;