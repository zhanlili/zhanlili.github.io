
    
$(function  () {
//	轮播图对应
// 初始化轮播
				
	
	
	
	$(".yifu .tap-tap li").mousemove(function  () {
		$(".yifu .tap-tap li").eq(0).css({"background-color":"#E5E5E5"});
		$(".yifu .tap-tap li").css("background-color","#E5E5E5");
		$(this).css("background-color","#a1508b");
		$(".yifu .tap-list li").removeClass("show");
		$(".yifu .tap-list li").eq($(this).index(".yifu .tap-tap li")).addClass("show");
		
	})
	$(".yifu .tap-tap li").mouseout(function  () {
		$(".yifu .tap-list li").removeClass("show");
		$(".yifu .tap-list li").eq(0).addClass("show");
		$(".yifu .tap-tap li").css("background-color","#E5E5E5");
		$(".yifu .tap-tap li").eq(0).css("background-color","#a1508b")
	})
	
	    
$(function  () {
	$(".meirong .tap-list li").mousemove(function  () {
		$(".meirong .tap-list li").eq(0).css({"background-color":"#E5E5E5"});
		$(".meirong .tap-list li").css("background-color","#E5E5E5");
		$(this).css("background-color","#a1508b");
		$(".meirong .tap-tap li").removeClass("show");
		$(".meirong .tap-tap li").eq($(this).index(".meirong .tap-list li")).addClass("show");
		
	})
	$(".meirong .tap-list li").mouseout(function  () {
		$(".meirong .tap-tap li").removeClass("show");
		$(".meirong .tap-tap li").eq(0).addClass("show");
		$(".meirong .tap-list li").css("background-color","#E5E5E5");
		$(".meirong .tap-list li").eq(0).css("background-color","#a1508b")
	})
})
	var a=1;
	//奢华
	$(".sh-lunbo ul li").mousemove(function  () {
		$(".sh-lunbo ul li").delay(600,"linear").css({'width': '251px','height': '220px','top':'0px','z-index': '1'-a,'transition': '1s'});
		$(this).delay(600,"linear").css({'width': '314px','height': '323px','top':'-30px','z-index': '1'+a,'transition': '1s'})
	});
	$(".sh-lunbo ul li").mouseout(function  () {
		$(".sh-lunbo ul li").delay(600,"linear").css({'width': '251px','height': '220px','top':'0px','z-index': '1'-a,'transition': '1s'});
		$(".sh-lunbo ul li").eq(1).delay(600,"linear").css({'width': '314px','height': '323px','top':'-30px','z-index': '1'+a,'transition': '1s'})
	})
	
	var istop = true
    $(window).scroll(function() {

        if (istop) {
            var top = $(window).scrollTop()
            console.log(top)
            var index = 0
            //利用每次循环作比较  用一个变量来接收当前的下标值	
            $(".dd").each(function(ind, obj) {
                if (top >= $(obj).offset().top + 750) {
                    index = ind
                    console.log($(obj).offset().top)
                     $("#div1").addClass("show")
                };
                if (top <= $(obj).offset().top + 700) {
                    index = ind
                    console.log($(obj).offset().top)
                     $("#div1").removeClass("show")
                }
               
            })
            
           
        }
    })
	
})