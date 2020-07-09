const target = document.querySelectorAll('.scroll')
const image = document.querySelector('.image-container')
const screenH = window.innerHeight

console.log(screenH)

let i = 0, length = target.length

let startPos = [-screenH*2,screenH,-screenH]

for (i; i < length; i += 1) {

    target[i].style.transform = `translate(0px,${startPos[i]}px)`

}

window.addEventListener('scroll', e => {

    let scrolled = window.pageYOffset;

    let i = 0, length = target.length

    for (i; i < length; i += 1) {

        let pos = scrolled * target[i].dataset.rate;

        target[i].style.transform = scrolled < screenH/2 ?
            `translate(0px,${startPos[i]+pos}px)` : 
            `translate(0px,${scrolled}px)`

    }

    scrolled > screenH/2 ?
        image.style.opacity = '1' :
        image.style.opacity = '0'
    

})