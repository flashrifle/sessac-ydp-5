const td = document.querySelectorAll('td');
let date;

td.forEach((td) => {
    td.setAttribute('class', 'dt');
});

$('.dt').on('click', function () {
    date = $(this);
    $('.date').val(date.text());
});

$('#btn').on('click', function () {
    let content = $('.content').val();
    date.append(`<p>${content}</p>`);
    $('.date').val('');
    $('.content').val('');
});
