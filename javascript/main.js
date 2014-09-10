$(document).ready(function(){

	// Define Window & Slide Heights to top
  $window = $(window);
  var homeSlide = $('#portfolio').offset().top;
  var slideOne = $('#about_me').offset().top;
  var slideTwo = $('#contact').offset().top;

    // Define window scroll function
  $window.scroll(function() {
      // For portfolio link
      if ($window.scrollTop() > (homeSlide - 25) && $window.scrollTop() < (slideOne - 25) ) {
        $("#portfolio_link").addClass("link_active");
      }
      else {
        $("#portfolio_link").removeClass("link_active");
      }
      // For about me link
      if ($window.scrollTop() > (slideOne - 25) && $window.scrollTop() < (slideTwo - 25)) {
        $("#about_link").addClass("link_active");
      }
      else {
        $("#about_link").removeClass("link_active");
      }
      // For contact link
      if ($window.scrollTop() > slideTwo - 25) {
        $("#contact_link").addClass("link_active");
        $("#about_link").removeClass("link_active");
      }
      else {
        $("#contact_link").removeClass("link_active");
      }
  });

  // Define Scroll Function
  function scrollTo(id){
    $('html,body').animate({scrollTop: $(id).offset().top},'fast');
  }

  // ANIMATE PORTFOLIO LINK
  $("#portfolio_link").click(function(){
    scrollTo("#portfolio");
  });

  // ANIMATE ABOUT ME LINK
  $("#about_link").click(function(){
    scrollTo("#about_me");
  });

  // ANIMATE CONTACT LINK
  $("#contact_link").click(function(){
    scrollTo("#contact");
  });
})