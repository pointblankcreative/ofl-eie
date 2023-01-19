console.log('ARE YOU FED UP?')

const btn = document.querySelector('#main-btn')
console.log(btn)

let bottomOfBtn = btn.offsetTop;

console.log(bottomOfBtn)

function stickyBtn() {
    if (window.scrollY >= bottomOfBtn) {
        btn.classList.add('sticky-bottom')
    } else {
        btn.classList.remove('sticky-bottom')
    }
}

window.addEventListener('scroll', stickyBtn);
