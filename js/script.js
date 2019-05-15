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
// const modal = document.querySelectorAll('.modal');
// M.Modal.init(modal);

$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
});

$(document).ready(function () {
    $('#Modal1').foundation('reveal', 'open')
});

$('#modal1').modal('open');