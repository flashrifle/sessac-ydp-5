// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다');
// }

// function pickDrink() {
//     setTimeout(function () {
//         console.log('고민 끝');
//         product = '제로콜라';
//         price = 2000;
//     }, 3000);
// }

// function pay(product, price) {2
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay();
/////////////////////////
// 1. 콜백함수를 이용해 비동기 처리

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다');
}

function pickDrink(callback) {
    // * callback 매개변수 : 콜백함수를 의미
    // 3초 기다린 후에 코드 실행
    setTimeout(function () {
        console.log('고민 끝');
        product = '제로콜라';
        price = 2000;
        callback(product, price); // 매개변수로 넘긴 콜백함수 실행
    }, 3000);
}

let product;
let price;

goMart();
pickDrink(function (product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`);
});
