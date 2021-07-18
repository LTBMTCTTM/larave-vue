$('.owl-slider').owlCarousel({
    loop: true,
    margin:0,
    nav:true,
    responsive:{ 0:{items:1 }, 600:{ items:1 }, 1000:{ items:1 }},
     navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
})



$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
      $('#back-to-top').fadeIn();
    } else {
       $('#back-to-top').fadeIn();
    }
});
$('#back-to-top').click(function () {
    $('body,html').animate({
    scrollTop: 0
}, 800);
   return false;
});


$('.formsearch').click(function(){
	$('.form-search').slideToggle( "fast" );
})

$('.scrollbar-macosx').scrollbar({
    autoScrollSize: true
});

