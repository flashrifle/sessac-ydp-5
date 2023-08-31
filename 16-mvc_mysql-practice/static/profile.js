// TODO: [Login] 버튼 클릭시 서버에 회원 정보 수정 요청하기
// POST /user/profile/edit
function profileEdit() {
    const form = document.forms['form_profile'];

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    axios({
        method: 'POST',
        url: '/user/profile/edit',
        data: {
            id: form.id.value,
            userid: form.userid.value,
            pw: form.pw.value,
            name: form.name.value,
        },
    })
        .then((res) => {
            return res.data;
        })
        .then((data) => {
            console.log('update >> ', data);
            alert('수정 성공');
        });
}

// TODO: [Login] 버튼 클릭시 서버에 회원 정보 삭제 요청하기
// POST /user/profile/delete
function profileDelete() {
    const form = document.forms['form_profile'];

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    axios({
        method: 'POST',
        url: '/user/profile/delete',
        data: {
            id: form.id.value,
        },
    })
        .then((res) => {
            console.log('1delete >> ', res);
            return res.data;
        })
        .then((data) => {
            console.log('2delete >> ', data);
            alert('회원 탈퇴 성공');
            document.location.href = '/';
        });
}
