// 문자열 관련 내장 메서드
let str1 = 'Strawberry Moon';
let str2 = '    Strawberry Moon    ';

// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// 문자열의 길이 (length는 메서드가 아닌 "속성")
console.log(str1.length);
console.log(str2.length);

// 대/소문자 변환
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length); // 'Strawberry Moon'.length 와 동일

// indexOf() 글자 위치 찾기
// 위치(index): 0부터 시작
console.log(str1.indexOf('w'));
console.log(str1.indexOf('r'));
console.log(str1.indexOf('x')); // 존재하지 않는 문자에 대해 검색하면 -1 반환

// slice() 문자열 자르기
console.log(str1.slice(11)); // 11 번 위치의 글자 ~ 끝
console.log(str1.slice(1, 5)); // start(1) ~ end-1(4)까지 자르기

// replace() 문자열 바꾸기
console.log(str1.replace('a', 'x'));
console.log(str1.replace('r', 'x'));
console.log(str1.replaceAll('r', '*'));

// split() 문자열 쪼개기 (배열로 변환)
let date = '23.03.10';
console.log(date.split('.'));
console.log(date.split('3'));

// repeat()
console.log('hi'.repeat(5));

////////////////////////////////////////
// 배열 내장 메서드
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quokka', 'rabbit', 'puppy', 'hamster'];

// 배열에 값 추가
// arr1[5] = 6; // arr1 배열의 5번 인덱스에 6이라는 값 추가
// arr1[8] = 100; // 인덱스 건너뛰면 빈 값(empty)이 들어가게 됨

// push(): 끝에 요소 추가
arr1.push(6);
arr1.push(10);
console.log(arr1);

// pop(): 맨 끝 요소 제거
arr1.pop();
console.log(arr1);

// unshift(): 맨 앞에 요소 추가
arr1.unshift('cat');
console.log(arr1);

// shift(): 맨 앞에 요소 제거
arr1.shift();
console.log(arr1);

// includes(요소): 요소 있는지 없는지 검사 (true, false)
console.log(arr2.includes('quokka'));
console.log(arr2.includes('apple'));

// reverse()
console.log(arr1.reverse());
console.log(arr1); // 원본 배열이 변경된 것

// join(): join 안의 문자열 기준으로 병합
console.log(arr2);
console.log(arr2.join(''));
console.log(arr2.join('-'));

// 메서드 체이닝(method chaining)
console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join);

///////////////////////////////////////////////////
// 배열에서 반복문 사용하기!
// - 기본 for 문
// - for of 문
// - forEach() 메서드

const arr3 = [1, 2, 5, 6, 7];
const alphabets = ['a', 'b', 'c', 'd'];

for (let a = 0; a < arr3.length; a++) {
    console.log(arr3[a]);
}

for (let alpha of alphabets) {
    console.log(alpha);
}

alphabets.forEach(function (alpha) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    console.log(alpha);
});

alphabets.forEach(function (alpha, idx) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    console.log(alpha, idx);
});

alphabets.forEach(function (alpha, idx, arr) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    // arr: forEach를 호출한 배열
    console.log(alpha, idx, arr);
});

let numbers = [1, 2, 3, 4, 5];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum1 = sum1 + numbers[i];
}

console.log(sum1);

for (let num of numbers) {
    sum2 = sum2 + num;
}

console.log(sum2);

numbers.forEach((num) => {
    sum3 = sum3 + num;
});

console.log(sum3);

// map, filter, find 메서드

const arr4 = [1, 2, 3, 4, 5];
let map_result = arr4.map(function (a) {
    return a + 2;
});
console.log(map_result);

let filter_result = arr4.filter(function (a) {
    return a < 3;
});

// 퀴즈
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow'];

// 1. 글자 수가 3개 초과인 단어만 필터링
const result1 = words.filter((word) => word.length > 3);
console.log(result1);

// 2. 글자에 'a' 문자가 포함되어 있는 단어만 필터링

// for (let i = 0; i < words.length; i++) {
//   if (words[i].includes('a') === true) {
//     console.log(words[i]);
//   }
// }

// 1.
// const result2 = words.filter((word) => word.includes('a'));
// 2.
// const result2 = words.filter(function (word) {
//   return word.includes('a');
// });
// console.log(result2);

///////////////////////////
// for in 반복문
const me = { name: 'jaemin', gender: 'm', hobby: 'health' };
for (let key in me) {
    console.log(key, me[key]);
    // key : key
    // value : me[key]
}

////
// reduce()
// : 배열의 각 요소에 대해서 주어진 리듀서(reducer)합수를 실행하고, 하나의 결과값 반환

// reduce((acc, cur) => {...}, initValue)
// - acc : 누적되는 값
// - cur : 현재 요소

// const numbers2 = [1, 2, 3, 4, 5];
// const result = numbers2.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(result); //15

// const numbers2 = [1, 2, 3, 4, 5];
// const initialValue = 100;
// const result = numbers2.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);
// console.log(result); //115

//////////////////////
// concat()
// : 여러 배열 합치는 방법
//1.
const arr_1 = [1, 2, 3];
const arr_2 = [3, 4, 5];
console.log(arr_1.concat(arr_2));

//2.
console.log([...arr_1, ...arr_2]);
