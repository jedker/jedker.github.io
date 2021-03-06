$(document).ready(function(){



var diva = $('.photo');
$(window).on('scroll', function() {
   var sp = $(this).scrollTop();
   diva.css({ 'opacity' : (1 - sp/1200) });
});

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".slide").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-left"); 
    } 
  });
  
});

$(window).scroll(function(event) {
  
  $(".table_1").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-left"); 
    } 
  });
  
});





$(window).scroll(function(event) {
  
  $(".table_1_1").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-left"); 
    } 
  });
  
});


var win = $(window);
var allMods = $("");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-right"); 
    } 
  });
  
});






//Anchor elements smooth scroll when clicked
$("#opis").click(function() {
    $('html, body').animate({
        scrollTop: $("#czym").offset().top
    }, 700);
});

$("#prod").click(function() {
    $('html, body').animate({
        scrollTop: $("#produkty").offset().top
    }, 700);
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 1000);
});


//remove/show black slider on scroll
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('#nav_bar').stop().slideToggle(200);
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
          $('#nav_bar').stop().slideToggle(200);
        up = !up;
    }
    mypos = newscroll;
});

$(document).ready(function(){

var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};
 $('.slider_container').click(function() {
    rotation += 180;
    $('#arrow').rotate(rotation);
});

  $(".arrow").add("#click_1").click(function(){
      if($(".slider").css('bottom') == '0px'){
          $(".slider").animate({bottom:'440px'},200);
      }
      else
      {
          $(".slider").animate({bottom:'0px'},200);
      }
      
  });

$("#arrow").add('#click_1').click(function () {

    $header = $(this);
    $content = $(".hidden");
    $content.slideToggle(200, function () {

    });

});

});
});
