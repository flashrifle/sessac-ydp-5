import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import Sass_ex1 from './ex/Sass_ex1';
import Sass_ex2 from './ex/Sass_ex2';
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
            <hr />
            <h2>StyledComponent</h2>
            <StyledComponent />
            <h2>Ex1</h2>
            <Sass_ex1 />
            <h2>Ex2</h2>
            <Sass_ex2 />
        </div>
    );
}

export default App;
