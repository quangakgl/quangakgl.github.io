$(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#btn-to-top').css('display', 'block');
        } else {
            $('#btn-to-top').css('display', 'none');
        }
        ;
    });
    $('#btn-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
