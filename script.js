const mobileMenuTrigger = document.getElementById('mobileMenuTrigger')
const mobileMenu = document.querySelector('.nav-links-container');

mobileMenuTrigger.addEventListener('click', () =>
{
   mobileMenu.classList.toggle('active');
   mobileMenuTrigger.classList.toggle('active'); 

   //Toggle Aria-Expanded Attribute True / False
   if(mobileMenu.classList.contains('active')) {
      mobileMenuTrigger.setAttribute('aria-expanded', 'true');
   } else {
      mobileMenuTrigger.setAttribute('aria-expanded', 'false');
   }
});

var skipLink = document.querySelector('.skip-link');
skipLink.addEventListener('click', function (e) {
   document.querySelector(skipLink.getAttribute('href')).focus();
});