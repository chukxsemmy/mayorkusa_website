const toggler = document.querySelector('.navbar-toggler');
const collapse = document.getElementById('navbarSupportedContent');

collapse.addEventListener('show.bs.collapse', () => {
  toggler.classList.add('show-close');
});

collapse.addEventListener('hide.bs.collapse', () => {
  toggler.classList.remove('show-close');
});


const wrapper = document.querySelector('.services-wrapper');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

leftArrow.addEventListener('click', () => {
  wrapper.scrollBy({ left: -300, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  wrapper.scrollBy({ left: 300, behavior: 'smooth' });
});