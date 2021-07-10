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
    targets: ['.navbar-right' ,'.home-text1', '.home-text2', '.arrow-button'],
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

// Quotes slider animation
function sliderQuoteAnimation() {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const dataQuotes = [
    "“I have not failed. I've just found 10,000 ways that won't work.” </br>- Thomas A. Edison", 
    "“Failure isnt fatal, but failure to change might be.” </br>- John Wooden", 
    "“There is no failure except in no longer trying.” </br>- Chris Bradford",
    "“The only real mistake is the one from which we learn nothing.” </br>- Henry Ford",
    "“Success is stumbling from failure to failure with no loss of enthusiasm.” </br>- Winston Churchill",
    "“Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.” </br>- Robert T. Kiyosaki",
    "“When we give ourselves permission to fail, we, at the same time, give ourselves permission to excel.” </br>- Eloise Ristad",
    "“What is the point of being alive if you dont at least try to do something remarkable?” </br>- John Green"
  ]

  var animation = anime({
    targets: '.inspirational-quotes',
    keyframes: [
      {
        opacity: 0,
        translateY: -100,
        duration: 0,        
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 500,
        easing: 'easeInCubic'
      },
      {
        duration: 3000
      },
      {
        opacity: 0,
        translateY: 100,
        duration: 500,
        easing: 'easeOutQuart'
      }
    ],
    loop: true,
    loopComplete: () => {
      document.querySelector(".inspirational-quotes").innerHTML = dataQuotes[random(0, dataQuotes.length)];
    } 
  });

  return animation;
}

// Type-writer animation
document.addEventListener('DOMContentLoaded', function(event) {
  var dataText = [ "Web Developer.", "RPA Developer.", "UI/UX Enthusiast."];

  // Typewrite effect animation
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector(".typewriter-effect").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';  // Add next character to .typewriter-effect
      // Recursively call this function again until the text is fully typed
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // Text has finished typing. Now calling typeEraser() to erase the text 
    else {
      setTimeout(function() {
        typeEraser(text, i, fnCallback)
      }, 2000);
    } 
  }

  function typeEraser(text, i, fnCallback) {
    if (i > 1) {
      document.querySelector(".typewriter-effect").innerHTML = text.substring(0, i-1) +'<span aria-hidden="true"></span>';
      // Recursively call this function again until the text is fully erased
      setTimeout(function() {
        typeEraser(text, i - 1, fnCallback)
      }, 100);
    } else {
      // Text is fully processed (Typed and erased). Now, calling the next text to animate
      setTimeout(fnCallback, 100);
    }
  }

  function StartTextAnimation(i) {
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function() {StartTextAnimation(i + 1);}); // After callback (and whole text has been animated), start next text
    } else {
      setTimeout(() => StartTextAnimation(0), 100);
    }
  }

  StartTextAnimation(0);
});

// Reset animation of background panels and transition to next page
document.getElementById("about-navigator").addEventListener('click', function () {
  sliderReset(animState);
  sliderReset(quoteState);
  sliderClosingBackgroundPanel();
  sliderCloseRightToLeft();
  fadeOut();
  setTimeout(() => {location.href = "../Pages/about.html";}, 500);
})

// Reset animation of background panels and transition to next page
document.getElementById("arrow-button").addEventListener('click', function () {
  sliderReset(animState);
  sliderReset(quoteState);
  sliderClosingBackgroundPanel();
  sliderCloseRightToLeft();
  fadeOut();
  setTimeout(() => {location.href = "../Pages/about.html";}, 500);
})


// Function callbacks
var animState = sliderOpeningBackgroundPanel();
sliderOpenLeftToRight();
fadeInFromTop();
var quoteState = sliderQuoteAnimation();