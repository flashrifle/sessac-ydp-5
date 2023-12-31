import { useSelector } from 'react-redux';
import './styles/Box.css';
import {
    Box1Container,
    Box2Container,
    Box3Container,
    Box4Container,
} from './containers/BoxesContainer';

function App() {
    const number = useSelector((state) => state.counter.number);

    return (
        <div className="App">
            <h1>React Redux Ex</h1>
            <h2>number: {number}</h2>
            <Box1Container />
        </div>
    );
}

export const Box1 = () => {
    return (
        <div className="Box">
            <h2> Box1 </h2>
            <Box2Container />
        </div>
    );
};

export const Box2 = () => {
    return (
        <div className="Box">
            <h2> Box2 </h2>
            <Box3Container />
        </div>
    );
};
export const Box3 = () => {
    return (
        <div className="Box">
            <h2> Box3 </h2>
            <Box4Container />
        </div>
    );
};
export const Box4 = ({ number, onPlus, onMinus }) => {
    // const number = useSelector((state) => state.counter.number);
    // const isVisible = useSelector((state) => state.isVisible);
    // const dispatch = useDispatch();

    return (
        <div className="Box">
            <h2> Box4 : {number} </h2>

            {/* <h2>isVisible값은 : "{isVisible ? '참' : '거짓'}" 이다</h2> */}
            <button onClick={() => onPlus()}>plus</button>
            <button onClick={() => onMinus()}>minus</button>
            {/* <button onClick={() => dispatch({ type: 'CHANGE' })}>change</button>  */}
        </div>
    );
};

export default App;
