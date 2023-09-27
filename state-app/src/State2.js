import { useState } from 'react';

const State2 = () => {
    const [number, setNumber] = useState(0);

    const Increase = () => {
        setNumber(number + 1);
    };
    const Decrease = () => {
        setNumber(number - 2);
    };

    return (
        <div>
            <h1>함수형</h1>
            <h1>{number}</h1>
            <button onClick={Increase}>++</button>
            <button onClick={Decrease}>--</button>
        </div>
    );
};

export default State2;
