/* way to make function like java script  but in jquery

window.onload=function()
{

};
*/
// first way
/*
$(document).ready(function(){
    
                            
$("P").css("color","#2b59");
    
    });
    */
//another way
/*
$(function(){
    
                            
$("P").css("font-size","150px");
    
    });
    */




//lec 3
//event  
// click
//dblclick
//mouseenter
//mouseleave
//hover has to function 
/*
$(document).ready(function()
{
    $("button").hover(function(){
    $(this).css("color","#eaeaea"); 
    $("P").css("color","#eaeaea");
    },
    function()
    {
     $(this).css("color","#777"); 
        $("P").css("color","#000");
    })
 
    
});
*/
//lec 4 
//hide("fast) mean speed 200ms
//hide("slow) mean speed 600ms
//hide normal 400ms
/*
$(document).ready(function()
{
    $("button").click(function()
 {
        $("p").hide(3000,function()
         {
            $("span").show(2000,function(){
                          
                          $("button").toggle();
            });
        });
        
    });
    
    
});
*/


//lec 5
//fade in(speed,callback function()
//fade out (speed,callback function()
//fade toggle (speed,callback function()
//fade to (speed, opacity ,callback function())
/*
$(document).ready(function()
{$(this).click(function()
{
    $("div").fadeTo(2000,0.454545,function()
   {
        $("span").toggle(2000);
         $("span").css("color","#2b5992")
        
    });
});
                  
                  });
                  */
/*
$(document).ready(function()
{
    $("button").hover(function(){
        $("P").css("color","#2b5992")
    
    },function()
    {
        $("P").css("font-size","35px");
    });
});*/


// lec 5

/*
$(document).ready(function()
{
    $("button").click(function (){
        
        $("p").fadeToggle(3000,function()
             {
            $("span").fadeOut(2000);
        })
   
});

});
*/
//lec 6 
/*
$(document).ready(function()
 {
    $(".open").click(function(){
        $(".box").slideToggle(800,function()
{     
    $(".open").hide("slow");
    });
    });
});
*/

$(document).ready(function()
{
    $("input").hide();
    $("p").hide();
    $("button").hide();
    $("a").hide();   $("small").hide();
    $(".div").animate({width:"27%"},100)
    $(".div").animate({height:"350px"},100,function()
                     {
         $("p").fadeIn(1000,function()
                      {
              $("input").fadeIn(1000,function()
                               {
                   $("button").fadeIn(1000,function()
                                     {
                        $("small").fadeIn(1000,function()
                        {
                             $("a").fadeIn(1000);
                            });
                   });
              });
         });
    }) 
   
    

});
