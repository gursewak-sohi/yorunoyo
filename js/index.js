$(document).ready(function() {
 // Swiper Hero
 if($("#hero-swiper").length > 0) {
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
  }
 
  if($(".hero-text-animations").length > 0) {
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
  }


 // Lightbox Video
 lightGallery(document.getElementById("about-video"), {
     plugins: [lgVideo],
     autoplayVideoOnSlide: true,
     zoom: true
 });


     // Play video with Button
     $("#playButton").on("click ", () => {
         $("#about-video> a > img").trigger("click");
     });
     

      // Toggle Slide 
     var hash = window.location.hash;  
     if (hash) {
        if (hash == "#hamavrally") {
            showSecondSlide();
         }
         else {
            showFirstSlide();
         }
     }


     swiper.on('slideChange', function() { 
        new WOW().init();
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
     function showFirstSlide () {
        $("#slide-one-view").show();
        $("#slide-two-view").hide();
        $(".first-slide-content").addClass("active");
        $(".second-slide-content").removeClass("active");
       
     }
     function showSecondSlide () {
        $("#slide-one-view").hide();
        $("#slide-two-view").show();
        $(".first-slide-content").removeClass("active");
        $(".second-slide-content").addClass("active");    
     }
 });