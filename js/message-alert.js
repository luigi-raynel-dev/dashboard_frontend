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