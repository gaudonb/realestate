$(function(){
	$("#sidebar-toggler").click(function(){
		$("#sidebar").toggleClass("sidebar-open");
		$("#modular").toggleClass("modular-show");
		$("body").toggleClass("disable-h-scroll");
	});

	$("#close-login").click(function(){
		$("#login-container").toggleClass("login-container-open");
		$("#modular").toggleClass("modular-show");
	});

	$("#signup-butt")
	.hover(function(){
		$("#signup-text").addClass("session-text-open");
	},function(){
		$("#signup-text").removeClass("session-text-open");
	});


	$("#signin-butt")
	.hover(function(){
		$("#signin-text").addClass("session-text-open");
	},function(){
		$("#signin-text").removeClass("session-text-open");
	}).click(function(){
		$("#login-container").toggleClass("login-container-open");
		$("#modular").toggleClass("modular-show");
	});

	$("#login-form").submit(function(){
		return false;
	});
});

