// IMPORT EXTERNAL DEPENDENCIES

// IMPORT INTERNAL UTILITIES

// IMPORT INTERNAL COMPONENTS
import Artwork from './components/elements/Artwork'
// IMPORT SCSS
import './App.scss'

// ENVIRONMENT VARIABLES
// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Artwork />
        <p>
          Hello, this is the frontend of the project.
        </p>
      </header>
    </div>
  );
}

export default App;
