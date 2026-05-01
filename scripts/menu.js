const headerNav = document.querySelector('.main-header__nav')
const menuToggle = document.querySelector('.main-header__menu-toggle')
const body = document.body

menuToggle.addEventListener('click', () => {
  headerNav.classList.toggle('main-header__nav--open')
  body.classList.toggle('no-scroll')
})
