$(document).ready(function() {
    //Initiate WOW
    new WOW().init();

    // Go to top JS
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $(".go-to-top").addClass("show");
        } else {
            $(".go-to-top").removeClass("show");
        }
        if (scroll >= 10) {
            $(".navbar-floating").addClass("active");
        } else {
            $(".navbar-floating").removeClass("active");
        }
    });

    // Swiper Hero
    if ($("#hero-swiper").length > 0) {
        var swiper = new Swiper("#hero-swiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            speed: 800,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: '#nextSlide',
                prevEl: '#prevSlide',
            },
            hashNavigation: {
                watchState: true,
            },
        });
        // Toggle Slide 
        var hash = window.location.hash;
        if (hash) {
            if (hash == "#hamavrally") {
                showSecondSlide();
            } else {
                showFirstSlide();
            }
        }

        swiper.on('slideChange', function() {
            new WOW().init();
            window.scrollTo(0, 0);
        });

        swiper.on('hashChange', function() {
            var changedHash = window.location.hash;
            if (changedHash == "#hamavrally") {
                showSecondSlide();
            }
            if (changedHash == "#yorunoyo") {
                showFirstSlide();
            }
        });

        function showFirstSlide() {
            $("#slide-one-view").show();
            $("#slide-two-view").hide();
            $(".first-slide-content").addClass("active");
            $(".second-slide-content").removeClass("active");

        }

        function showSecondSlide() {
            $("#slide-one-view").hide();
            $("#slide-two-view").show();
            $(".first-slide-content").removeClass("active");
            $(".second-slide-content").addClass("active");
        }

    }

    if ($(".hero-text-animations").length > 0) {
        // Swiper Top Text
        var swiper2 = new Swiper(".hero-text-animations", {
            direction: "vertical",
            slidesPerView: 1,
            loop: true,
            simulateTouch: false,
            autoplay: {
                delay: 2000,
            },
        });
    }



    var gallery = document.querySelectorAll('.video-gallery');

    if (gallery.length) {
        for (var i = 0; i < gallery.length; i++) {
            lightGallery(gallery[i], {
                plugins: [lgVideo],
                autoplayVideoOnSlide: true,
                zoom: true
            });
        }
    }
    if ($(".play-video").length > 0) {
        $(".play-video").click(function() {
            $(this).closest(".video-main-block").find(".video-gallery img").trigger("click");
        });

    }


    // parallax 
    if ($(".jarallax").length > 0) {
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2
        });
    }


});