const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

menuButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});
