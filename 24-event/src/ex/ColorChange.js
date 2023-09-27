import { useState } from 'react';

function ColorChange() {
    const [style, setStyle] = useState({
        text: '검정색',
        color: 'black',
    });

    const colorChg = (color, text) => {
        setStyle({
            text,
            color,
        });
    };

    return (
        <div>
            <h1 style={{ color: style.color }}>{style.text} 글씨</h1>
            <button onClick={() => colorChg('red', '빨간색')}>빨간색</button>
            <button onClick={() => colorChg('blue', '파란색')}>파란색</button>
        </div>
    );
}

export default ColorChange;
