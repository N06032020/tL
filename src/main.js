$(document).ready(function () {
  $('.reviews-slides').slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: true,
  });
});

// Mask
$(document).ready(function () {
  $('#phone').mask('+7 (999) 999-99-99');
});

// Timer
const counterElement = document.querySelector('.counter');
let counter = 30;
let timerID;

timerID = setInterval(function () {
  counter--;
  counterElement.innerText = counter;

  if (counter < 1) {
    clearInterval(timerID);
  }
}, 1000);
