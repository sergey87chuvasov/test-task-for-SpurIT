const collBtn = document.querySelector('.collapsible__button');

const hiddenBtn = collBtn.getElementsByClassName(
  'collapsible__action--hidden'
)[0];

const visibleBtn = collBtn.getElementsByClassName(
  'collapsible__action--visible'
)[0];

hiddenBtn.style.display = 'none';

const animCollapse = document
  .querySelector('.collapsible__content')
  .animate(
    { transform: 'translateY(-1000px)' },
    { duration: 250, fill: 'both', easing: 'ease-out' }
  );

animCollapse.pause();

collBtn.addEventListener('click', () => {
  console.log('animCollapse.playState >>>', animCollapse.playState);
  if (animCollapse.playState === 'paused') {
    hiddenBtn.style.display = 'block';
    visibleBtn.style.display = 'none';
    animCollapse.play();
  } else if (animCollapse.playState === 'finished') {
    hiddenBtn.style.display = 'none';
    visibleBtn.style.display = 'block';
    animCollapse.reverse();
  }
});
