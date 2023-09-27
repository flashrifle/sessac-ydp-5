import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import SayFunction from './SayFunction';
import State1 from './State1';
import State2 from './State2';

function App() {
    return (
        <div className="App">
            <Counter />
            <hr />

            <SayFunction />
            <hr />

            <CounterFunction value={'Plus 1'} />
            <hr />
            <State1 />
            <hr />
            <State2 />
        </div>
    );
}

export default App;
