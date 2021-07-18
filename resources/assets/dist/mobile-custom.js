$('.owl-slider').owlCarousel({
    loop: true,
    margin:0,
    nav:true,
    dots: false,
    responsive:{ 0:{items:1 }, 600:{ items:1 }, 1000:{ items:1 }},
     navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
})

 

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
  $('#back-to-top').fadeIn();
} else {
   $('#back-to-top').fadeOut();
}
});
$('#back-to-top').click(function () {
    $('body,html').animate({
    scrollTop: 0
}, 800);
   return false;
});

 AOS.init();
 
$('.scrollbar-macosx').scrollbar();

