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

const hideStart = () =>
{
    let frame = document.getElementById('start-frame');
    frame.classList.add('fadeout');
    frame.style.opacity = 0;
}

const showCaption = () =>
{
    let frame = document.getElementById('start-frame');
    let label = document.getElementById('start-caption');
    frame.style.zIndex = -10;
    document.getElementById('nav').style.opacity = 1;
    label.style.opacity = 1;
    setInterval(changePicture, 6000);
}

const hideCaption = () =>
{
    let label = document.getElementById('start-caption');
    label.classList.remove('fast-fadein');
    label.classList.add('fadeout');
    label.style.opacity = 0;
}

setTimeout(hideStart, 500);
setTimeout(showCaption, 5500);
setTimeout(hideCaption, 6100);

let i = 0;
const changePicture = () =>
{
    let image = document.getElementById(`image${i}`)
    if (i === 4) {
        image.style.zIndex = 2
        for (let j = 0; j <4; j++) document.getElementById(`image${j}`).style.opacity = 1;
    }
    if (i === 0) {
        let lastImage = document.getElementById('image4');
        lastImage.style.zIndex = -3;
        lastImage.style.opacity = 1;
    }
    image.style.opacity = 0;
    i++;
    if (i >4) i = 0;
}