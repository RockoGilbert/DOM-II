// Your code goes here


const logo = document.querySelector('.logoHeading')
    logo.addEventListener()
// 1. mouseenter
const funBus = document.querySelector('img/fun-bus.jpg');



funBus.addEventListener('mouseenter', function () {
    funBus.style.transform = "scale(1.6)";
})

// 2. mouseleave
funBus.addEventListener('mouseleave', function() {
    funBus.style.transform = "scale(1)";
}

// 3. transform
const imgAdventure = document.querySelector('img/adventure.jpg');
    imgAdventure.addEventListener('onmouseover', function () {
        imgAdventure.style.transition = "transform 1s";
    })

// 4. click

const letsGo = document.querySelector('h2');
    letsGo.addEventListener("click", () => {
        letsGo.style.color = "brown";
    })


// 5. background color


const navLink = document.querySelectorAll('nav-link');
    navLink.addEventListener("onkeydown", () => {
        navLink.style.backgroundColor = "blue";
    
    }

// 6. re-size
window.addEventListener('resize', () => {
    document.querySelector('html').style.fontSize = "2.5em"
})

// 7. load
window.addEventListener('load', () => {
    document.querySelector('html').style.transform = "rotate(360deg)";
    document.querySelector('html').style.transition = "transform 5s";
})

// 8. scroll
window.addEventListener('scroll', () => {
    document.querySelector('body').style.color = "DarkSeaGreen";
})


// 9.




// 10.