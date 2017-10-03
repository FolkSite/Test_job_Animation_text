$(document).on('ready', function(){
	//Создаем регулярное выражение для дальнейшей проверки вводимых нами символов.
	var my_regexp = /[a-zA-Zа-яА-ЯёЁ]/i;

	$(document).on('keydown', function(e){
		//Создаем переменную значением которой будет true или false,
		//Буква = true. Системные клавиши, цифры и символы = false.
		var symbol = my_regexp.test(e.key);
		//Переменная проверяет значение нажатой клавиши для игнорирования 
		//системных клавиш. Длина букв = 1, длина клавишь > 1.
		var button = e.key;
		//При выполнении обоих условий выводим блок с значением введенной буквы.
		if ( symbol && (button.length == 1)) {
		
			$('.text_place').append('<div class="letter"' + '>' + e.key + '</div>');
			$('.letter').fadeIn(3000);
			return true;
		
		} else {
		//Поведение системных клавиш сохранено
			return true;
		
		};
	});
});