var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}

const topnav = document.querySelector('.topnav');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.icon');
const link = document.querySelector('.link');

icon.classList.add('shade')
navbar.classList.add('linkshade')

window.onscroll = () => {
    if (window.scrollY > 100) {
        topnav.classList.add('nav-down');

        navbar.classList.remove('transparent')
        icon.classList.remove('transparent')

        icon.classList.remove('shade')
        icon.classList.add('glow')

        navbar.classList.remove('linkshade')
        navbar.classList.add('linkglow')
    } else {
        topnav.classList.remove('nav-down');

        navbar.classList.add('transparent')
        icon.classList.add('transparent')

        icon.classList.add('shade')
        icon.classList.remove('glow')

        navbar.classList.add('linkshade')
        navbar.classList.remove('linkglow')


    }
};


