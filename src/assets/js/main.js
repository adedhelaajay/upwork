AOS.init({
    duration: 1000
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("header-fixd");
    } else {
        $("header").removeClass("header-fixd");
    }
});

const myTimeout = setTimeout(myGreeting, 400);




function myGreeting() {
    $('#industryCarousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        // autoWidth: true,
        dots: false,
        autoHeight: true,
        navText: ["<i class=bi-arrow-left-circle></i>", "<i class=bi-arrow-right-circle></i>"],
        responsive: {
            0: {
                items: 2
            },
            800: {
                items: 4
            },
            1600: {
                items: 5
            },
            1366: {
                items: 4
            }
        }
    });
    $('#OurMeetCarousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        // autoWidth: true,
        dots: false,
        autoHeight: true,
        navText: ["<i class=bi-arrow-left-circle></i>", "<i class=bi-arrow-right-circle></i>"],
        margin: 5,
        responsive: {
            0: {
                items: 2
            },
            800: {
                items: 3
            },
            1600: {
                items: 3
            },
            1366: {
                items: 3
            }
        }

    });

    $('#testimonialCarousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        // slideSpeed: 1000,
        responsiveClass: true,
        nav: true,
        // autoWidth: true,
        dots: false,
        autoHeight: true,
        navText: ["<i class=bi-arrow-left-circle></i>", "<i class=bi-arrow-right-circle></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    if ($(window).width() <= 767) {
        $('#dummyCarousel').owlCarousel({
            loop: false,
            autoPlay: true,
            // slideSpeed: 1000,
            responsiveClass: true,
            nav: true,
            // autoWidth: true,
            dots: false,
            autoHeight: true,
            navText: ["<i class=bi-arrow-left-circle></i>", "<i class=bi-arrow-right-circle></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        return;
    }


}


