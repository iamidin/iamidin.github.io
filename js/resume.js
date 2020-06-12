(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

$(document).ready(function () {
  function removeAds() {
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
      console.log('frames found ');
      iframes[i].parentNode.removeChild(iframes[i]);
    }
    if ($("#rtaFrame").length > 0) {
      $("#rtaFrame").remove();
    }
  }
  function removeAds2() {
    var iframes2 = parent.document.querySelectorAll('iframe');
    for (var i = 0; i < iframes2.length; i++) {
      console.log('frames found 2');
      iframes2[i].parentNode.removeChild(iframes2[i]);
    }
  }
  function removeAds3() {
    var iframes3 = top.document.querySelectorAll('iframe');
    for (var i = 0; i < iframes3.length; i++) {
      console.log('frames found 3');
      iframes3[i].parentNode.removeChild(iframes3[i]);
    }
  }
  for(var i = 1000; i <= 30000; i+=1000) {
    setTimeout(function() {
      console.log('remove ads per second');
      removeAds();
      removeAds2();
      removeAds3();
    }, i);
  }
});