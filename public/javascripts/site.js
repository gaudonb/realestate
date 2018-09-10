$(function(){
	$("#sidebar-toggler").click(function(){
		if($("#sidebar").hasClass("sidebar-open")){
			$("#sidebar").removeClass("sidebar-open");
			$("#modular").removeClass("modular-show");
			$("body").removeClass("disable-h-scroll")
		}else{
			$("#sidebar").addClass("sidebar-open");	
			$("#modular").addClass("modular-show");	
			$("body").addClass("disable-h-scroll")
		}	
	});

	$("#signup-butt").hover(function(){
		$("#signup-text").addClass("signup-text-open");
	},function(){
		$("#signup-text").removeClass("signup-text-open");
	});

	$("#signin-butt").hover(function(){
		$("#signin-text").addClass("signin-text-open");
	},function(){
		$("#signin-text").removeClass("signin-text-open");
	});
});

