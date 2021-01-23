import React, { Component } from 'react'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            editUser: false
        }
        this.editUser = this.editUser.bind(this)
    }
    render() {
        return(
            <div>
                <h1>Profile</h1>
                <p>Name: {this.props.name}</p>
                <p>Email: {this.props.email}</p>
                <p>Address Line 1: {this.props.addressLine1}</p>
                <p>Address Line 2: {this.props.addressLine2}</p>
                <p>City: {this.props.city}</p>
                <p>State: {this.props.state}</p>
                <p>Zip: {this.props.zip}</p>
            </div>
        )
    }
}

export default Profile