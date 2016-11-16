var whenCtr=require('co-example')

module.exports={
	bind:function(func){
		document.body.addEventListener('keydown',function(event){
			whenCtr.judge(event.keyCode==13,function(){
				func && func(event)
			})			
		})
	}
}