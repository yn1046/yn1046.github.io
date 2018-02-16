let kek = document.getElementById('msg');
let fizz = document.getElementById('fizz');

window.addEventListener('scroll', function(e) {
    let offset = window.pageYOffset;
    kek.innerHTML = `Offset: ${offset}`;
    if (offset === 0) fizz.style.backgroundColor = 'crimson';
    else fizz.style.backgroundColor = 'lightblue';
});