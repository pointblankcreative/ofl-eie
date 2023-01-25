const btn = document.querySelector('#main-btn');
let bottomOfBtn = btn.offsetTop;
const btnText = document.getElementsByClassName('btn-join-en')
const windowWidth = window.innerWidth

const stickyStar = document.querySelector('#stickyStar')
let bottomOfStar = stickyStar.offsetTop

const actionForm = document.getElementById('joinForm')
// console.log(actionForm)
const topOfForm = actionForm.offsetTop
// console.log(topOfForm)

const video = document.querySelector('iframe')
// console.log('video', video)
const closeBtn = document.getElementsByClassName('btn-close')[0]
// console.log(closeBtn)

const modalOpen = document.getElementsByClassName('video-hero')[0]
console.log(modalOpen)

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
        // console.log(stickyStar.offsetTop)
        stickyStar.style.top = window.scrollY + 100 + 'px'
    }   
    else {
        stickyStar.style.top = bottomOfStar
    }
}

function starGone() {
    stickyStar.style.display = 'none'
}

function closeVideo() {
    video.src = ""
}

function toggleModal() {
    video.src = "https://www.youtube.com/embed/8ifSqoopAzU"
}

window.addEventListener('scroll', stickyBtn);
window.addEventListener('scroll', starBtn);
actionForm.addEventListener('click', starGone);
closeBtn.addEventListener('click', closeVideo)
modalOpen.addEventListener('click', toggleModal)




