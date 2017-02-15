var main = $('#main'),
    aLi = main.find('li'),
    aImg = main.find('img'),
    windowWidth = main.width(),
    onOff = true;

    // aLi.each(function(){
    // 	$(this).addClass('large')
    // })
    

// 计算每一个li的宽度
aLi.each(function(i,item){
	$(item).css({
		'width': 1/7 *100 +'%'
	})
})

// mousemove函数
function mouseIn(ev){
	var maxLength = aImg.eq(0).width()*5;
	var mouseX = ev.pageX;
	aImg.each(function(){			
		var aLiWidthCenter = $(this).offset().left + $(this).width()/2 ; 
		var distance = Math.abs(mouseX - aLiWidthCenter);
		if( distance >  maxLength){
			distance = maxLength;
		}
		var lengthY = distance / maxLength * 260; 			
		$(this).css({
			'webkitTransform':'translateY('+lengthY+'px)'
		})
	})
}

main.on('mousemove',function(ev){
	mouseIn(ev);
})

// mouseout函数
function mouseOut(ev){

	aImg.eq(0).css({
		'webkitTransform':'translateY(61.95%)'
	})
	aImg.eq(1).css({
		'webkitTransform':'translateY(47.8%)'
	})
	aImg.eq(2).css({
		'webkitTransform':'translateY(67.69%)'
	})
	aImg.eq(3).css({
		'webkitTransform':'translateY(47.8%)'
	})
	aImg.eq(4).css({
		'webkitTransform':'translateY(27.92%)'
	})
	aImg.eq(5).css({
		'webkitTransform':'translateY(50.67%)'
	})
	aImg.eq(6).css({
		'webkitTransform':'translateY(61.95%)'
	})
}

main.on('mouseout',function(ev){
    mouseOut(ev);
})

main.on('click','li',function(){

	// 点击放大
	if(onOff)
	{
		$(this).parent().attr('id','abc')
		main.off('mousemove');
		main.off('mouseout');


		aLi.each(function(){
			$(this).css({
				'webkitTransition':'1s'
			})
			$(this).removeClass('larger').addClass('large');
		})

		$(this).addClass('larger');

		// 放大图片居中
		var dis = main.width()/2 - ($(this).position().left+$(this).width()/2);

		 main.css({
		 	'webkitTransform':'translateX('+dis*3+'px) scale(3)'
		 })

		onOff = false;	
	}
	else
	{     

		//再次点击还原
		main.css({
		   'webkitTransform':'scale(1)'
		}).removeAttr('id','abc')
		
		aLi.each(function(){

			$(this).removeClass('larger').removeClass('large');
		})

		main.on('mousemove',function(ev){
			mouseIn(ev);
		})
		main.on('mouseout',function(ev){
	   	 mouseOut(ev);
		})

		onOff = true;	
	}

})