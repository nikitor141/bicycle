$(function () {
   $('.slider__body').slick(
      {
         adaptiveHeight: true,
         arrows: false,
         dots: true,
         autoplay: true
      }
   );
   $('.burger').click(function () {
      $('.burger,.header__list,body').toggleClass('active');
   })
});