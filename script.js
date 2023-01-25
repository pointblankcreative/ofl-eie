const btn = document.querySelector('#main-btn');
let bottomOfBtn = btn.offsetTop;
const btnText = document.getElementsByClassName('btn-join-en')
const windowWidth = window.innerWidth

const stickyStar = document.querySelector('#stickyStar')
let bottomOfStar = stickyStar.offsetTop


function stickyBtn() {
    if (windowWidth >= 767) {
        return
    }
    else if (window.scrollY >= bottomOfBtn ) {
        btn.classList.add('sticky-bottom')
        btnText[0].innerText = 'JOIN THE FIGHT'
    } else {
        btn.classList.remove('sticky-bottom')
    }
}

function starBtn() {
    if (window.scrollY >= bottomOfStar) {
        stickyStar.style.top = window.scrollY + 50 + 'px'
    } else {
        stickyStar.style.top = bottomOfStar
    }
}
window.addEventListener('scroll', stickyBtn);
window.addEventListener('scroll', starBtn);


