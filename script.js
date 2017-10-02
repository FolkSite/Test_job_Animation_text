$(document).on('ready', function(){
	var my_regexp = /[a-zA-Zа-яА-ЯёЁ]/i;
	
	$(document).on('keydown', function(e){
		var symbol = my_regexp.test(e.key)
		var button = e.key
		if ( symbol && (button.length == 1)) {
			$('.text_place').append('<div class="letter"' + '>' + e.key + '</div>');
			$('.letter').fadeIn(300);
		}
		else {
			return true;
		};
	});
});