const toggleButton = document.getElementById('toggle-button');
const  nav_menu= document.getElementById('nav_menu');

toggleButton.addEventListener('click', () => {
    nav_menu.classList.toggle('active');
});
