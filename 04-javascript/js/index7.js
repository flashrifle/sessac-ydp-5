// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('--------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('--------');

// 1부터 n까지의 합
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(i, sum);
}

//배열 , for문
const fruits = ['사과', '배', '포도', '망고'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// while문
let idx = 0;
while (idx < 10) {
  console.log('gd', idx);
  idx = idx + 1;
}

let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum3 = sum3 + i;
  console.log(i, sum3);
}

// let idx2 = 0;
// while (true) {
//   console.log('hi', idx2);
//   idx2 = idx + 1;

//   if (idx2 === 10) {
//     break;
//   }
// }

// //실습1
// let sum2 = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 || i % 2 === 0) {
//     sum += i;
//     console.log(sum, i);
//   }
// }

// //실습3
// for (x = 2; x < 10; x++) {
//   console.log(x + '단');
//   for (y = 1; y < 10; y++) {
//     console.log(x + 'x' + y + '=' + x * y);
//   }
// }
