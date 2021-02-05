// IMPORT EXTERNAL DEPENDENCIES
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// IMPORT INTERNAL COMPONENTS
import './Profile.scss'

const backendUrl = process.env.REACT_APP_SERVER_URL

function Profile(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')

    const getUser = () => {
        let userData

        axios.get(`${backendUrl}/users/${props.user.id}`)
        .then(response => {
            userData = response.data.user
            setName(userData.name)
            setEmail(userData.email)
            setAddressLine1(userData.addressLine1)
            setAddressLine2(userData.addressLine2)
            setCity(userData.city)
            setState(userData.state)
            setZip(userData.zip)
        })
        .catch(error => {
            console.log(error)
        })
        }

    const deleteUser = async () => {
        try {
        props.handleLogout()
        await axios.delete(`${backendUrl}/users/${props.user.id}`)
        } 
        catch(error) {
            console.log(error)
        }
    }
        useEffect(() => {
            getUser()
          }, []);

        return(
            <div className="Profile">
                <h1 className="Signup-header">Profile</h1>
                <p className="Profile-info">Name: {name}</p>
                <p className="Profile-info">Email: {email}</p>
                <p className="Profile-info">Address Line 1: {addressLine1}</p>
                <p className="Profile-info">Address Line 2{addressLine2}</p>
                <p className="Profile-info">City: {city}</p>
                <p className="Profile-info">State: {state}</p>
                <p className="Profile-info">Zip: {zip}</p>
                <Link to={{pathname: "/profile/edit", state: {user: {
                    name,
                    email,
                    addressLine1,
                    addressLine2,
                    city,
                    state,
                    zip,
                    id: props.user.id
                }}}}>
                <button 
                className="Form-button"
                >
                Edit Profile
                </button>
                </Link>
                <Link to="/">
                <button 
                className="Form-button"
                onClick={deleteUser}
                >
                Delete Account
                </button>
                </Link>
           
            </div>
        )
    }

export default Profile