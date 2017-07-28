function onload () {
	bind(list,'touchstart',start);
	bind(list,'touchmove',move);
	bind(list,'touchend',end);
	
	function start(ev){
//		clearInterval(timer);
		ev = ev.changedTouches[0];
		list.style.transition = 'none'
		startx = ev.pageX;
		x = now;
	}
	function move(ev){
		ev = ev.changedTouches[0];
		var disx = ev.pageX - startx;
		now = x + disx;
		list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
	}
	function end(){
		
		num = -Math.round(now/w);
		now = -num*w;
		list.style.transition = '.5s';
		list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
		if(num>=lis.length){
			num = lis.length-1;
		}
		if(num<=0){
			num=0;
		}
	}
}