

$(document).ready(function(){
	console.log("ready");
	initHeader();
	initNav();
});

function initHeader(){
	$(window).bind("scroll", function(){
		resizeHeader();
	});

	$(window).bind("resize", function(){
		resizeHeader();
	});

	resizeHeader();
}

function resizeHeader(){
	var windowScrollTop = $(window).scrollTop();
	var availWidth = $(window).width();

	if(availWidth < 900){
		$("header").addClass("sticky");
		$(".banner").addClass("sticky");
	}
	else{
		if(windowScrollTop > 50){
			$("header").addClass("sticky");
		}
		else {
			$("header").removeClass("sticky");
		}

		$(".banner").removeClass("sticky");
	}
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

		$('html, body').stop(true, false).animate({scrollTop: targetScrollTop}, 1000);
	});
}