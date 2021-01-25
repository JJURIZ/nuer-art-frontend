// IMPORT EXTERNAL DEPENDENCIES
import { Route } from "react-router-dom"
import { useState } from "react"
// IMPORT INTERNAL UTILITIES

// IMPORT INTERNAL COMPONENTS
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'
import Checkout from './components/pages/Checkout'
import ImageContainer from './components/elements/ImageContainer'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import EditProfile from './components/pages/EditProfile'
// IMPORT SCSS
import './App.scss'

// ENVIRONMENT VARIABLES
// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const [cart, setCart] = useState({items: []})
  const [currentUser, setCurrentUser] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const nowCurrentUser = (userData) => {
    setCurrentUser(userData)
    setIsAuthenticated(true);
  }

  // const handleLogout = () => {
  //   if (localStorage.getItem('jwtToken')){
  //     localStorage.removeItem('jwtToken');
  //     setCurrentUser(null);
  //     setIsAuthenticated(false)
  //   }
  // }
  return (
    <div className="App">

      <Header 
      cart={cart} 
      isAuthenticated={isAuthenticated} 
      // handleLogout={handleLogout}
      />

      <Route 
      exact
      path="/checkout"
      render={() => {
        return <Checkout setCart={setCart} cart={cart}/> 
      }}

      />
      <Route 
      exact
      path="/"
      render={() => {
        return <ImageContainer setCart={setCart} cart={cart}/>
      }}
      />

      <Route 
      exact
      path="/signup"
      render={() => {
        return <Signup /> 
      }}
      />

      <Route 
      exact
      path="/login"
      render={(props) => 
      <Login 
      nowCurrentUser={nowCurrentUser} 
      setIsAuthenticated={setIsAuthenticated} 
      user={currentUser}/>}
      />

      <Route 
      exact
      path="/profile"
      render={(props) => 
      <Profile
      nowCurrentUser={nowCurrentUser} 
      setIsAuthenticated={setIsAuthenticated} 
      user={currentUser}/>}
      />


      <Route 
      exact
      path="/profile/edit"
      render={() => {
        return <EditProfile
        nowCurrentUser={nowCurrentUser} 
        setIsAuthenticated={setIsAuthenticated} 
        user={currentUser}
        />
      }}
      />
      

    <Footer />
    </div>
  );
}

export default App;
