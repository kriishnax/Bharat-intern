let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let theme = document.getElementById("theme");
theme.onclick=function(){
   document.body.classList.toggle("dark-mode");   
   if(document.body.classList.contains("dark-mode")){
      theme.src="darklight/sun.png"
   }
   else{
      theme.src="darklight/moon.png"
   }
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
         });
        };
     });

     let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);

     /*============remove toggle icon navbar whrn click navbar link===============*/
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove( 'active');
};
ScrollReveal({ 
   reset: true ,
    distance:'50px',
    duration:1300,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.projects-box,.contact form,.text-container', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img,.video-container,.gallery-container,.services-box', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content,.poster-container,', { origin:'right' });



const typed = new Typed('.multiple,heading', {
strings: ['Frontend Developer','Designer','Content Creator'],
typeSpeed:70,
backSpeed:70,
backDelay:1000,
loop:true
});
