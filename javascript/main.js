$(document).ready(function(){

	// Define Window & Slide Heights to top
  $window = $(window);
  var homeSlide = $('#about_me').offset().top;
  var slideOne = $('#portfolio').offset().top;
  var slideTwo = $('#contact').offset().top;

    // Define window scroll function
  $window.scroll(function() {
      // For portfolio link
      if ($window.scrollTop() > (homeSlide - 25) && $window.scrollTop() < (slideOne - 25) ) {
        $("#about_link").addClass("link_active");
      }
      else {
        $("#about_link").removeClass("link_active");
      }
      // For about me link
      if ($window.scrollTop() > (slideOne - 25) && $window.scrollTop() < (slideTwo - 25)) {
        $("#portfolio_link").addClass("link_active");
      }
      else {
        $("#portfolio_link").removeClass("link_active");
      }
      // For contact link
      if ($window.scrollTop() > slideTwo - 25) {
        $("#contact_link").addClass("link_active");
        $("#portfolio_link").removeClass("link_active");
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

  //About section cycle through information divs
  var divs = $('div[id^="content-"]').hide(),
        i = 0;
    function cycle() {
        divs.fadeOut(400).delay(400).eq(i).fadeIn(400);
        i = ++i % divs.length;
    };
    cycle()
    $('#arrows').click(function(){
      cycle();
      $('#arrows').toggleClass('rotate');
      $('#arrows').toggleClass('rotate-reset');
    })

  //Portfolio sections click reveals correct content
  var newHash     = '',
   $mainContent = $('#project_div');

  $('#projects').delegate('a', 'click', function() {
    window.location.hash = $(this).attr('href');
    return false;
  });

  // Not all browsers support hashchange
  // For older browser support: http://benalman.com/projects/jquery-hashchange-plugin/
  $(window).bind('hashchange', function() {
    newHash = window.location.hash.substr(1);
    $mainContent.load(newHash + " #project_div > *");
  });

})