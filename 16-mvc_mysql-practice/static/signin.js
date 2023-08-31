// TODO: [Login] 버튼 클릭시 서버에 로그인 요청하기
// POST /user/signin
function login() {
    console.log('asdfasdf!');

    if (!form_login.checkValidity()) {
        form_login.reportValidity();
        return;
    }

    axios({
        method: 'post',
        url: '/user/signin',
        data: {
            userid: form_login.userid.value,
            pw: form_login.pw.value,
        },
    })
        .then((res) => {
            return res.data;
        })
        .then((data) => {
            console.log('post profile >>', data);
            if (data) {
                alert('login success');
                const form_info = document.forms['form_info'];
                form_info.userid.value = form_login.userid.value;
                form_info.submit();
            } else {
                alert('login fail');
                form_login.reset();
            }
        });
}
