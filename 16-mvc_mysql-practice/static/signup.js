function register() {
    console.log('asdf@#');
    const form = document.forms['form_register'];

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    axios({
        method: 'POST',
        url: '/user/signup',
        data: {
            userid: form.userid.value,
            pw: form.pw.value,
            name: form.name.value,
        },
    })
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .then(() => {
            console.log('create >> ');

            alert('success');
            document.location.href = '/user/signin';
        });
}
