// the image i did use is from https://www.flaticon.com/free-icons/rocket

const countdownDisplay = document.getElementById("countdown-display")
const rocket = document.getElementById("rocket")
let timeRemaining = 10

setInterval(() => {
    if (timeRemaining !== 0) {
        timeRemaining--
        console.log(timeRemaining)
        countdownDisplay.innerText = timeRemaining
    }
    else if (timeRemaining === 0 ) {
        countdownDisplay.innerText = 'Lunching now...'
        document.body.classList.add('lunch-now')
        setInterval(() => {
            countdownDisplay.innerText = 'Reached Space...'
            document.body.classList.add('space')
        },15000)
    }
}, 1000)

function stars() {
    let count = 40;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 1
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px'
        star.style.animationDuration = duration + 's'

        scene.appendChild(star);
        i++
    }
}
stars();

// Task: 
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation


// Stretch goals: 
// 1) Add fire under the rocket. 
// 2) Randomly don’t launch the rocket when the timer reaches 0.

