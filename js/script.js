$(document).ready(function() { 
		var button = $('#button-up');	
		$(window).scroll (function () {
		if ($(this).scrollTop () > 300) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});	 
	button.on('click', function(){
	$('body, html').animate({
	scrollTop: 0
	}, 800);
	return false;
	});		 
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
	   breakpoints: {
			// when window width is >= 320px
			768: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			// when window width is >= 480px
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 30
			},
			// when window width is >= 640px
			1300: {
			  slidesPerView: 4,
			  spaceBetween: 40
			}	
		 },
		// Navigation arrows
		navigation: {
		  nextEl: '.body-main-block__arrow.swiper-button-next',
		  prevEl: '.body-main-block__arrow.swiper-button-prev',
		},
	 });
 });