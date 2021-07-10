const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const hero = document.querySelector('.hero-panel');


// Background panel slider opening animation
function sliderOpeningBackgroundPanel() {
    var animation = anime({
      targets: [box1, box2, box3, box4, box5, box6],
      duration: 200,
      easing: "easeInOutQuad",
      scaleX: (el, i, t) => {
        var originalWidth = anime.get(el, "width", "%");
        return (el === box6) ? 0 : 1 / (originalWidth/0.075);
      },
      delay: anime.stagger(50),
      backgroundColor: {
        value: "rgba(255, 255, 255, 0.5)",
        delay: (el, i, t) => i * 50 + 150
      }
    });
  
    return animation;
  }
  
// Background panel slider closing animation
function sliderClosingBackgroundPanel() {
box1.style.cssText = 'transform-origin: left;'
box2.style.cssText = 'transform-origin: left;'
box3.style.cssText = 'transform-origin: left;'
box4.style.cssText = 'transform-origin: left;'
box5.style.cssText = 'transform-origin: left;'
box6.style.cssText = 'transform-origin: left;'

anime({
    targets: [box1, box2, box3, box4, box5, box6],
    keyframes: [
    {
        scaleX: 0.003,
        duration: 0,
    },
    {
        duration: 200,
        easing: "easeInOutQuad",
        scaleX: 1,
        delay: anime.stagger(50),
        backgroundColor: {
        value: "rgb(30, 30, 30)",
        delay: (el, i, t) => i * 50 + 150
        }
    }
    ]
});

return true;
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
// var animState = sliderOpeningBackgroundPanel();
// sliderOpenLeftToRight();
fadeInFromTop();