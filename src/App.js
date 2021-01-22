// IMPORT EXTERNAL DEPENDENCIES
import { Route, Redirect } from "react-router-dom"
// IMPORT INTERNAL UTILITIES

// IMPORT INTERNAL COMPONENTS
import Footer from './components/elements/Footer'
import Checkout from './components/pages/Checkout'
import ImageContainer from './components/elements/ImageContainer'
// IMPORT SCSS
import './App.scss'

// ENVIRONMENT VARIABLES
// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">

      <Route 
      exact
      path="/checkout"
      render={() => {
        return <Checkout /> 
      }}

      />
      <Route 
      exact
      path="/"
      render={() => {
        return <ImageContainer />
      }}
      />

    <Footer />
    </div>
  );
}

export default App;
