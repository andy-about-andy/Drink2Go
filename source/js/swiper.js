const swiper = new Swiper('.product-new', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
  grabCursor: true,
});
