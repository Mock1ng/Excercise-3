// SlideNav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Slider
const slide = document.querySelectorAll('.slider');
M.Slider.init(slide, {
    indicators: false,
    height: 500,
    duration: 1000,
    interval: 3000
});

// Parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// scroll
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll);

// modals
$(document).ready(function () {
    $('#modal1').modal();
    $('#modal1').modal('open');
});
