$(document).ready(function(){
   $(".header").height($(window).height()) 
    $("img.shadoo").hover(function(){
        $(this).animate({
            "bottom":"5px",
            "right":"5px"
        },200)
    },function(){
              $(this).animate({
            "bottom":"0",
            "right":"0"
        },200)
    })
    
    // carsoul show 
    $(".control li a").click(function(){
                $(".holder-carsoul").removeClass("active").fadeOut(600);

        $("."+$(this).data('scroll') ).addClass("active");
        
        $(this).parent().find("li").animate({
            "opacity":"0.6"
                
            },300,function(){
            $(this).parent().animate({
            "opacity":"1"
            
            
            },200)
            
                
                 })  
  
        console.log("ahmed");
        
  

})
});