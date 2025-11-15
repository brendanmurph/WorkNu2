const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu'
  navLinks.classList.toggle('top-[0%]')
}
function hide() {
  const x = document.getElementById ('tagline');
  if (x.style.display ==='none') {
    x.style.display = "flex"; }
    else {
      x.style.display = 'none'
    }
  }

  AOS.init();