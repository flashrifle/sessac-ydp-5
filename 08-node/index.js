console.log('node.js로 js 파일을 읽었습니다.');

function gugudan(n) {
    for (let i = 1; i < 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
    return `${n}단 끝`;
}

console.log(gugudan(7));
