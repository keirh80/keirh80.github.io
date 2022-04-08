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