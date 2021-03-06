$(document).ready(function(){
    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav.next')]
    });

    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 3000);
    })
});