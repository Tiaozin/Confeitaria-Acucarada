document.addEventListener('DOMContentLoaded', function () { // efeito de rolagem menu
  const grid = document.querySelector('.grid');
  let startX;
  let scrollLeft;
  let isDown = false;

  grid.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
  });

  grid.addEventListener('mouseleave', () => {
    isDown = false;
  });

  grid.addEventListener('mouseup', () => {
    isDown = false;
  });

  grid.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - grid.offsetLeft;
    const walk = (x - startX) * 2;
    grid.scrollLeft = scrollLeft - walk;
  });
});





document.addEventListener('DOMContentLoaded', function () { // efeito de rolagem ofertas
  const giftcakes = document.querySelector('.giftcakes');
  let startX;
  let scrollLeft;
  let isDown = false;

  giftcakes.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - giftcakes.offsetLeft;
    scrollLeft = giftcakes.scrollLeft;
  });

  giftcakes.addEventListener('mouseleave', () => {
    isDown = false;
  });

  giftcakes.addEventListener('mouseup', () => {
    isDown = false;
  });

  giftcakes.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - giftcakes.offsetLeft;
    const walk = (x - startX) * 2;
    giftcakes.scrollLeft = scrollLeft - walk;
  });
});





document.addEventListener('DOMContentLoaded', function () { // botao das ofertas
  const giftcakes = document.querySelector('.giftcakes');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  leftArrow.addEventListener('click', () => {
    giftcakes.scrollLeft -= 200;
  });

  rightArrow.addEventListener('click', () => {
    giftcakes.scrollLeft += 200;
  });
});
