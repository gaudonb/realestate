$(function(){
	$("#sidebar-toggler").click(function(){
		if($("#sidebar").hasClass("sidebar-open")){
			$("#sidebar").removeClass("sidebar-open");
		}else{
			$("#sidebar").addClass("sidebar-open");
		}	
	});

	$("#signup-butt").hover(function(){
		$("#signup-text").addClass("signup-text-open")
	},function(){
		$("#signup-text").removeClass("signup-text-open")
	});

	$("#signin-butt").hover(function(){
		$("#signin-text").addClass("signin-text-open")
	},function(){
		$("#signin-text").removeClass("signin-text-open")
	});
});