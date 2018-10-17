$(document).ready(function() {


            //Change mobile-click
  $(".menu-icon i").on("click", function() {
                  $("nav ul").toggleClass("showing");
                  $(".outer-nav li a i").remove();
            });

            //Act on scrolling
  $(document).on("scroll", function() {
             if($(window).scrollTop()) {
                   $('header').addClass('scrolled');
             }
             else {
                   $('header').removeClass('scrolled');
             }
   })
});
