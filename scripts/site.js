window.addEventListener('transitionrun', (e) => {
    let hasHZcroll = document.body.scrollWidth > document.body.clientWidth;
    console.log(hasHZcroll);
    if(hasHZcroll) {
        let els = document.getElementsByClassName('gallery-item-info');
        for (let i = 0; i < els.length; i++) {
            const element = els[i];
            element.classList.add('left-info')
        }
    }
    else {
        let els = document.getElementsByClassName('gallery-item-info');
        for (let i = 0; i < els.length; i++) {
            const element = els[i];
            element.classList.remove('left-info')
        }
    }
})