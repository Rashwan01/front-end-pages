var search = document.getElementById("search");
search.onfocus= function()
{
    search.style.width="300px";
}

search.onblur= function()
{
    search.style.width="150px";
}


/* message coloe and open */
var close = document.getElementById("close"),
    mess= document.getElementById("mess"),
    nof= document.getElementById("nof");
close.onclick= function()
{
    "use strict";
    nof.style.display="none";
    console.log("a7a");


}
mess.onclick=function()
{
    nof.style.display="block";
}

/* end here */

/*function show div throught it we can logout from u page */

var imgclick= document.getElementById("logout"),
    display = document.getElementById("display");
imgclick.onclick = function()
{
    display.classList.toggle(("display"));
}

/*function end*/




/*functio to transfer href to login the we site */
 log = document.getElementById("log");
log.onclick=function()
{
    location.href="file:///C:/Users/hp/Desktop/profile/register/login.html?"
}
/* unction end */

var like = document.getElementById("like");
var liked = document.getElementById("liked");
var likedd= document.getElementById("likedd");
var likeddd = document.getElementById("likeddd");
var l = document.getElementById("l");
var love = document.getElementById("love");
var li = document.getElementById("li");
var lik = document.getElementById("lik");
var likee = document.getElementById("likee");
like.onclick=function()
{
    like.classList.toggle("c-blue");
}

liked.onclick=function()
{
    liked.classList.toggle("c-blue");
}

likedd.onclick=function()
{
    likedd.classList.toggle("c-blue");
}

likeddd.onclick=function()
{
    likeddd.classList.toggle("c-blue");
}
li.onclick=function()
{
    li.classList.toggle("c-blue");
}
l.onclick=function()
{
    l.classList.toggle("c-blue");
}
lik.onclick=function()
{
    lik.classList.toggle("c-blue");
    

}
love.onclick=function()
{
    love.classList.toggle("c-blue");
}
likee.onclick=function()
{
    likee.classList.toggle("c-blue");
}


/*function to hide and appear save post */
    var save =document.getElementById("save-post"),
        post = document.getElementsByClassName("savePost");
save.onclick=function()
{
    post[0].classList.toggle("display")
    
}
/*end*/


