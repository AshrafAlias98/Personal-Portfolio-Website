const box1 = document.querySelector('.box1');
const box3 = document.querySelector('.box3');
const box5 = document.querySelector('.box5');
const box7 = document.querySelector('.box7');
const box9 = document.querySelector('.box9');
const box11 = document.querySelector('.box11');


function sliderOpenTopBackgroundPanel() {
  box1.style.cssText = 'transform-origin: bottom;'
  box3.style.cssText = 'transform-origin: bottom;'
  box5.style.cssText = 'transform-origin: bottom;'
  box7.style.cssText = 'transform-origin: bottom;'
  box9.style.cssText = 'transform-origin: bottom;'
  box11.style.cssText = 'transform-origin: bottom;'

  const random = (min, max) => Math.random() * (max - min) + min;

  anime({
    targets: [box1, box3, box5, box7, box9, box11],
    scaleY: (el, i, t) => 1 - (random(1, 8)/10),
    duration: 300,
    easing: 'easeOutElastic',
    elasticity: 300,
    delay: (el, i, t) => i * 100 + 50
  })
}

// Background panel slider animation reset
function sliderReset(animState) {
animState.pause();
animState.seek(0);
}

// Fading in animation (Text, navbar, etc.)
function fadeInFromTop() {
    anime({
      targets: ['.navbar-right'],
      delay: anime.stagger(50, {start: 200}),
      keyframes: [
        {
          opacity: 0,
          translateY: -100,
          duration: 0
        },
        {
          opacity: 1,
          translateY: 0,
          easing: 'easeInCubic',
          duration: 300,
        }
      ]
    })
  }
  
// Fading out animation (Text, navbar, etc.)
function fadeOut() {
anime({
    targets: ['.navbar-right' ,'.home-text1', '.home-text2', '.arrow-button', '.inspirational-quotes'],
    // delay: anime.stagger(50, {start: 50}),
    keyframes: [
    {
        opacity: 0,
        translateY: 50,
        easing: 'easeInCubic',
        duration: 300,
    }
    ]
})
}


// Function callbacks
fadeInFromTop();
sliderOpenTopBackgroundPanel();