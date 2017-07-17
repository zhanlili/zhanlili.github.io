$(function(){
	//二级导航
	$(".nav4").hover(function(){
		$(".subnav4").stop().fadeToggle(); //加.stop()方法停止当前动画，
	})
	$(".nav6").hover(function(){
		$(".subnav6").stop().fadeToggle();
	})
	
	
	//banner自动轮播
	var num = 0;
	$("#banner>img").eq(0).css({"opacity":"1"}); //先让第一张banner大图显示
	var timer = setInterval(changed,4000); //定时器四秒调用一次changed函数
	//banner点击轮播
	$("#banner>ul>li>a").click(function(){
		clearInterval(timer); //清除定时器
		$("#banner>ul>li>a").css("border","none");//去掉全部a节点的边框。
		$(this).css("border","2px solid #ff9d00");//为当前点击的a节点添加边框。
//		console.log($(this).parent().index());//点击的是a节点，如需使用.index()方法得到切换的索引，
        //需要从其父亲节点li获取，因为($this)指向的是a节点，每个li节点里面只有一个a节点，
        //所以语句$(this).index()获得的索引永远是0，应使用$(this).parent().index()，获取0~4索引。
        $("#banner>img").css({"opacity":"0"});//全部banner大图透明度为0，不可见。
		$("#banner>img").eq($(this).parent().index()).css("opacity","1");//当前的banner大图透明度为1，可见。
		$("#banner>img").eq(num).css("transition","0.5s");//给一个过渡属性，使图片之间切换有一个缓冲过渡效果。
		num=$(this).parent().index();  //点击小图片来切换大banner图，点击之后把小图片当前的索引值赋给num，
        //这样接下来的自动轮播就会按照从点击处开始往下轮播，不会从点击停止定时器时的num值开始轮播。
	    timer = setInterval(changed,4000); //重启定时器
	})
	//封装自动轮播函数
	
	function changed(){
		num++;
		num = num%5; //变量模5
		$("#banner>ul a").css({"border":"none"});
		$("#banner>ul a").eq(num).css({"border":"2px solid #ff9d00"});
		$("#banner>img").css({"opacity":"0"});
		$("#banner>img").eq(num).css("opacity","1");
		$("#banner>img").eq(num).css("transition","1s");
	}
	
	
	//点击搜索框单选按钮
	$(".search i").click(function(){
		$(".search i").css("background-position","-60px -110px");
		$(this).css("background-position","-60px -140px")
	})
	
	
	//侧边栏轮播
	var num1 = 0;
	var timer1 = setInterval(slided,3000);
	function slided(){
		num1++;
		num1 = num1%5; //变量模5
		$(".wrap").css("left",""+num1*-260+"px");//每次向左移动一个260px
		$(".aside1 .middle li").css("background-color","#fff");//背景色全部重置
		$(".aside1 .middle li").eq(num1).css("background-color","#ff9d00");//改变当前背景色
		$(".wrap").css("transition","0.5s");
	}
	
	
	//侧边栏点播
	$(".aside1 .middle li").click(function(){
		$(".wrap").css("left",""+$(this).index()*-260+"px");
		$(".aside1 .middle li").css("background-color","#fff")
		$(this).css("background-color","#ff9d00")
	})
	
	
	
	//鼠标悬浮文本框上下移动
	$("#right .discript").mouseover(function(){
		$(this).stop().animate({
			"top":"75px"
		})
		$(this).children(0).css("color","#ff9d00")
	}).mouseout(function(){
		$(this).stop().animate({
			"top":"135px"
		})
		$(this).children(0).css("color","#000")
	})
})
