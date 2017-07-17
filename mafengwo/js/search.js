var ipt = document.getElementById("ipt");
var submited = document.getElementById("submited");
	ipt.onkeyup = function(){
		var oScri = document.createElement('script');
		oScri.id = 'oId';
		oScri.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ipt.value+'&cb=fn';
		document.body.appendChild(oScri);
	}

function fn(data){
	var list = document.getElementById("list");
	var oScript = document.getElementById('oId');
	var arr = data.s;
	list.innerHTML = '';
	for(var i=0;i<arr.length;i++){
		list.style.display = "block";
		list.innerHTML += '<dd><a href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+arr[i]+'">'+arr[i]+'</a></dd>';
		submited.href = "https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd="+arr[0]+"";//默认搜索第一条字样
	}
	//https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd=
	oScript.remove();
	ipt.onblur = function(ev){
//					var e = ev||window.event; //兼容获取事件对象,ev.type兼容IE
//					if(e.stopPropagation){
//						e.stopPropagation();
//					}else{
//						e.cancelBubble = true;
//					}
        setTimeout(function(){
        	list.style.display = "none";//列表延迟半秒消失
        },500)
		this.value = "";
	}
}
			
			
