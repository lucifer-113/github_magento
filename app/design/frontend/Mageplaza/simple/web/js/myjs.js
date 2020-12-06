require(['jquery', 'owlcarousel'],function($){
   
    $(".owl-theme").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1500,  
      autoplayHoverPause:true
    });
    
    $(".unslide-content").owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        autoplaySpeed:1000,
        smartSpeed:1500,  
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:4
            }
        }
     });
     
});
