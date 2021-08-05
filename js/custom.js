(function ($) {
  "use strict";

  // if ($(".carousel-item .active")) {
  //   console.log("hai");
  // } else if ($(".carousel-item")) {
  //   console.log("kk");
  // }

  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".jumbotron").height() - 100;
    var header = $(".navbar").height();

    if (scroll >= box - header) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });

  var elementWindow = $(document).width();
  if (979 >= elementWindow) {
    $(".modal-dialog").css("height","70%");  
    $(".sub-menu-item").css("margin-left","13px");
    $(".sub-menu-item").removeClass("col-3");
    $(".sub-menu-item").addClass("col-5");
  } else {
    $(".modal-dialog").css("height","100%");  
    $(".sub-menu-item").css("margin-left","40px");
    $(".sub-menu-item").removeClass("col-5");
    $(".sub-menu-item").addClass("col-3");  
  }

  $(window).resize(function () {
    // console.log($(document).width())
    var element = $(document).width();
    if (979 >= element) {
      $(".modal-dialog").css("height","70%");  
      $(".sub-menu-item").css("margin-left","13px");
      $(".sub-menu-item").removeClass("col-3");
      $(".sub-menu-item").addClass("col-5"); 
    } else {
      $(".modal-dialog").css("height","100%");  
      $(".sub-menu-item").css("margin-left","40px");
      $(".sub-menu-item").removeClass("col-5");
      $(".sub-menu-item").addClass("col-3"); 
    }
  });

  // var id = $(".navbar-toggler")




  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });

  var grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  
  var displayGrid = $(".grid"); 
  var mainMenu = $(".main-menu");
  var btnBack = $(".btn-back");

  $(".jr").click(function(){   
    displayGrid.css("display","block");
    mainMenu.css("display","none");
    btnBack.css("display","block");

    var value = $(this).attr("data-name")
    grid.isotope({ filter: value })  
  });

  $(".btn-back").click(function(){
    console.log("hai");
    mainMenu.css("display","flex");
    displayGrid.css("display","none");
    btnBack.css("display","none")
  })


  $(".berita").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    margin: 80,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".guru").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  });

  // Window Resize Mobile Menu Fix

  // Scroll animation init

  // Window Resize Mobile Menu Fix

  // Window Resize Mobile Menu Fix
})(window.jQuery);
