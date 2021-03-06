// IMPORT EXTERNAL DEPENDENCIES
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// IMPORT INTERNAL DEPENDENCIES
import './EditProfile.scss'
const backendUrl = process.env.REACT_APP_SERVER_URL

const EditProfile = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
            axios.put(`${backendUrl}/users/${props.user.id}`, {name, email, addressLine1, addressLine2, city, state, zip} )
            .then(response => {
                setRedirect(true)
            })
            .catch(error => {
                console.log(error)
            })
        }
    

    useEffect(() =>{
        axios.get(`${backendUrl}/users/${props.user.id}`)
        .then((response) => {
            let user = response.data.user
            setName(user.name)
            setEmail(user.email)
            setAddressLine1(user.addressLine1)
            setAddressLine2(user.addressLine2)
            setCity(user.city)
            setState(user.state)
            setZip(user.zip)
        })
    },[])

    if (redirect) return <Redirect to='/profile' />
   
    return (
                <div className="Edit-profile">
                    <form onSubmit={handleSubmit} className="Edit-profile-form">
                    <h2 className="Edit-profile-header">Edit Profile</h2>
                    <div className="Edit-profile-column">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                     
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
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
                        </div>
                        <div className="Signup-row-submit">    
                            <button type="submit" className="Form-button">Submit</button>
                        </div>
                    </form>
                </div>
    )
}

export default EditProfile;
