const content = document.getElementById('content');
let topSet = false;
let currentScroll = 0;

const scrollFunction = () => {
  const scrollTop = window.scrollY;
  const scaleFactor = Math.min(1 + scrollTop * 0.001, 1.8);
  document.getElementById(
    'title'
  ).style.transform = `translate(-50%, -50%) scale(${scaleFactor}) translateZ(0)`;
  document.getElementById('svg').style.transform = `rotate(${
    scrollTop / 2
  }deg)`;
};

const createWidget = () => {
  return `<div class="widget">
        <div class="widget-image"></div>
        <hr class="widget-hr">
        <div class="widget-title">Title</div>
        <div class="widget-text">lorem ipsum dolor sit</div>
      </div>`;
};

const createWidgetsContainer = () => {
  let container = document.createElement('div');
  container.className = 'widget-container';
  for (let k = 0; k < 3; k++) {
    container.innerHTML += createWidget();
  }
  document.getElementById('main').appendChild(container);
};

const createCard = (side) => {
  if (
    parseInt(currentScroll) < parseInt(window.scrollY) &&
    parseInt(currentScroll) % 3 === 0
  ) {
    console.log(parseInt(currentScroll));
    document.getElementById(
      'main'
    ).innerHTML += `<div class="card card-${side}">
      <h3 class="card-title">Card Title</h3>
      <hr class="custom-hr" />
      <hr class="custom-hr-2" />
      <hr class="custom-hr-3" />
      <p class="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut fringilla dolor. Quisque tempor placerat mi, eu facilisis erat malesuada eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sed velit dignissim, blandit felis nec, dictum odio. Donec vehicula tellus eu felis fermentum, sit amet consequat metus lacinia. Pellentesque nec nunc id ligula ullamcorper consectetur. Integer id magna sed quam interdum pharetra a sed enim. Integer vel condimentum magna. Maecenas aliquet sem eget turpis consectetur scelerisque. Etiam dapibus ex id pharetra ultricies.
      </p>
      <div class="button-group">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
    </div>`;
  }
};

window.addEventListener('scroll', () => {
  scrollFunction();
  //Lol, get lagged
  let which = Math.floor(Math.random() * 5);
  switch (which) {
    case 0:
    case 1:
      createCard('left');
      break;
    case 2:
    case 3:
      createCard('right');
      break;
    case 4:
      createWidgetsContainer();
      break;
  }
  currentScroll = window.scrollY;
});
