const box1 = document.querySelector('.box1');
const box3 = document.querySelector('.box3');
const box5 = document.querySelector('.box5');
const box7 = document.querySelector('.box7');
const box9 = document.querySelector('.box9');
const box11 = document.querySelector('.box11');
const hero = document.querySelector('.hero-panel');


// Background panel slider opening animation
function sliderOpeningBackgroundPanel() {
  var animation = anime({
    targets: [box1, box3, box5, box7, box9, box11],
    duration: 200,
    easing: "easeInOutQuad",
    scaleX: 0,
    delay: anime.stagger(50)
  });

  return animation;
}

// Background panel slider closing animation
function sliderClosingBackgroundPanel() {
  box1.style.cssText = 'transform-origin: left;'
  box3.style.cssText = 'transform-origin: left;'
  box5.style.cssText = 'transform-origin: left;'
  box7.style.cssText = 'transform-origin: left;'
  box9.style.cssText = 'transform-origin: left;'
  box11.style.cssText = 'transform-origin: left;'

  anime({
    targets: [box1, box3, box5, box7, box9, box11],
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

// Hero's panel animation (Open)
function sliderOpenLeftToRight() {
  anime({
    targets: hero,
    keyframes: [
      {
        opacity: 0.5,
        scaleX: 0,
        duration: 0
      },
      {
        opacity: 1,
        scaleX: 1,
        easing: 'easeOutQuart',
        duration: 500,
      }
    ]
  })
}

// Hero's panel animation (Close)
function sliderCloseRightToLeft() {
  anime({
    targets: hero,
    keyframes: [
      {
        opacity: 0,
        scaleX: 0,
        easing: 'easeOutQuart',
        duration: 500,
      }
    ],
    delay: 300
  })
}

// Fading in animation (Text, navbar, etc.)
function fadeInFromTop() {
  anime({
    targets: ['.navbar-right' ,'.home-text1', '.home-text2', '.home-text3', '.arrow-button', '.socials'],
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
    targets: ['.navbar-right' ,'.home-text1', '.home-text2', '.home-text3', '.arrow-button', '.socials'],
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

// Reset animation of background panels and transition to next page (Click on About)
document.getElementById("project-navigator").addEventListener('click', function () {
  sliderReset(animState);
  sliderClosingBackgroundPanel();
  sliderCloseRightToLeft();
  fadeOut();
  setTimeout(() => {location.href = "../Pages/project.html";}, 500);
})

// Reset animation of background panels and transition to next page (Click on About)
document.getElementById("contact-navigator").addEventListener('click', function () {
  sliderReset(animState);
  sliderClosingBackgroundPanel();
  sliderCloseRightToLeft();
  fadeOut();
  setTimeout(() => {location.href = "../Pages/contact.html";}, 500);
})

// Reset animation of background panels and transition to next page (Click on Arrow-button in Home page)
document.getElementById("arrow-button").addEventListener('click', function () {
  sliderReset(animState);
  sliderClosingBackgroundPanel();
  sliderCloseRightToLeft();
  fadeOut();
  setTimeout(() => {location.href = "../Pages/project.html";}, 500);
})


// Function callbacks
var animState = sliderOpeningBackgroundPanel();
sliderOpenLeftToRight();
fadeInFromTop();