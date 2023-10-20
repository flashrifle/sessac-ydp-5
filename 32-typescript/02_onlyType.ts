// only typescript type

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
// drink.push('얏호'); // tuple 한계
console.log(drink);

// readonly: 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('얏호'); // error

// Tuple ex
type productInfo = [number, string, number]; // type 별칭으로 type 선언
let product1: productInfo = [1, '로지텍 MX master3', 1300000];
let product2: productInfo = [2, '로지텍 K380', 52000];
// let product3: productInfo = [2, '로지텍 K380', 'Apple']; // type error

///////////////////////////////////////////////////////////
// Enum
enum Auth {
    admin = 0,
    user = 1,
    guest = 2,
}

enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.latte);

enum Cake {
    choco,
    vanilla,
    kiwi = '키위 케이크',
}
console.log(Cake.choco);
console.log(Cake.kiwi);

///////////////////////////////////////////////////////////
//
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sesac' };

// 암묵적으로
let val2;
val2 = false;
val2 = '바이';

// 실습
let olimpic_newgame: readonly [object, boolean] = [
    { name: '쇼트트랙', type: '혼성계주' },
    true,
];
// olimpic_newgame[0] = false;
console.log(olimpic_newgame);

// type & interface
// 1. interface

interface Student {
    name: string;
    isPassed: boolean;
}

const student: Student = {
    name: '이재민',
    isPassed: true,
};

const student2: object = {
    name: '이재민',
    isPassed: true,
};

console.log(student);

// interface 상속
// A+, A, B, C, D, F
// type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
enum Score {
    Aplus = 'A+',
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    F = 'F',
}

interface BaseballClub extends Student {
    position: string;
    height: number;
    readonly backNumber?: number; // ?: 있어도 되고 없어도 됨
    // [grade: number]: string;
    [grade: number]: Score;
}

const otani: BaseballClub = {
    name: 'ontani',
    isPassed: true,
    position: 'pitcher',
    height: 193,
    backNumber: 17,
    1: Score.A, // 학년: 점수
    // 2: 'NP', // error
};
console.log(otani);

otani.position = '투수';
otani['height'] = 200;
// otani.backNumber = 16; // error : backNumber readonly
console.log(otani);

// type vs. enum
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
    SM = 500,
    MD = 700,
    LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

// 교차 타입: 두개 이상의 타입을 합치는 것
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & Car = {
    name: '타요',
    start() {
        console.log('출브알');
    },
    color: 'blue',
    price: 5000,
};

console.log(toyCar);
// 간단한 경우엔 type을쓰고 breakpoint 같은 관계가 들어가면 enum을 사용

// 2. type
type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number;
    like?: string[];
    gender: string;
};

const daniel: Person = {
    name: '다니엘',
    age: 20,
    gender: 'F',
    like: ['minji', 'hani'],
};

enum Category {
    Action = '액션',
    RolePlaying = '롤플레잉',
}

type Platform = '모바일' | '웹';

interface Game {
    title: string;
    price: number;
    desc?: string;
    category: Category;
    platform: Platform;
}

const heroGame_A: Game = {
    title: '젤다의 전설',
    price: 50000,
    desc: '젤젤다다의의 전전설설',
    category: Category.Action,
    platform: '모바일',
};

const heroGame_B: Game = {
    title: '디지몬 어드벤처',
    price: 15000,
    category: Category.RolePlaying,
    platform: '웹',
};

console.log(heroGame_A);
console.log(heroGame_B);
