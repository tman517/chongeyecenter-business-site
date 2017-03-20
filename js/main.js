

$(document).ready(function(){
	console.log("ready");
	initHeader();
	initNav();
});

function initHeader(){
	$(window).bind("scroll", function(){
		var windowScrollTop = $(window).scrollTop();

		if(windowScrollTop > 50){
			$("header").addClass("sticky");
		}
		else {
			$("header").removeClass("sticky");
		}
	});
}

function initNav(){
	// show / hide nav
	$(".menuBtn").bind("mouseover", function(){
		$("nav").addClass("show");
	});

	$("nav").bind("mouseleave", function(){
		$("nav").removeClass("show");
	});

	// jump to
	$(".navOption").bind("click", function(){
		var target = $(this).data("nav");
		var targetScrollTop = $(target).offset().top - 40;

		$('html, body').animate({scrollTop: targetScrollTop}, 1000);
	});
}