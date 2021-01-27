// IMPORT EXTERNAL DEPENDENCIES
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAlert } from 'react-alert'
import { Redirect } from 'react-router-dom'

// IMPORT INTERNAL COMPONENTS
import './Signup.scss'
const backendUrl = process.env.REACT_APP_SERVER_URL

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

    const alert = useAlert()

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
        if (password !== confirmPassword) {
            alert.show("Password and Confirm Password must match")
        }
        if (name.length < 1 || email.length < 1){
            alert.show("Name and Email are required")
        }

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
            axios.post(`${backendUrl}/users/signup`, newUser)
            .then(response => {
                setRedirect(true)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    if (redirect) return <Redirect to='/' />
   

    return (
         
                <div className="Signup">
                    <h2 className="Signup-header">Signup</h2>
                    <form onSubmit={handleSubmit} className="Signup-input">
                  
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                     
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                       
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                    
                            <label htmlFor="addressLine1">Address Line 1</label>
                            <input type="text" name="addressLine1" value={addressLine1} onChange={handleAddressLine1} className="form-control" />
                    
                
                            <label htmlFor="addressLine2">Address Line 2</label>
                            <input type="text" name="addressLine2" value={addressLine2} onChange={handleAddressLine2} className="form-control" />
                     
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" value={city} onChange={handleCity} className="form-control" />
                       
                            <label htmlFor="state">State</label>
                            <input type="text" name="state" value={state} onChange={handleState} className="form-control" />
                       
                        
                            <label htmlFor="zip">Zip</label>
                            <input type="text" name="zip" value={zip} onChange={handleZip} className="form-control" />
                    
                            <button type="submit" className="Form-button">Submit</button>
                    </form>
                </div>
    )
}

export default Signup;