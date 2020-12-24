$(function(){
	var windowWidth = $(window)[0].innerWidth;
	if(windowWidth  <= 768){
		$('.nome-usuario h2').click(function(){
		var el = $('.sidebar');
		if(el.is(':visible')){
			el.hide();
			$('.main-content').css('left','0');
		}else{
			el.show();
			$('.main-content').css('left','300px');
		}
	})
	}

	$(window).resize(function(){
		var windowWidth = $(window)[0].innerWidth;
	})
})


$(function(){
		/*remover mensagem de alerta*/
		$('.remove-message').click(function(){
			$(this).css('display','none');
			$('.popup-message').css('display','none');
			$('.icone-alerta p').css('display','none');
			$('.icone-alerta i').css('color','#f7f7f7');
			$('.icone-alerta').css('background-color','#ccc');
			$('.icone-alerta').removeClass('animate__pulse');
			$('.icone-alerta').removeClass('animate');
			$('.icone-alerta').removeClass('animate__infinite');
			$('.popup .hide').css('display','block');

		})

	})