

function main() {

	
	// run hasScrolled() and reset didScroll status

	$(window).resize(function(){

		var width = $(window).width();
		var colWidth = parseInt($('#slidertitles .col-sm-4').css('width'), 10);

		if($("#carousel1 .active").hasClass('slide-one')){

			width = width/2;
			width = width - colWidth;
			width = width + 'px';
			$('.carousel-arrow').css('left', width, {duration: 1000});
			$('.carousel-arrow-border').css('left', width, {duration: 1000});

		}else if($("#carousel1 .active").hasClass('slide-two')){

			width = width/2;
			width = width + 'px';
			$('.carousel-arrow').css('left', width, {duration: 1000});
			$('.carousel-arrow-border').css('left', width, {duration: 1000});
		}else if($("#carousel1 .active").hasClass('slide-three')){
			width = width/2;
			width = width + colWidth;
			width = width + 'px';
			$('.carousel-arrow').css('left', width, {duration: 1000});
			$('.carousel-arrow-border').css('left', width, {duration: 1000});
		}
	});

	$('#carousel1').on('slid.bs.carousel', function () {
		var width = $(window).width();
		var colWidth = parseInt($('#slidertitles .col-sm-4').css('width'), 10);

		$('#slidertitles p.active').removeClass('active' ,{duration:1000});
		if($("#carousel1 .active").hasClass('slide-one')){

			width = width/2;
			width = width - colWidth;
			width = width + 'px';
			$('.carousel-arrow').css('left', width, {duration: 1000});
			$('.carousel-arrow-border').css('left', width, {duration: 1000});
			$("[data-slide-to='0']").addClass('active');

		}else if($("#carousel1 .active").hasClass('slide-two')){

			width = width/2;
			width = width + 'px';

			$("[data-slide-to='1']").addClass('active' , {duration:1000});
			$('.carousel-arrow').css('left', width, {duration: 1000});
			$('.carousel-arrow-border').css('left', width, {duration: 1000});
		}else if($("#carousel1 .active").hasClass('slide-three')){
			width = width/2;
			width = width + colWidth;
			width = width + 'px';
			$("[data-slide-to='2']").addClass('active' , {duration:1000});
			$('.carousel-arrow').css('left', width, {duration: 1000});
			$('.carousel-arrow-border').css('left', width, {duration: 1000});
		}
	});
  // do something…
}



$(document).ready(function() {

	if($(window).scrollTop()!==0){
		$('html, body').animate({
		        	scrollTop: 0,
	    		}, 2000);
	}

	 var width = $(window).width();
	var colWidth = parseInt($('#slidertitles .col-sm-4').css('width'), 10);

	width = width/2;
	width = width - colWidth;
	width = width + 'px';
	$('.carousel-arrow').css('left', width);
	$('.carousel-arrow-border').css('left', width);

	main();

	$('.more-reviews-button').on('click', function(){
		window.open('https://www.facebook.com/pg/NovelTeesCT/reviews/');
	})
	$('.start-order').on('click', function(){
		$('html, body').animate({
	        	scrollTop: $('#contact').offset().top + 10,
    		}, 2000);
	});

	$('.novel-nav-list a').on('click', function(e){
		e.preventDefault();
		if($('.navbar-toggle').css('display')=='block'){
			$('.navbar-toggle').click();
		}
		var $object = $(e.currentTarget);
		if($object.hasClass('about-nav')){
			
			$('html, body').animate({
	        	scrollTop: 0,
    		}, 2000);
		}else if($object.hasClass('service-nav')){
			$('html, body').animate({
	        	scrollTop: $('#service').offset().top + 10,
    		}, 2000);
		}else if($object.hasClass('product-nav')){
			
			$('html, body').animate({
	        	scrollTop: $('#product').offset().top + 10,
    		}, 2000);
		}else if($object.hasClass('testimonials-nav')){
			
			$('html, body').animate({
	        	scrollTop: $('#testimonials').offset().top + 10,
    		}, 2000);
		}else if($object.hasClass('vendors-nav')){
			
			$('html, body').animate({
	        	scrollTop: $('#clients').offset().top + 10,
    		}, 2000);
		}else if($object.hasClass('contact-nav')){
			
			$('html, body').animate({
	        	scrollTop: $('#contact').offset().top + 10,
    		}, 2000);
		}
		
	});
	

	window.addEventListener("scroll", function(){  
	   var st = window.pageYOffset || document.documentElement.scrollTop;  
	   var services = $('#service').offset().top;
		var product = $('#product').offset().top;
		var testimonials = $('#testimonials').offset().top;
		var vendors = $('#clients').offset().top;
		var contact = $('#contact').offset().top;
	
	   if(st < services){
	   	if(!$('.about-nav').hasClass('active')){
	   		$('.novel-nav-list a').removeClass('active');
	   		$('.about-nav').addClass('active');
	   	}

	   }else if(st >= services && st < product){
	   	if(!$('.service-nav').hasClass('active')){
	   		$('.novel-nav-list a').removeClass('active');
	   		$('.service-nav').addClass('active');
	   	}
	   }else if(st >= product && st < testimonials){
	   	if(!$('.product-nav').hasClass('active')){
	   		$('.novel-nav-list a').removeClass('active');
	   		$('.product-nav').addClass('active');
	   	}
	   }else if(st >= testimonials && st < vendors ){
	   	if(!$('.testimonials-nav').hasClass('active')){
	   		$('.novel-nav-list a').removeClass('active');
	   		$('.testimonials-nav').addClass('active');
	   	}
	   }else if(st >= vendors && st < contact){
	   	if(!$('.vendors-nav').hasClass('active')){
	   		$('.novel-nav-list a').removeClass('active');
	   		$('.vendors-nav').addClass('active');
	   	}
	   }else if(st >= contact){
	   	if(!$('.contact-nav').hasClass('active')){
	   		$('.novel-nav-list a').removeClass('active');
	   		$('.contact-nav').addClass('active');
	   	}
	   }
	}, false);
});


