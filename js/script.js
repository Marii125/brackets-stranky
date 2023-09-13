//vzdy to musi byt zapsano takto

(function($){ 
    $(function()}
        
//    NAVIGACE
        $(".jq--scroll-misto-pro-relax").click(function(){
            $("html, body").animate({scrollTop: $(".jq--misto-pro-relax").offset().top},1500);
        });
    
        $(".jq--scroll-fotky-uvolneni").click(function(){
            $("html, body").animate({scrollTop: $(".jq--fotky-uvolneni").offset().top},1500);
        });
    
        $(".jq--scroll-our-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-reference").offset().top},1500);
        });
    
         $(".jq--scroll-our-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-reference").offset().top},1500);
        });
    
         $(".jq--scroll-krasne-fotky").click(function(){
            $("html, body").animate({scrollTop: $(".jq--krasne-fotky").offset().top},1500);
        });
        
        $(".jq--scroll-kontakt").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top},1500);
        });
    
    
//        TLACITKA
    
         $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--krasne-fotky").offset().top},1500);
        });
    
         $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top},1500);
        });

      });
})(jQuery);
