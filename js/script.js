$(document).ready(function() {


            //Change mobile-click
  $(".menu-icon i").on("click", function() {
                  $("nav ul").toggleClass("showing");
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
