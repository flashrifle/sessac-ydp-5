// 구조분해 할당
// 1. 배열 구조 분해 할당
// 배열 구조 분해 할당시 "순서"가 중요하다

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [에이, 비, 씨, alpha] = arr2;
console.log(에이, 비, 씨, alpha);

let num1 = 1;
let num2 = 2;
console.log('swap 전 >', num1, num2);
[num2, num1] = [num1, num2];
console.log('swap 후 >', num1, num2);

const lists = ['apple', 'grape'];
[f1, f2, f3] = lists;
console.log(f1, f2, f3); // 'apple', 'grape', 'undefined'

const lists2 = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists2;
console.log(f1, f2, f3); // 'apple', 'grape', 'orange'

// 2. 객체 분해 구조 할당
// - 변수를 선언하는 순서는 중요하지 않다
// - 키 값과 변수명이 일치해야 함
const obj = {
    title: '오리엔탈',
    content: '재밌어요',
    num: 5,
};
// 객체 구조 분해를 사용하지 않았을 때
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

// 객체 구조 분해를 사용하고 싶다면
// key가 존재하지 않을 때를 대비하여 = 연산자를 이용하면 default값을 할당
const { num, title, content, star = 1000 } = obj;
console.log(title, content, num, star); // '오리엔탈', '재밌어요', 5, 1000

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1); // '오리엔탈', '재밌어요', 5

const { num: t2, num: n2, content: c2 } = obj;
console.log(t2, n2, c2); // '오리엔탈', '재밌어요', 5

function getInfo(lecture) {
    // TODO: 구조 분해 할당을 사용하여 값 추출
    const { name, part, leader } = lecture;
    // TODO: 출력 문장 생성
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

    return output;
}

const lectureInfo = {
    name: 'SESAC x CODINGOn',
    part: 'WEB',
    leader: 'Sean',
};

const result = getInfo(lectureInfo);

console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();

// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼침)
// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread);

// spread in string
const c = [...'HEELO'];
const d = 'HEELO'.split('');
console.log(c);
console.log(d);

// spread in object
const chip = {
    base: 'chip',
    company: 'lotte',
};

const potatoChip = {
    ...chip,
    flavor: 'potato',
};

const sweetPotatoChip = {
    ...chip,
    // base: 'chip',
    // company: 'lotte',
    flavor: 'sweet potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

const word1 = 'abc';
const word2 = 'xyz';

const word3 = [...word1, ...word2];
console.log(word3);

const values = [10, 20, 30];
function get(a, ...rest) {
    console.log('a >>', a);
    console.log('rest >>', rest);
}

get(...values);

// 객체에서 rest
const iceCream = {
    comapny: 'lotte',
    flavor: 'choco',
    price: 1000,
};

const { flavor, ...rest } = iceCream;
console.log(flavor);
console.log(rest);

// 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1);
console.log(two1);
console.log(rest2);
