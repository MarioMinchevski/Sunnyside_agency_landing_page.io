const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElementsGlry = document.querySelectorAll('.hidden-glry')

const hamburger = document.querySelector('.hamburger')
const navbarMenu = document.querySelector('.navbar__menu')

// animations 

const observer = new IntersectionObserver(elements => {
    elements.forEach((item) => {

        console.log(item.isIntersecting)
        console.log(item.intersectionRatio)

        if (item.isIntersecting) {
            item.target.classList.add('show')
            observer.unobserve(item.target)
        }
    })
}, {
    threshold: 0.4
})

hiddenElements.forEach(element => {
    observer.observe(element);
});

const observerAlt = new IntersectionObserver(elements => {
    elements.forEach((item) => {

        console.log(item.isIntersecting)
        console.log(item.intersectionRatio)

        if (item.isIntersecting) {
            item.target.classList.add('show-glry')
            observer.unobserve(item.target)
        }
    })
}, {
    threshold: 0
})

// navbar 

hiddenElementsGlry.forEach(element => {
    observerAlt.observe(element)
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navbarMenu.classList.toggle('active')
})

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});


// garbage

// const textElements = document.querySelectorAll('.service-textbox.hidden')
// const imageElements = document.querySelectorAll('.service-imagebox.hidden')

// const textObserver = new IntersectionObserver(elements => {
//     elements.forEach((item) => {
//         if (item.isIntersecting) {
//             item.target.classList.add('show')
//             textObserver.unobserve(item.target)
//         }
//     })
// }, {
//     threshold: 0.01
// })

// const imageObserver = new IntersectionObserver(elements => {
//     elements.forEach((item) => {
//         if (item.isIntersecting) {
//             item.target.classList.add('show')
//             imageObserver.unobserve(item.target)
//         }
//     })
// }, {
//     threshold: 0.5
// })

// textElements.forEach(element => {
//     textObserver.observe(element)
// })

// imageElements.forEach(element => {
//     imageObserver.observe(element)
// })