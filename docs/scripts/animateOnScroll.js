function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
window.addEventListener('scroll', (e) => {
    var el = document.getElementsByClassName('brands')[0];
    if(isScrolledIntoView(el)) {
        el.classList.add('animate')
    }
}
)