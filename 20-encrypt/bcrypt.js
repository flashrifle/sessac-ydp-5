// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안이 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수
// (보안 강화하기 위해 해쉬화 하는 것으로 원본 데이터를 복원하는 기능은 없음)

const bcrypt = require('bcrypt');
const originalPassword = '1234';

const saltRounds = 10; // 솔트 라운드 수를 정의

// 1. 비밀번호 해싱 함수
function hashPassword(password) {
    return bcrypt.hashSync(password, saltRounds);
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

// 사용 예제
// 원본 비번을 해싱한 결과
const hashedPassword = hashPassword(originalPassword);
console.log(`Hashed password : ${hashedPassword}`);

const isMatch = comparePassword(originalPassword, hashedPassword); // true or false
console.log(`original password === hashedPassword : ${isMatch}`);
