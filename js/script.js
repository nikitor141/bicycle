$(function () {
   $('.slider__body').slick(
      {
         adaptiveHeight: true,
         arrows: false,
         dots: true,
         draggable: false,
         autoplay: true
      }
   );
   $('.burger').click(function () {
      $('.burger,.header__list,body').toggleClass('active');
   })
   $('.header__link').click(function () {
      $('.burger,.header__list,body').removeClass('active');
   });
});