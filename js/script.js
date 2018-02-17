let kek = document.getElementById('msg');
let nav = document.getElementById('nav');

window.addEventListener('scroll', function(e) {
    let offset = window.pageYOffset;
    kek.innerHTML = `Offset: ${offset}`;
    if (offset <80) {
        nav.style.backgroundColor = 'transparent';
        nav.style.color = '#373c3f';

    }
    else {
        nav.style.backgroundColor = '#373c3f';
        nav.style.color = 'white';
    }
});