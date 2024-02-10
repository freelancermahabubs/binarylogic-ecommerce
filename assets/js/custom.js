$(document).ready(function(){
  
    $('#categoryCarousel').owlCarousel({
      loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
      responsive:{
        0:{
          items:3,
        },
        600:{
          items:5,
        },
        1000:{
          items:10,
        }
      }
    });
  });
  