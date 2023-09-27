import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler_ex from './ex/Handler_ex';
import ColorChange from './ex/ColorChange';
import Clear from './ex/Clear';

function App() {
    return (
        <div className="App">
            <SyntheticEvent />
            <hr></hr>
            <ClassBind />
            <hr />
            <Counter />
            <hr></hr>
            <Handler_ex />
            <hr />
            <ColorChange />
            <hr />
            <Clear></Clear>
        </div>
    );
}

export default App;
