/* global ,$ ,alert ,console */
$(document).ready(function () {
    
    // nice scroll
    $("html").niceScroll({
        cursorcolor: "#ec1c23",
        cursorwidth: "5px"
    });
    // make slider equal  window height sub (-) navbar and upper nav ^-^
    var sliderWidth = $(window).innerHeight() - ($(".upper-nav").innerHeight() + $(".navbar").innerHeight())
    $(".slider, .carousel-item").height(sliderWidth)

    // show image
    $(".work ul li").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
      
        if ($(this).data("scroll") == "all") {
          $(".work img").parent().css({
                opacity: 1

            })
        } else {
            $(".work .row .col-md").css({
                opacity: "0.6"
            })
           $("." +  $(this).data("scroll") ).parent().css({
                opacity: "1"

            })
        }
        
        
    })
    // GO UP

        setInterval(function(){
            // if move scroll to down 10pexil   show button else hide it
 if($(window).scrollTop()>10 )
     
     {  $(".Go").fadeIn(500);
         
     }
    else{
         $(".Go").fadeOut(500);
    }
    /* console.log( $(window).innerHeight())
    console.log( $(window).scrollTop())*/
    },100)
    // on click page will be GO Up With nice animated
    $(".Go").click(function(){
        
        $("html").animate({
            scrollTop:0
        },1000)
        
    })
    // responsive Go
    
    $(".Go").css( "top",$(window).innerHeight()-70 + "px" )
    
    $ (".work ul li").click(function(){
        $(".imgSec img").parent().fadeOut(1)
        $("." + $(this).data("scroll") ).parent().fadeIn(100)
        
        
    })
   
    
    })
   
