
$(function(){
    
   $(".form").height($(window).height()) ;
    $(".vedio-play-icon").on("click",function(){
        $(this).siblings().find("img").fadeOut();
        $(this).fadeOut();
        $(this).siblings().find("iframe").attr("src","https://www.youtube.com/embed/EEfStiExl5U?ecver=1");
        
        
        
    });
     $(".card").click(function(){
        
        $(this).addClass("active").siblings().removeClass("active");
$(".changed").attr("src",$(this).attr("id") );        
    });
})