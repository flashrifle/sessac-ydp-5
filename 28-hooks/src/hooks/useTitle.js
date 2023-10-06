import React, { useEffect } from 'react';

// custom hook
export default function useTitle(title) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;

        return () => (document.title = prevTitle);
    }, [title]);
}
