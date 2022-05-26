
 (function($) {

	"use strict";


   $(window).load(function() {
    	$("#loader").fadeOut("slow", function(){

    
        $("#preloader").delay(300).fadeOut("slow");

      }); 
  	})


	$('input, textarea, select').placeholder()  


  	setTimeout(function() {

   	$('.main-content h1').fitText(.8, { minFontSize: '42px', maxFontSize: '94px' });

  	}, 100);


	$(".kern-this").lettering(); 


   var toggleButton = $('.menu-toggle'),
       nav = $('#menu-nav-wrap'),
       mainContent = $('#main-404-content'),
       mainHeader = $('.main-header');

	toggleButton.on('click', function(e){

		e.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.toggleClass('menu-is-open');
		mainHeader.toggleClass('menu-is-open');
		mainContent.toggleClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').toggleClass('overflow-hidden');
		});
			
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}

	});

	mainContent.on('click', function(e){

		if( !$(e.target).is('.menu-toggle, .menu-toggle span') ) {

			toggleButton.removeClass('is-clicked');
			nav.removeClass('menu-is-open');
			mainHeader.removeClass('menu-is-open');
			mainContent.removeClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
						if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});


   	$(".main-content-slides").vegas({
		transition: 'fade',
		transitionDuration: 2500,
		delay: 5000,
    	slides: [
       	{ src: "images/slides/woods.jpg" },
        	{ src: "images/slides/greens.jpg" },
        	{ src: "images/slides/dandelion.jpg" }
    	]
	});

	$('.main-content-particle-js').particleground({
	    dotColor: '#fff',
	    lineColor: '#555555',
	    particleRadius: 6,
	    curveLines: true,
	    density: 9000,
	    proximity: 100
	});  	
 

})(jQuery);