import React from 'react';

function Input(props) {
    const setData = props.setData;
    const handleInput = (e) => {
        const content = e.target.value;
        // console.log('input : ', content);
        setData((data) => {
            //console.log('data :', data);
            // ... < 스프레드 연산자로 content를 제외한 나머지 값은 덮어씌우고
            // content만 바뀜
            return { ...data, content };
        });
    };
    return (
        <>
            내용 :{' '}
            <input
                type="text"
                onChange={handleInput}
                placeholder="내용을 입력하세요."
            />
        </>
    );
}

export default Input;
