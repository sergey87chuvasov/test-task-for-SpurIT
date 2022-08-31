const collBtn = document.querySelector('.collapsible__button');

const animCollapse = document
  .querySelector('.collapsible__content')
  .animate(
    { transform: 'translateY(-800px)' },
    { duration: 250, fill: 'both', easing: 'ease-out' }
  );

animCollapse.pause();

collBtn.addEventListener('click', () => {
  if (animCollapse.playState === 'paused') {
    animCollapse.play();
  } else {
    animCollapse.reverse();
  }
});
