// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;

// JSON.parse(); json >> js obj ( 역직렬화 )

console.log(car);

// obj 는 js object 이므로 . , [] 연산자를 이용하여 키값에 접근 가능
const obj = JSON.parse(car);
console.log(obj.model);
console.log(obj.company);

// JSON.stringify(); js obj >> json ( 직렬화 )
const json = JSON.stringify(obj);
console.log(json, typeof json);

// json 변수는 json 이므로 . [] 연산자로 키 값에 접근이 불가함
