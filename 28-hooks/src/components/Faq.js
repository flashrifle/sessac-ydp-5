import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Faq() {
    const [isFaqOpen, setIsFaqOpen] = useToggle();
    return (
        <div>
            <h1>custom hook (useToggle)</h1>
            <div style={{ cursor: 'pointer' }} onClick={setIsFaqOpen}>
                q. 리액트에서 커스텀 훅 만들 수 있음
            </div>
            {isFaqOpen && <div>a. 가능합니다</div>}
        </div>
    );
}
