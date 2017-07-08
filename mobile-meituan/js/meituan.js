window.onload=function(){
	//猜你喜欢部分
	
	var dealdata=[
		{
			img:"img/1.jpg",
			title:"酸菜鱼",
			youhui:"招牌饮料免费提供wifi",
			ourprice:"9.9",
			otherprice:"27",
			sale:"11822"
		},
			{
			img:"img/2.jpg",
			title:"糕点",
			youhui:"买二送一",
			ourprice:"6.9",
			otherprice:"18",
			sale:"1752"
		},
		{
			img:"img/3.jpg",
			title:"粒上皇",
			youhui:"我也不知道有啥优惠",
			ourprice:"免费",
			otherprice:"想多了",
			sale:"99999"
		},
		{
			img:"img/4.jpg",
			title:"色香味面",
			youhui:"送你颗大白菜",
			ourprice:"8",
			otherprice:"14",
			sale:"999"
		},
		{
			img:"img/6.jpg",
			title:"啥面",
			youhui:"给你看看",
			ourprice:"不让吃",
			otherprice:"闻闻",
			sale:"66666"
		},
		{
			img:"img/5.jpg",
			title:"披萨",
			youhui:"买一块撕一半",
			ourprice:"24.6",
			otherprice:"48",
			sale:"42356"
		}
	]
	
	var dealdatadiv=document.querySelector(".dealdata");
	var num=dealdata.length;
	for(var i=0;i<num;i++){
		dealdatadiv.innerHTML+="<li>"+
		    			"<img src="+dealdata[i].img+" />"+
		    			"<div class='info'>"+
		    			"<span>"+dealdata[i].title+"</span><br />"+
		    				"<span>"+dealdata[i].youhui+"</span>"+
		    				"<div class='price'><span>"+dealdata[i].ourprice+"</span>元 门市价：<span>"+dealdata[i].otherprice+"</span>元 &nbsp;已售<span>"+dealdata[i].sale+"</span></div>"+
		    			"</div>"+
		    			
		    		"</li>";
	}
	var startX = null;
	var endX = null
	var ww = window.innerWidth;
	var num = 0;//判断是第几个小圆点span对应的显示
	var divcover=document.querySelector(".cover");
	var mynav =document.querySelector(".mynav");
	mynav.innerHTML += mynav.innerHTML;
	console.log(divcover)
	divcover.addEventListener("touchstart",start);
	divcover.addEventListener("touchend",end);
	function start(ev){
		console.log(1)
		ev =ev.changedTouches[0];
		startX = ev.pageX;
	}
	var dianspan = document.querySelectorAll(".dian>span");
	function end(ev){
		ev =ev.changedTouches[0];
		endX = ev.pageX;
		dianspan[num].className = "";
		if(endX-startX>ww/4&&num==1){
			mynav.style.transform ="translate("+0+"px)";
			num=0;
		}else if(startX-endX>ww/4&&num==0){
			mynav.style.transform ="translate("+(-ww)+"px)";
			num=1;
		}
		dianspan[num].className = "choose";
		
	}
	var step =document.querySelector(".step");
	var spanlist=step.querySelectorAll("span");
	var registerbutton =document.querySelector("#registerbutton");
	var main =document.querySelector("#main");
	var register =document.querySelector("#register");
	var yanzbtn = document.querySelector("#yanzbtn");
	registerbutton.addEventListener("touchstart",fn);
	function fn(){
		registerbutton.className = "choose";
		setTimeout(function(){
			main.className ="hidden";
			register.className = "show";
		},30)
	}
	var phnumber=document.querySelector("#phnumber");
	var phyanz=document.querySelector("#phyanz");
	
	var xieyi=document.querySelector("#xieyi");
	var queren=document.querySelector("#queren");
	var checkBox =document.querySelector("input[type='checkbox']");
	var psd =document.querySelector("input[type='password']");
	var finish =document.querySelector("#finish");
	checkBox.onclick =function(){
		numisok();
	}
	function numisok(){
		var num =phnumber.value;
		if(/^1[34578]\d{9}$/.test(num)&&checkBox.checked){
			onoff =true;
			yanzbtn.className = "choose";
		}else{
			onoff =false;
			yanzbtn.className = "";
			alert("请输入正确的手机号码！！或是否勾选同意协议");
		}
	}
	var onoff =false;
	phnumber.onblur =function(){
		numisok();
	}
	yanzbtn.addEventListener("touchstart",fn1)
	function fn1(){
		if(onoff){
			phnumber.className="hidden";
			xieyi.className="hidden";
			yanzbtn.className="hidden";
			phyanz.className="show";
			queren.className="show";
			clear();
			spanlist[1].className="currentstep";
		}
	}
	var onoff2 =false;
	phyanz.onblur =function(){
		var num = phyanz.value;
		if(/^\d{6}$/.test(num)){
			onoff2 = true ;
			queren.className ="choose"
		}else{
			onoff2 = false ;
			queren.className =""
			alert("验证码是6位数字！！！")
		}
	}
    queren.addEventListener("touchstart",fn2)
     function fn2(){
    	if(onoff2){
    		queren.className = "hidden";
    		phyanz.className = "hidden";
    		psd.className = "show";
    		finish.className="show";
    		clear();
			spanlist[2].className="currentstep";
    	}
    }
    var onoff3=false;
	psd.onblur =function(){
		var num = psd.value;
		if(num.length>+6){
			onoff3 = true ;
			finish.className ="choose"
		}else{
			onoff3 = false ;
			finish.className =""
			alert("密码得6位以上！！！")
		}
	}
	finish.addEventListener("touchstart",fn3)
	 function fn3(){
		if(onoff3){
			main.className ="show";
			register.className = "hidden";
			psd.className = "hidden";
    		finish.className="hidden";
    		phnumber.className="show";
			xieyi.className="show";
			yanzbtn.className="show";
		}
			
	}
	function clear(){
		for(var i=0;i<spanlist.length;i++){
			spanlist[i].className="";
		}
	}
}
