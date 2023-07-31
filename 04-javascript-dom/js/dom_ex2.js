const create = document.getElementById('creater');
const content = document.getElementById('content');
const write = document.querySelector('button');

let now = new Date();
let index = 0;

const th = document.querySelector('table');

write.addEventListener('click', () => {
    // console.log(create.value, content.value, now.toLocaleString());
    let cnt = (index += 1);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td style="padding-left: 10px;">${cnt}</td>
    <td style="text-align: center;">${create.value}</td>
    <td style="padding-left: 10px;">${content.value}</td>
    <td style="text-align: center;">${now.toLocaleString()}</td>`;
    th.append(tr);
});
