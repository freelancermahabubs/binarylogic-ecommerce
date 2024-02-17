
  // banner swiper start 
  var swiper = new Swiper(".bannerSwiper", {});

  var swiper = new Swiper(".our_brand_slider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });


  // mobile sub menu toggle code 
  const menuItems = document.querySelectorAll('.menu-item-has-children');
  
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const submenu = item.querySelector('.sub-menu');
      if (submenu) {
        submenu.style.display = (submenu.style.display === 'none' || submenu.style.display === '') ? 'block' : 'none';
      }
    });
  });