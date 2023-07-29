const inputs = document.querySelectorAll('input');
const val1 = document.getElementById('value1');
const val2 = document.getElementById('value2');
const calc = document.getElementById('calc');
const result = document.getElementById('result');

const sub = document.getElementById('sub');
sub.addEventListener('click', function () {
    if (calc.value === '+') {
        result.value = Number(val1.value) + Number(val2.value);
    } else if (calc.value === '-') {
        result.value = Number(val1.value) - Number(val2.value);
    } else if (calc.value === '*') {
        result.value = Number(val1.value) * Number(val2.value);
    } else if (calc.value === '/') {
        result.value = Number(val1.value) / Number(val2.value);
    }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    for (let input of inputs) {
        input.value = '';
    }
});
