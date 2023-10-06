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

console.clear();
/////////////////////////
// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/

class House {
    // 생성자 함수
    // : 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }

    // 메서드 1: 집의 나의를 출력
    getAge() {
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었어요! `);
    }

    // 메서드 2: 집의 창문 개수 출력
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }
}

const house1 = new House(1990, '롯데캐슬', 1);
console.log('house1 >>', house1);
console.log(typeof house1);
console.log(house1.year);
house1.getAge();
house1.getWindow();

const house2 = new House(2007, '자이', 10);
console.log(house2);
// 과제1
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getArea() {
        return this.x * this.y;
    }
}
let rec1 = new Shape(3, 4);
console.log(`rec1의 넓이는 : ${rec1.getArea()}`);

// 클래스 상속
// 부모 클래스: House
// 자식 클래스 Apartment
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        // 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo() {
        return `${this.year}에 지어진 ${this.name} 아파트의 
          총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}`;
    }
}

// 과제2
class Rectangle extends Shape {
    constructor(x, y) {
        super(x, y);
    }

    getArea() {
        return this.x * this.y;
    }

    getLength() {
        return Math.sqrt(this.getArea());
    }
}

let rec2 = new Rectangle(4, 5);
console.log(
    `rec2의 넓이 : ${rec2.getArea()} / rec2의 대각선 길이 ${rec2.getLength()}`
);

class Triangle extends Shape {
    constructor(x, y) {
        super(x, y);
    }
    getArea() {
        return (this.x * this.y) / 2;
    }
}

let tri1 = new Triangle(10, 5);
console.log(`삼각형 tr1의 넓이는 : ${tri1.getArea()}`);

class Circle extends Shape {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }
}

let cir1 = new Circle(3, 3, 3);
console.log(`원의 넓이는 : ${cir1.getArea()}`);

////////////////////////////////////////////////////////
// 단축 평가
// &&, ||

// A && B : 두 개의 피연산자 모두 t면 t 반환
// A || B : 두 개의 피연산자 중에서 하나만 t여도 t반환

console.log(true && true); // true
console.log(false && true); // false

console.log(true || false); // true
console.log(false || true); // true

const xx = 5;
const yy = 7;

// 삼항연산자 예시
const result1 = xx > yy ? 'xx가 큼' : 'yy가 큼';
console.log(result1); // yy가 큼

// 단축평가 (&&, 논리곱)
const result2 = xx > yy && 'xx가 큼';
console.log(result2); // false
const result3 = xx < yy && 'yy가 큼';
console.log(result3); // yy가 큼

// 단축평가 (||, 논리합)
const result4 = xx || 100;
console.log(result4); // 5

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름없음');
console.log(nameEx2 || '이름없음');
