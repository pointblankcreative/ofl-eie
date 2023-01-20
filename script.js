const btn = document.querySelector('#main-btn');
let bottomOfBtn = btn.offsetTop;
const windowWidth = window.innerWidth


function stickyBtn() {
    if (windowWidth >= 767) {
        return
    }
    else if (window.scrollY >= bottomOfBtn) {
        btn.classList.add('sticky-bottom')
    } else {
        btn.classList.remove('sticky-bottom')
    }
}
window.addEventListener('scroll', stickyBtn);


