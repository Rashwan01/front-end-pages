
$(function(){
    
   $(".search").height($(window).innerHeight() ) ;
    $(".lastOne .Con a").on("click",function(){
        $("#" + $(this).data("scroll") ).slideToggle();
        $(this).find("svg").addClass("fa-angle-down").toggleClass("fa-angle-right");
        $(this).find("h5").toggleClass("color");
         $(this).parent().find(".TEXT").toggleClass("color")
        
        
        
    })
})