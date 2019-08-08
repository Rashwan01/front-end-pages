var link = document.getElementById("link"),
    img = document.getElementById("image"),
     p = document.getElementById("p");

link.onclick = function ()
{
    
  window.scrollTo(0,0);
    
    
    
}
p.onclick = function a()
{
      document.body.scrollTop+=100;
}

setInterval(a,1000);

window.onload = function()
{
    function auto ()
{
    p.click();
    
}
}