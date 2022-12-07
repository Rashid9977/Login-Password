let button = document.getElementById('btn')

button.addEventListener('click', function (e) {
    let nm = document.getElementById('name').value;
    console.log(nm);

})
button.addEventListener('click', function (e) {
    let sm = document.getElementById('surname').value;
    e.preventDefault();
    console.log(sm);
})
button.addEventListener('click', function (e) {
    let mail = document.getElementById('email').value;
    e.preventDefault();
    console.log(mail);
})
button.addEventListener('click', function (e) {
    let password = document.getElementById('pass').value;
    console.log(password)
    e.preventDefault();

})












