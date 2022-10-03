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
let time = 1800;
const countDownElement = document.querySelector("#countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countDownElement.innerHTML = `${minutes}:${seconds}`;

  time--;
}

