var close = document.getElementById("close"),
    mess= document.getElementById("mess"),
    nof= document.getElementById("nof"),
    log = document.getElementById("log");
/* function to show div which contain message */
close.onclick= function()
{
    "use strict";
    nof.style.display="none";
    

}
mess.onclick=function()
{
    nof.style.display="block";
}
/* end fnction */
/* function increase the width of input from type search with perefct transition */
var search = document.getElementById("search");
search.onfocus= function()
{
    search.style.width="300px"
}
search.onblur= function()
{
    search.style.width="150px"
}
/*end function */

/*function show div throught it we can logout from u page */
var imgclick= document.getElementById("logout"),
    display = document.getElementById("display");
imgclick.onclick = function()
{
    display.style.display="block";
}


/*function end*/
/*function */
log.onclick=function()
{
    location.href="file:///C:/Users/hp/Desktop/profile/register/login.html?"
}
