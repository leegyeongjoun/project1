$(function()
{
	$(".new_tab1 li:not(.ignore)").click(function () {
		var offObj = $(".new_tab1").find("img");
		var onObj = $(this).find("img");

		$(".new_tab1 li").removeClass("on");

		i=0;
		offObj.each(function(i){
			i=i+1;
			$(this).attr("src", $(this).attr("src").replace("_on.", "_off."));
		});
		onObj.attr("src", onObj.attr("src").replace("_off.", "_on."));
		$(this).addClass("on");

		//var boxVar = $(this).index() + 1;
		//$(".hide").css("display","none");
		//$(".tab_block_"+$boxVar).css("display","block");
		i=0;
		$(".new_tab1 li").each(function(i) { 
			i++;
			$(".tab_block_"+i).css("display","none");
		});

		$(".tab_block_"+($(this).index()+1)).css("display","block");
	});
	
	$(".new_tab1 li:not(.ignore)").css('cursor','pointer');
})