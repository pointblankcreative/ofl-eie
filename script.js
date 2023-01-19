console.log('ARE YOU FED UP?')

const btn = document.querySelector('#main-btn');
let bottomOfBtn = btn.offsetTop;

// const moreSections = document.querySelectorAll('.read-more');


function stickyBtn() {
    if (window.scrollY >= bottomOfBtn) {
        btn.classList.add('sticky-bottom')
    } else {
        btn.classList.remove('sticky-bottom')
    }
}

// function toggleOpen() {
//     console.log('hello')
//     // this.classList.toggle('open');
// }

// moreSections.forEach(item => item.addEventListener('click', toggleOpen));

window.addEventListener('scroll', stickyBtn);


