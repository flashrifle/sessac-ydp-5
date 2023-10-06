import React, { useState, useCallback } from 'react';

// useCallback
// 매번 함수를 호출하지않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용
export default function UseCallbackEx() {
    const [text, setText] = useState('');

    // [before]
    // text 상태가 업데이트 > 컴포넌트 리랜더링 > 코드를 다시 읽음
    // = onChangeText 재생성 (js func는 object type. 주소값 변경됨)
    // >> 불필요한 작업
    // const onChangeText = (e) => {
    //     setText(e.target.value);
    // };

    // [after]
    // useCallback이라는 훅으로 함수를 기억해서
    // 컴포넌트가 리랜더링 되어도 의존성 배열에 있는 값이 바뀌지 않는한 기존 함수를 계속 사용
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    return (
        <div>
            <h1>UseCallback</h1>
            <input type="text" onChange={onChangeText} />
            <div>작성한 값 : {text || '없음'}</div>
        </div>
    );
}
