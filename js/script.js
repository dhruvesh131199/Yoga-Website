var scrolled = 0;

$(document).ready(function(){

	$(".nav-toggle").click(function(){
		$(".main-nav").toggleClass("main-nav--open",500);
		$(".nav-toggle").toggleClass("open", 500);
	});

	//scrolling on clicks

	//about

	$(".main-nav ul li:nth-child(2)").on("click", function(){

		$("html, body").animate({
			scrollTop: $(".about-us").offset().top - 25
		}, 350);

	});

	//team

	$(".main-nav ul li:nth-child(3)").on("click", function(){

		$("html, body").animate({
			scrollTop: $(".our-team").offset().top - 40
		}, 400);

	});

	//classes

	$(".main-nav ul li:nth-child(4)").on("click", function(){

		$("html, body").animate({
			scrollTop: $(".classes").offset().top -25
		}, 450);

	});

	//contacts

	$(".main-nav ul li:nth-child(5)").on("click", function(){

		$("html, body").animate({
			scrollTop: $(".contacts").offset().top -55
		}, 500);

	});

})




