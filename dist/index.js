function toggleDropdown(dropdownId, arrowId) {
    const dropdown = document.getElementById(dropdownId);
    const arrow = document.getElementById(arrowId);
    
    dropdown.classList.toggle('hidden');
    
    // Rotate the arrow icon
    arrow.classList.toggle('transform');
    arrow.classList.toggle('rotate-180');
  }
var swiper = new Swiper('.swiper', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true,
});

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
    