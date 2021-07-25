const box1 = document.querySelector('.box1');
const box3 = document.querySelector('.box3');
const box5 = document.querySelector('.box5');
const box7 = document.querySelector('.box7');
const box9 = document.querySelector('.box9');
const box11 = document.querySelector('.box11');

const box2 = document.querySelector('.box2');
const box4 = document.querySelector('.box4');
const box6 = document.querySelector('.box6');
const box8 = document.querySelector('.box8');
const box10 = document.querySelector('.box10');

var translateValue;

$(document).ready(function() {
  //Preloader
  var preloaderFadeTime = 300;
  
  function hidePreloader() {
    var preloader = $('.sk-cube-wrapper');
    setTimeout(() => {
      preloader.fadeOut(preloaderFadeTime);
    }, 500) 
  }

  hidePreloader();
  });

// Background panel slider from top animation
function sliderOpenTopBackgroundPanel(partial) {
  if (partial) {

    box1.style.cssText = 'transform-origin: bottom;'
    box3.style.cssText = 'transform-origin: bottom;'
    box5.style.cssText = 'transform-origin: bottom;'
    box7.style.cssText = 'transform-origin: bottom;'
    box9.style.cssText = 'transform-origin: bottom;'
    box11.style.cssText = 'transform-origin: bottom;'

    const random = (min, max) => Math.random() * (max - min) + min;

    anime({
      targets: [box1, box3, box5, box7, box9, box11],
      scaleY: (el, i, t) => random(0.8, 0.95),
      duration: 300,
      easing: 'easeOutElastic',
      elasticity: 300,
      delay: (el, i, t) => i * 100 + 50
    })
  } else {
    anime({
      targets: [box1, box3, box5, box7, box9, box11],
      scaleY: 0,
      duration: 400,
      easing: 'easeOutCubic',
      delay: (el, i, t) => i * 100 + 50
    });
    anime({
      targets: [box2, box4, box6, box8, box10],
      opacity: 0,
      delay: 500,
      duration: 2000
    });
  }
}

// Fading in animation (Text, navbar, etc.)
function fadeInFromTop() {
  anime({
    targets: ['.logo', '.burger', '.navbar-right', '.project-header', '.about-me', '.card', '.socials', '.horizontal'],
    delay: anime.stagger(15, {start: 200}),
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
function fadeOut(inPlace) {
  if (!inPlace) {
    anime({
      targets: ['.logo', '.burger', '.navbar-right' ,'.project-header', '.about-me', '.socials', '.horizontal'],
      keyframes: [
      {
          opacity: 0,
          translateY: 50,
          easing: 'easeInCubic',
          duration: 300,
      }
      ]
    })
  } else {
    anime({
      targets: ['.card'],
      keyframes: [
      {
          opacity: 0,
          easing: 'easeInCubic',
          duration: 300,
      }
      ]
    })
  }
}

// Reset animation of background panels and transition to next page (Click on Home)
document.getElementById("home-navigator-2").addEventListener('click', function () {
  sliderOpenTopBackgroundPanel(false);
  fadeOut(false);
  fadeOut(true);
  setTimeout(() => {location.href = "../index.html";}, 700);
})

// Reset animation of background panels and transition to next page (Click on Contact)
document.getElementById("contact-navigator-2").addEventListener('click', function () {
  sliderOpenTopBackgroundPanel(false);
  fadeOut(false);
  fadeOut(true);
  setTimeout(() => {location.href = "../Pages/contact.html";}, 700);
})

// Adding tilt animation to project cards
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 5,
  speed: 400,
});

// Function callbacks
setTimeout(() => {
  fadeInFromTop();
  sliderOpenTopBackgroundPanel(true);
}, 500);


// Detect the changes in media query (Changing size during runtime)
const mediaQueryMobile = window.matchMedia('(max-width: 900px)');
mediaQueryMobile.addEventListener('change', (e) => {
  if (e.matches) {
    anime({
      targets: '.navbar-right',
      translateX: '100%',
      duration: 0
    })
  } else {
    anime({
      targets: '.navbar-right',
      translateX: '0%',
      duration: 0
    })
  }
  translateValue = '100%';
})

// Detecting the changes in the initial media query (Static)
if (window.matchMedia('(max-width: 900px)').matches) {
  anime({
    targets: '.navbar-right',
    translateX: '100%',
    duration: 0
  })
}


document.querySelector('.burger').addEventListener('click', () => {
  if (translateValue == '0%') {
    translateValue = '100%';
  }else {
    translateValue = '0%';
  }

  anime({
    targets: '.navbar-right',
    easing: 'easeInCubic',
    duration: 400,
    translateX: translateValue
  })
})