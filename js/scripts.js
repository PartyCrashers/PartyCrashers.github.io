/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
// Get the button
var boomButton = document.getElementById("boom-button");
var smashButton = document.getElementById("smash-button");
var crashedButton = document.getElementById("crashed-button");

// Get the modal
var boomModal = document.getElementById("boom-modal");
var smashModal = document.getElementById("smash-modal");
var crashedModal = document.getElementById("crashed-modal");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
boomButton.onclick = function() {
  boomModal.style.display = "block";
}
smashButton.onclick = function() {
    smashModal.style.display = "block";
}
crashedButton.onclick = function() {
    crashedModal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  boomModal.style.display = "none";
}
span2.onclick = function() {
  smashModal.style.display = "none";
}
span3.onclick = function() {
  crashedModal.style.display = "none";
}
//   crashedModal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == boomModal || event.target == smashModal || event.target == crashedModal) {
    boomModal.style.display = "none";
    smashModal.style.display = "none";
    crashedModal.style.display = "none";
  }
}