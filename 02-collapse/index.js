/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

var collapsibleRotating = [{ opacity: 0 }, { opacity: 1 }];

let btn = document.querySelector('.collapsible__button');

btn.addEventListener('click', funkHide);

let collTiming = {
  duration: 1000,
  iterations: Infinity,
};

var collapsibleAnimation = document
  .querySelector('.collapsible__content')
  .animate(collapsibleRotating, collTiming);
