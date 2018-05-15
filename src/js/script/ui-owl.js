(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3500,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
}());