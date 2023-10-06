import React, { useEffect, useState } from 'react';

export default function LifeCycleFunctionChild({ number }) {
    const [input, setInput] = useState('');
    // Mount 시점에 실행
    // useEffect(() => {
    //     console.log('컴포넌트 마운트');

    //     //Unmount 시점에 실행
    //     return () => {
    //         console.log('컴포넌트 언마운트');
    //     };
    // }, []);

    // Mount or Update 시점에 실행
    // useEffect(() => {
    //     console.log('컴포넌트 마운트');
    // });

    // input 상태가 업데이트 될 때 실행
    // useEffect(() => {
    //     console.log('인풋 상태가 변함에 따라 update');
    // }, [input]);

    return (
        <div style={{ backgroundColor: 'gold' }}>
            자식 컴포넌트
            <div>현재 Number 값은 {number} 입니다.</div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div>현재 input 값은 {input} 입니다.</div>
        </div>
    );
}
