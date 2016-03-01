;(function(global){
	var left=0;
	var iSpeed=0;
	
	var timer=null;
	global.startMove=function(obj,iTarget){
		clearInterval(timer);
		timer=setInterval(function(){
			iSpeed+=(iTarget-obj.offsetLeft)/5;
			iSpeed*=0.7;
			
			left+=iSpeed;
			obj.style.left=left+'px';
			
			if(Math.round(iSpeed)==0 && Math.round(left)==iTarget){
				clearInterval(timer);	
			}
		},30);
	}
})(window);