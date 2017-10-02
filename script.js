$(document).on('ready', function(){
	var my_regexp = /[a-zA-Zа-яА-ЯёЁ]/i;
	
	$(document).on('keydown', function(e){
		var symbol = my_regexp.test(e.key)
		var button = e.key
		console.log(button.length);
		console.log(symbol);
		//console.log(e);
		console.log(e.which);
		if ( symbol && (button.length == 1)) {
			$('.text_place').append('<p class="letter"' + '>' + e.key + '</p>');
			$('.letter').fadeIn(300);
		}
		else {
			return false;
		};
	});
});