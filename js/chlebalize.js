var lastScrollTop = 0;
function divSelect(scroll) {
    $('section').each(function () {
        var posDiv = $(this).offset().top;
        var divHeight = $(this).innerHeight();
        var divPosition = posDiv + divHeight;
        var windowHeight = $(window).innerHeight();
        var scrollPosition = scroll;

        if (scrollPosition > posDiv) {
            changeState($(this), 'state-one');
        }
        if (scrollPosition > posDiv - (windowHeight / 2) && scrollPosition < divPosition + (windowHeight / 2)) {
            changeState($(this), 'state-two');
        }
        if (scrollPosition > posDiv - ((windowHeight / 2) + 200) && scrollPosition < divPosition - windowHeight) {
            changeState($(this), 'state-three');
        }
    });

    if (scroll > lastScrollTop) {
        //descendo scroll
        if (scroll > $('header').innerHeight()) {
            $('header').removeClass('show').addClass('no-top');
        } else {
            $('header').addClass('show').removeClass('no-top');
        }
    } else {
        //subindo scroll
        if (scroll > $('header').innerHeight()) {
            $('header').addClass('no-top');
        } else {
            $('header').removeClass('no-top');
        }
        $('header').addClass('show');
    }
    lastScrollTop = scroll;
};
$(window).scroll(function (e) {
    var scroll = $(this).scrollTop();
    divSelect(scroll);
});

function changeState(e, eClass) {
    if ($(e).hasClass(eClass)) {
        return false;
    } else {
        $('section').removeClass(eClass);
        $(e).addClass(eClass);
    }
}


function returnTop(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
}

$(document).ready(function(){
    //menu sandwich
    $('.menu-button').on('click', function(){
        $('header').toggleClass('menu-opened');
        $(this).toggleClass('menu-opened');
        return false;
    });

});

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
