import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
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
        useEffect(() => {
            getUser()
          }, []);

    
        return(
            <div>
                <h1>Profile</h1>
                <p>{name}</p>
                <p>{email}</p>
                <p>{addressLine1}</p>
                <p>{addressLine2}</p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{zip}</p>
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
                className=""
                >
                Edit Profile
                </button>
                </Link>
            </div>
        )
    }

export default Profile