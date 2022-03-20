const button = document.querySelector('.button');

button.addEventListener('mouseenter', e => {
    const camera = document.querySelector('.camera');
    camera.classList.add('flash-animation');
});

button.addEventListener('mouseleave', e => {
    const camera = document.querySelector('.camera');
    camera.classList.remove('flash-animation');
});