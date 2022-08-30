const collBtn = document.querySelector('.collapsible__button');

collBtn.addEventListener('click', hideFunc);

function hideFunc() {
  const aliceTumbling = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-480%)' },
  ];

  let collTiming = {
    duration: 1000,
  };

  document
    .querySelector('.collapsible__content')
    .animate(aliceTumbling, collTiming);
}

hideFunc();
