const btn = document.querySelector('#main-btn');
let bottomOfBtn = btn.offsetTop;
const windowWidth = window.innerWidth

const stickyStar = document.querySelector('#stickyStar')
console.log(stickyStar)


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

function starBtn() {
    if (window.scrollY >= bottomOfBtn) {
        stickyStar.style.top = window.scrollY + 100 + 'px'
    } else {
        stickyStar.style.top = bottomOfBtn
    }
}
window.addEventListener('scroll', stickyBtn);
window.addEventListener('scroll', starBtn);


