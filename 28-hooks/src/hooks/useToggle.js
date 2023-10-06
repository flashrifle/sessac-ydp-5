import React, { useState } from 'react';

export default function useToggle(initValue = false) {
    // value : 토글의 상태
    // setValue : 토글의 상태를 변화시키는
    const [value, setValue] = useState(initValue);

    // 토글의 상태를 전환 ( 스위칭 )
    const toggleValue = () => {
        setValue(!value);
    };

    return [value, toggleValue];
}
