
$(function(){
    
   $(".form").css("minHeight",$(window).height() ) ;


 
    $(".vedio-play-icon").on("click",function(){
        $(this).siblings().find("img").fadeOut();
        $(this).fadeOut();
        $(this).siblings().find("iframe").attr("src","https://www.youtube.com/embed/EEfStiExl5U?ecver=1");
        
        
        
    });
     $(".card").click(function(){
        
        $(this).addClass("active").siblings().removeClass("active");
$(".changed").attr("src",$(this).attr("id") );        
    });
    
    
    //  img go up when scroll down
    $(".overlayImg img").css
    ({
        bottom: -( $(window).height()-$(".overlayImg img").height()-200 )
    });
    $(window).on("scroll",function(){
     
        $(".overlayImg img").animate({
            
            bottom: -( $(window).height()-$(".overlayImg img").height()-200 )+$(window).scrollTop(),
            
        },30)
        
    })
})