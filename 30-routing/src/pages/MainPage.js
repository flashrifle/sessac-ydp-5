import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
    const [searchParams, setSearchPrams] = useSearchParams();

    console.log(searchParams.get('mode'));

    return (
        <div className={['Main', searchParams.get('mode')].join(' ')}>
            <div>
                <h1>MainPage</h1>
                <button onClick={() => setSearchPrams({ mode: 'Dark' })}>
                    Dark Mode
                </button>
            </div>
        </div>
    );
}
