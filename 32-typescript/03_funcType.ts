function print(a: number, b: number, c: number): void {
    console.log(a);
    console.log(b);
    console.log(c);
}

print(2, 4, 6);

function sayHello(): void {
    console.log('hello');
}
function sayHello2(): string {
    return 'hello';
}

function concatString(x: string, y: string): string {
    return x + y;
}
console.log(concatString('하이', '하이'));

function circleArea(r: number): number {
    return r * r * Math.PI;
}
console.log(circleArea(5));

// 화살표 함수
const squareArea = (x: number, y: number): number => {
    return x * y;
};

console.log(squareArea(3, 5));

const triangleArea = (w: string, h: string): number =>
    (parseInt(w, 10) * parseInt(h, 10)) / 2;

console.log(triangleArea('3', '4'));

// 인터페이스 정이시 함수 타입 표현
interface Greet {
    name: string;
    hi(): string;
    bye(a: number): string;
}

const sesac: Greet = {
    name: 'sesac',
    hi() {
        return '여기는' + this.name + '캠퍼스';
    },
    bye(a: number) {
        return `작별 인사를 ${a}번 했습니다.`;
    },
};

console.log(sesac.hi());
console.log(sesac.bye(5));

//never
// : 함수의 긑에 절대 도달하지 않는 경우
// function goginOn(): never {
//     while(true) {
//         console.log('go!')
//     }
// }

// overriding, overloading
// 1. 오버라이딩
// - 하위 클래스가 상위클래스의 메소드를 상속받을 때 같은 이름의 함수를 재정의
// 2. 오버로딩
// - 함수의 이름은 같지만, 매개변수 or 반환타입이 다른 여러 함수들을 가질 수 있음

// typescript 오버로딩
// - 선언부 : 매개변수의 타입과 반환 타입만 지정
// - 구현부 : 실제 함수의 구현(function body)
// => "함수 이름이 동일"

function sum(a: string, b: string): string; // 선언부
function sum(a: number, b: number): number; // 선언부
function sum(a: any, b: any): any {
    return a + b;
} // 구현부
console.log(sum('가', '나'));
console.log(sum(10, 20));

function sum1(a: number, b: number): void {
    console.log(a + b);
}
sum1(5, 11);

function sum2(...number: number[]): number {
    let sum = 0;
    for (let num of number) {
        sum += num;
    }
    return sum;
}

console.log(sum2(1, 2, 3, 4, 10));
