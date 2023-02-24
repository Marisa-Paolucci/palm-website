const mobileMenuTrigger = document.getElementById('mobileMenuTrigger')
const mobileMenu = document.querySelector('.nav-links-container');

mobileMenuTrigger.addEventListener('click', ()=>
{
   mobileMenu.classList.toggle('active');
   mobileMenuTrigger.classList.toggle('active'); 
});

var skipLink = document.querySelector('.skip-link');
skipLink.addEventListener('click', function (e) {
   document.querySelector(skipLink.getAttribute('href')).focus();
});