import { useState } from 'react';

function Clear() {
    const [text, setText] = useState('hi');

    const clear = () => {
        setText('');
    };
    return (
        <div>
            <button onClick={clear}>사라져라</button>
            <h1>{text}</h1>
        </div>
    );
}

export default Clear;
