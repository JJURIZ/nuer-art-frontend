import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [redirect, setRedirect] = useState(false)


    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleAddressLine1 = (e) => {
        setAddressLine1(e.target.value);
    }

    const handleAddressLine2 = (e) => {
        setAddressLine2(e.target.value);
    }

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handleState = (e) => {
        setState(e.target.value);
    }

    const handleZip = (e) => {
        setZip(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { 
                name, 
                email, 
                password, 
                addressLine1, 
                addressLine2, 
                city, 
                state, 
                zip
            }

            axios.post(`${REACT_APP_SERVER_URL}/controllers/users/signup`, newUser)
            .then(response => {
                setRedirect(true)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    if (redirect) return <Redirect to='/login' />

    return (
                <div className="Signup">
                    <h2 className="Signup-header">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressLine1">Address Line 1</label>
                            <input type="text" name="addressLine1" value={addressLine1} onChange={handleAddressLine1} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressLine2">Address Line 2</label>
                            <input type="text" name="addressLine2" value={addressLine2} onChange={handleAddressLine2} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" value={city} onChange={handleCity} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="text" name="state" value={state} onChange={handleState} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" name="zip" value={zip} onChange={handleZip} className="form-control" />
                        </div>
                        <button type="submit" className="Signup-button">Submit</button>
                    </form>
                </div>
    )
}

export default Signup;