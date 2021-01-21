// IMPORT EXTERNAL DEPENDENCIES

// IMPORT INTERNAL UTILITIES

// IMPORT INTERNAL COMPONENTS
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'
// import Artwork from './components/elements/Artwork'
import ImageContainer from './components/elements/ImageContainer'
// IMPORT SCSS
import './App.scss'

// ENVIRONMENT VARIABLES
// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Header /> */}
        {/* <Artwork /> */}
        <ImageContainer />
        <p>
          Hello, this is the frontend of the project and is coming from App.js
        </p>
      </header>
    <Footer />
    </div>
  );
}

export default App;
