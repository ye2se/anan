$(function () {
    const MainVisual = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    });


    const MainPackage = new Swiper('.main_package_slide', {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: {
            el: ".bar",
            hide: false,
            draggable: true,
            dragSize: 200,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')

        }
    })
})

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
});
$(function () {

    $('.header .mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.header .hb .gnb').toggleClass('on');
    });
})