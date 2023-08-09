const add = (a, b) => {
    return a + '+' + b + '=' + a + b;
};
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
    if (b !== 0) {
        return a / b;
    } else {
        return '0으로 나눌 수 없습니다.';
    }
};

const E = 2.718;
const PI = 3.141592;

// module.exports = {
//     add: add,
//     E: E,
//     PI: PI,
// };

//case1. 객체로 감싸서 내보내기
module.exports = {
    //obj에서 key와 value가 동일할 때 생략 가능
    add,
    sub,
    mul,
    div,
    E,
    PI,
};

//case2. 하나씩 내보내기
module.exports.add = add;
module.exports.PI = PI;
module.exports.E = E;

//case2. 간단히
exports.add = add;
exports.PI = PI;
exports.E = E;
