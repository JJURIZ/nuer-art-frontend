// IMPORT EXTERNAL DEPENDENCIES
import { Route, Redirect } from "react-router-dom"
import { useState } from "react"
// IMPORT INTERNAL UTILITIES

// IMPORT INTERNAL COMPONENTS
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'
import Checkout from './components/pages/Checkout'
import ImageContainer from './components/elements/ImageContainer'
// IMPORT SCSS
import './App.scss'

// ENVIRONMENT VARIABLES
// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const [cart, setCart] = useState({items: []})

  return (
    <div className="App">

      <Header cart={cart}/>

      <Route 
      exact
      path="/checkout"
      render={() => {
        return <Checkout cart={cart}/> 
      }}

      />
      <Route 
      exact
      path="/"
      render={() => {
        return <ImageContainer setCart={setCart} cart={cart}/>
      }}
      />

    <Footer />
    </div>
  );
}

export default App;
