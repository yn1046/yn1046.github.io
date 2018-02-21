/*let kek = document.getElementById('msg');
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
});*/

const get = (str) => document.getElementById(str);

document.addEventListener("DOMContentLoaded", function(event) {
    const frame = get('start-frame');
    frame.classList.add('fadeout');
    frame.style.opacity = 0;
    frame.addEventListener('transitionend', () =>
    {
        frame.style.zIndex = -10;
        get('nav').style.opacity = 1;
        const label = get('start-caption');
        label.style.opacity = 1;
        setInterval(changePicture, 6000);
        label.addEventListener('transitionend', () =>
        {
            label.classList.remove('fast-fadein');
            label.classList.add('fadeout');
            label.style.opacity = 0;
        }, false);
    }, false);    
});

const images = [];
for (let i = 0; i< 5; i++) images.push(document.getElementById(`image${i}`));
let i = 0;
const changePicture = () =>
{
    if (i === 4) {
        images[4].style.zIndex = 2
        images.forEach(img => img.style.opacity = 1);
    }
    if (i === 0) {
        images[4].style.zIndex = -3;
        images[4].style.opacity = 1;
    }
    images[i].style.opacity = 0;
    i++;
    if (i >4) i = 0;
}