$(function(){
    
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
    $(".card").click(function(){
        
        $(this).addClass("active").siblings().removeClass("active");
$(".changed").attr("src",$(this).attr("id") );        
    });
    
    
    $(".copy").click(function(){
        
     $(".copy").select();
        
    document.execCommand("copy");
        
    });
   
    
})