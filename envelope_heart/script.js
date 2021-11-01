const envelope = document.querySelector('.card');
console.log(envelope.style.borderTop);

envelope.addEventListener('click', e => {
    const sealFlap = document.querySelector('.card-open');
    const classList = Object.values(sealFlap.classList);
    
    if (classList.filter(classItem => {return classItem === 'opened'}).length === 0) {
        sealFlap.classList.add('opened');
        envelope.style.borderTop = '100px solid #ddd';
    } else {
        sealFlap.classList.remove('opened');
        envelope.style.borderTop = '';
    }
    
    console.log(sealFlap.classList);
});