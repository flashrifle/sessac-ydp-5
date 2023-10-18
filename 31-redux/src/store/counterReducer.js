const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// plus(), minus()
// 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록
export const plus = () => ({ type: PLUS }); // return { type: 'counter/PLUS' }
export const minus = () => ({ type: MINUS });

// state 초기값 정의
const initState = {
    number: 50,
};

//reducer 정의 : 상태 변화를 일으키는 함수
const counterReducer = (state = initState, action) => {
    // 액션 객체 : { type: 'XXX', bank}

    switch (action.type) {
        case PLUS:
            return { number: state.number + 1 };
        case MINUS:
            return { number: state.number - 1 };
        default:
            return state;
    }
};

export default counterReducer;
