console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain);

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink')); // 유사배열
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName
console.log(document.getElementsByName('id'));

// 5. querySelector(css selector)
// : 처음 발견한 하나만 가지고 옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

// 6. querySelectorAll
// : 선택자에 해당되는 모든 요소
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="id"]'));

// 유사 배열 ( HTMLCollection, NodeList )
// [] 식으로 생긴 배열을 의미. 배열은 아니다
// index, length는 가짐
// 배열과 달리 사용 가능한 메서드가 제한

// NodeList -> forEach() 사용이 가능하다
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));
// HTML Collection -> forEach() 사용 불가
// 반복을 해야한다면 > Array 변경 ( Array.from() )
Array.from(document.getElementsByClassName('pink')).forEach((elem) =>
    console.log(elem)
);

// for of 반복문
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
    console.log(pink);
}
