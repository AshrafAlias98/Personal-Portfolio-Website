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
const panel = document.querySelector('.panel3');
const contactPanel = document.querySelector('.container-header3');

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
function sliderCloseBottomBackgroundPanel() {
    anime({
        targets: [box1, box3, box5, box7, box9, box11],
        keyframes: [
            {
                scaleY: 1,
                opacity: 0.95,
                duration: 200,
            }
        ],
        easing: 'easeOutQuart',
        delay: (el, i, t) => i * 100 + 50
    });
    anime({
      targets: [box2, box4, box6, box8, box10],
      backgroundColor: 'rgb(30, 30, 30)',
      opacity: 0.95,
      delay: 500,
      duration: 400
    });
}

// Background panel slider from top animation
function sliderResetBackgroundPanel() {
    box1.style.cssText = 'transform-origin: bottom; opacity: 0;'
    box3.style.cssText = 'transform-origin: bottom; opacity: 0;'
    box5.style.cssText = 'transform-origin: bottom; opacity: 0;'
    box7.style.cssText = 'transform-origin: bottom; opacity: 0;'
    box9.style.cssText = 'transform-origin: bottom; opacity: 0;'
    box11.style.cssText = 'transform-origin: bottom; opacity: 0;'

    anime({
      targets: [box1, box3, box5, box7, box9, box11],
      keyframes: [
          {
              scaleY: 0.01,
          },
      ],
      easing: 'easeOutQuart',
    })
}

// Contact's panel animation (Open)
function sliderOpenLeftToRight() {
    contactPanel.style.cssText = 'transform-origin: left;'
    anime({
      targets: contactPanel,
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
  
// Contact's panel animation (Close)
function sliderCloseRightToLeft() {
    anime({
        targets:  '.container-header3',
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
      targets: ['.logo', '.burger', '.navbar-right', '.contact-header', '.contact-subheader', '#contact-form', '.socials'],
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
      targets: ['.logo', '.burger', '.navbar-right', '.contact-header', '.contact-subheader', '#contact-form', '.socials'],
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

// Reset animation of background panels and transition to next page (Click on Home)
document.getElementById("home-navigator-3").addEventListener('click', function () {
    sliderCloseRightToLeft();
    fadeOut();
    sliderCloseBottomBackgroundPanel();
    setTimeout(() => {location.href = "../index.html";}, 700);
})
  
// Reset animation of background panels and transition to next page (Click on Contact)
document.getElementById("project-navigator-3").addEventListener('click', function () {
    sliderCloseRightToLeft();
    fadeOut();
    sliderCloseBottomBackgroundPanel();
    setTimeout(() => {location.href = "../Pages/project.html";}, 700);
})


// Function callbacks
setTimeout(() => {
  sliderResetBackgroundPanel();
  fadeInFromTop();
  sliderOpenLeftToRight();
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

document.getElementById('form-submit').onclick = function() {
  document.getElementById('contact-form').submit();
}