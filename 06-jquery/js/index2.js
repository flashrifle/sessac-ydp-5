// val() - value
function getValue() {
    // js
    // const inputVal = document.querySelector('input').value;
    // alert(inputVal);

    // jquery
    const value = $('input').val();
    alert(value);
}

function setValue() {
    // js
    // document.querySelector('input').value = 'ㅎㅇㅎㅇ';

    // jquery
    $('input').val('ㅎㅇㅎㅇ');
}

// css()
function changeCssJS() {
    const span = document.querySelectorAll('span');
    span.forEach((item) => {
        item.style = 'font-size: 20px; color: red';
    });
}

function changeCssJquery() {
    // case1
    // $('span').css('font-size', '30px');
    // $('span').css('color', 'blue');

    // case2 css 속성 한번에 적용
    $('span').css({
        fontSize: '40px', // 모든 span에 대해 폰트 크기변경
        color: 'blue', // 모든 span에 대해 폰트 색상 변경
    });
}

function getCssJquery() {
    console.log(document.querySelector('span').style.color);
    // console.log($('span').css('color'));
}

// attr()
function changeAttrJS() {
    const a = document.querySelector('a');
    a.href = 'https://www.naver.com';
}

function changeAttrJquery() {
    $('a').attr('href', 'https://www.naver.com');
}

// text()
function changeTextJS() {
    // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
    const pText = document.querySelector('.p-text');
    pText.innerText = 'asdfasdf';
}
function changeTextJquery() {
    $('.p-text').text('jqueryyy');
}

// html()
function changeHtmlJS() {
    // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
    const pHtml = document.querySelector('.p-html');
    pHtml.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
    $('.p-html').html('<h3>jquery</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
    // 1. color 클래스 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
    // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
    const apnd = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '마지막으로 추가된 js';
    apnd.append(li);
}

function appendJquery() {
    // const li = document.createElement('li');
    // li.innerText = '마지막으로 추가된 js';
    // $('.colors').append(li);
    $('.colors').append('<li>마지막으로 추가된 js</li>');
}

// prepend()
function prependJS() {
    // 1. color 클래스 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
    // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
    const prpd = document.querySelector('.colors');
    addEventListener('click', () => {
        const li = document.createElement('li');
        li.innerText = '처음으로 추가된 js';
        prpd.prepend(li);
    });
}

function prependJquery() {
    // const li = document.createElement('li');
    // li.innerText = '처음으로 추가된 js';
    // $('.colors').prepend(li);
    $('.colors').prepend('<li>처음으로 추가된 js</li>');
}

// before()
function beforeJS() {
    // 1. green 클래스를 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
    // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
    const before = document.querySelector('.green');
    const li = document.createElement('li');
    li.innerHTML = '바로 이전 형제 요소';
    before.before(li);
}

function beforeJquery() {
    $('.green').before('<li>바로 이전 형제 요소</li>');
}

// after()
function afterJS() {
    // 1. green 클래스를 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
    // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
    const after = document.querySelector('.green');
    const li = document.createElement('li');
    li.innerHTML = '바로 다음 형제 요소';
    after.after(li);
}

function afterJquery() {
    $('.green').after('<li>바로 다음 형제 요소</li>');
}

function removeJS() {
    const rm = document.getElementById('li2');
    rm.remove();
}

function removeJquery() {
    $('#li2').remove();
}

function emptyJS() {
    const em = document.querySelector('ul.nums');
    em.innerHTML = '';
}

function emptyJquery() {
    $('ul.nums').empty();
}

// 요소 탐색하기
function findParent() {
    // child2 클래스 갖는 요소의 부모 요소
    console.log(document.querySelector('.child2').parentElement);
    console.log($('.child2').parent());
}

function findParents() {
    // JS 없습니다! 패스~~
    console.log($('.child2').parents());
}

function findNext() {
    // child2 클래스 갖는 요소의 다음 형제 요소
    console.log(document.querySelector('.child2').nextElementSibling);
    console.log($('.child2').next());
}

function findPrev() {
    // child2 클래스 갖는 요소의 이전 형제 요소
    console.log(document.querySelector('.child2').previousElementSibling);
    console.log($('.child2').prev());
}

function findChildren() {
    // parent 클래스 갖는 요소의 자식 요소
    console.log(document.querySelector('.parent').children);
    console.log($('.parent').children());
}

// 클래스 조작하기
function addClass() {
    // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
    // $('#hi').addClass('fs-50');
    const hi = document.getElementById('hi');
    hi.classList.add('fs-50');
}

function removeClass() {
    // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
    // $('#hi').removeClass('fs-50');
    const hi = document.getElementById('hi');
    hi.classList.remove('fs-50');
}

function hasClass() {
    // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
    // console.log($('#hi').hasClass('fs-50'));
    const hi = document.getElementById('hi');
    console.log(hi.classList.contains('fs-50'));
}

function toggleClass() {
    // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 토글 (있으면 삭제, 없으면 추가)
    // $('#hi').toggleClass('bg-pink');
    const hi = document.getElementById('hi');
    hi.classList.toggle('bg-pink');
}
