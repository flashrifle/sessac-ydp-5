import React, { useState } from 'react';

export default function Alphabet() {
    // const [alphabet, setAlphabet] = useState('b', 'a', 'n', 'a', 'n', 'a');

    const [alphabet, setAlphabet] = useState([
        {
            id: 1,
            alpha: 'a',
        },
        {
            id: 2,
            alpha: 'p',
        },
        {
            id: 3,
            alpha: 'p',
        },
        {
            id: 4,
            alpha: 'l',
        },
        {
            id: 5,
            alpha: 'e',
        },
    ]);
    const [inputAlpha, setInputAlpha] = useState('');

    const addAlpha = () => {
        if (inputAlpha.trim().length === 0) {
            return null;
        }
        const newAlpha = alphabet.concat({
            id: alphabet.length + 1,
            alpha: inputAlpha,
        });
        setAlphabet(newAlpha);
        setInputAlpha('');
    };

    const addEnter = (e) => {
        if (e.nativeEvent.isComposing) {
            return;
        }
        if (e.code === 'Enter') addAlpha(e.target.value);
    };

    const deleteAlpha = (targetId) => {
        // targetId : 삭제될 대상 ID
        console.log(targetId);

        const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
        setAlphabet(newAlpha);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => {
                    setInputAlpha(e.target.value);
                }}
                onKeyDown={addEnter}
            />
            <button onClick={addAlpha}>ADD</button>
            <ol>
                {/* {alphabet.map((value, idx) => {
                    <li key={idx}>{value}</li>;
                })} */}
                {alphabet.map((value) => {
                    return (
                        <li
                            key={value.id}
                            onDoubleClick={() => deleteAlpha(value.id)}
                        >
                            {value.alpha}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
