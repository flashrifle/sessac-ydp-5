import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
    // 상태
    const [data, setData] = useState({
        fruit: 'apple',
        background: 'black',
        color: 'white',
        content: 'text',
    });

    // const [str, setStr] = useState('글자글자');
    // const [img, setImg] = useState('apple.png');
    // const [back, setBack] = useState('black');
    // const [color, setColor] = useState('white');

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                }}
            >
                {/* <Select setImg={setImg} /> */}
                <Select setData={setData} />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                }}
            >
                {/* <Input setStr={setStr} /> */}
                <Input setData={setData} />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                }}
            >
                <Result data={data} />
                {/* <Result str={str} img={img} /> */}
            </div>
        </>
    );
}

export default App;
