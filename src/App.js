// IMPORT EXTERNAL DEPENDENCIES
import { Route, Redirect } from "react-router-dom"
import { useState, useEffect } from "react"
import jwt_decode from 'jwt-decode';
import setAuthToken from './components/utilities/setAuthToken';
// IMPORT INTERNAL UTILITIES

// IMPORT INTERNAL COMPONENTS
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'
import Checkout from './components/pages/Checkout'
import ImageContainer from './components/elements/ImageContainer'
import Signup from './components/pages/Signup'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import EditProfile from './components/pages/EditProfile'
// IMPORT SCSS
import './App.scss'

// ENVIRONMENT VARIABLES
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  const [cart, setCart] = useState({items: []})
  const [currentUser, setCurrentUser] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const nowCurrentUser = (userData) => {
    setCurrentUser(userData)
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')){
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false)
    }
  }

  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  return (
    <div className="App">

      <Header 
      cart={cart} 
      isAuthenticated={isAuthenticated} 
      handleLogout={handleLogout}
      />

      <PrivateRoute 
      path="/checkout" 
      component={ Checkout } 
      setCart={setCart}
      cart={cart}
      />

      <PrivateRoute 
      path="/gallery" 
      setCart={setCart}
      cart={cart}
      component={ ImageContainer } 
      user={currentUser}
      />

      <Route 
      exact path="/signup"
      render={() => {
        return <Signup /> 
      }}
      />

      <Route 
      exact path="/"
      render={(props) => 
      <Home 
      nowCurrentUser={nowCurrentUser} 
      setIsAuthenticated={setIsAuthenticated} 
      user={currentUser}/>}
      />

      <PrivateRoute 
      exact path="/profile" 
      component={ Profile } 
      user={currentUser} 
      handleLogout={handleLogout} 
      setIsAuthenticated={setIsAuthenticated} 
      nowCurrentUser={nowCurrentUser} 
      />

      <PrivateRoute 
      exact path="/profile/edit" 
      component={ EditProfile } 
      user={currentUser} 
      handleLogout={handleLogout} 
      setIsAuthenticated={setIsAuthenticated} 
      nowCurrentUser={nowCurrentUser} 
      />

    <Footer />
    </div>
  );
}

export default App;
