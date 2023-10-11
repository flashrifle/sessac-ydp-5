import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <h1>React Styling</h1>
            <h2>Css Module</h2>
            <CssModuleComponent />
            <hr />
            <h2>SASS</h2>
            <SassComponent />
        </div>
    );
}

export default App;
