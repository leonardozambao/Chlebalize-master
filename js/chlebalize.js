$(document).ready(function(){
    //menu sandwich
    $('.menu_button').on('click', function(){
        $('header').toggleClass('menu_opened');
        $(this).toggleClass('menu_opened');
        return false;
    });

});

function returnTop(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
}

function scrollToElement(e, speed, container, margin) {
	var speed = speed != '' ? speed : 3000;
	var container = container != '' ? container : 'html,body';
	var $target = $(e);
	margin = margin != '' ? margin : 0;
	$(container).animate(
		{
			scrollTop: $target.offset().top - margin
		}, {
		duration: speed,
		step: function (now, fx) {
			var newOffset = $target.offset().top - margin;
			if (fx.end !== newOffset)
				fx.end = newOffset;
		}
	}
	);
	return false;
}
