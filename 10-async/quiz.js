// 문제 1
function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
    });
}
function back() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('back');
            resolve('back');
        }, 1000);
    });
}
function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('callback hell');
        }, 1000);
    });
}
// call('kim')
//     .then(function (name) {
//         console.log(name + '반가워');
//         return back(name);
//     })
//     .then(function (txt) {
//         console.log(txt + '을 실행했구나');
//         return hell(txt);
//     })
//     .then(function (message) {
//         console.log('여기는' + message);
//     });

// 문제2
function login(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
    });
}
function getVideo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('back');
            resolve('back을 실행했구나');
        }, 1000);
    });
}
function getDetail() {
    return new Promise(function (resolve, reject) {
        resolve('여기는 callback hell');
    }, 1000);
}
//async - await로 출력
async function exec() {
    let user = await login('kim');
    console.log(user + '반가워');
    let videos = await getVideo(user);
    console.log(videos);
    let title = await getDetail(videos[0]);
    console.log(title);
}
exec();

// 문제3
