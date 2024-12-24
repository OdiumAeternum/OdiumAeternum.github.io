$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    
    $('#back-to-top').click(function() {
        $(this).addClass('rotate');
        $('body,html').animate({scrollTop:0}, 700);
        
        setTimeout(() => {
            $(this).removeClass('rotate');
        }, 2000);
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    keyboard: true,
});
