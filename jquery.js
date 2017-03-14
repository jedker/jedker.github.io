var divs = $('#nav_bar');
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   divs.css({ 'opacity' : (1 - st/900) });
});