$(function(){	

	$(".gnb_list").css({left:"-70%"});
    $(".lang_list").css({right:"-70%"})
    
	$(".gnb_btn").click(function(){
		$(".gnb_list").animate({left:0});
	});
    $(".lang_btn").click(function(){
		$(".lang_list").animate({right:0});
	});

	$(".gnb .close").click(function(){
		$(".gnb_list").animate({left:"-70%"});
	});
    $(".gnb .close_lang").click(function(){
		$(".lang_list").animate({right:"-70%"});
	});
    
});