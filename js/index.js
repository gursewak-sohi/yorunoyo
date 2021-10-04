 // Swiper Hero
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



// Swiper Top Text
 var swiper2 = new Swiper(".hero-text-animations", {
    direction: "vertical",
    slidesPerView: 1,
    loop: true,
    simulateTouch:false,
    autoplay: {
        delay: 2000,
      },
  });


 // Lightbox Video
 lightGallery(document.getElementById("about-video"), {
     plugins: [lgVideo],
     autoplayVideoOnSlide: true,
     zoom: true
 });




 $(document).ready(function() {

     // Play video with Button
     $("#playButton").on("click ", () => {
         $("#about-video> a > img").trigger("click");
     });

     // Toggle Slide
     $("#slide-two-view").hide();
     swiper.on('slideChange', function() {
        new WOW().init();
         if ($("#slide-one").hasClass("swiper-slide-active")) {
             $("#slide-one-view").toggle();
             $("#slide-two-view").toggle();
             $(".first-slide-content").removeClass("active");
             $(".second-slide-content").addClass("active");
         } else {
             $("#slide-one-view").toggle();
             $("#slide-two-view").toggle();
             $(".first-slide-content").addClass("active");
             $(".second-slide-content").removeClass("active");
         }
     });


 });