$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    
    $('.back-to-top').click(function() {
        $(this).addClass('back-to-top--rotating');
        $('body,html').animate({scrollTop:0}, 700);
        
        setTimeout(() => {
            $(this).removeClass('back-to-top--rotating');
        }, 2000);
    });
});

var swiper = new Swiper(".design__slider", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".design__slider-button--next",
        prevEl: ".design__slider-button--prev",
    },
    loop: true,
    keyboard: true,
});
