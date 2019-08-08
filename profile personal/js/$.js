/* global ,alert ,console,$*/  
$(document).ready(function () {

        //اول متضغط علي comment
        $("body").on("click", ".commenter", function () {
            var x = 0;
            "use strict";
                //دا تكويد لكل كومنمت شخص هيعلق هيتعمله ف الاتش تي ام ال نسخه من دي عباره عن بوتستراب جواه شويه كلاسس
               var  container = $("<div class=other-comment> <div class=row><div class=col-lg-2><div class=imgOther><img src='img/ap.jpg'></div></div><div class=col-lg-10> <div class=commentOther><span></span> </div></div></div></div></div>");
            // commentSectionبقوله حط الكود الي فات جواه السكشن الي واخد كلاس
            $(".commentSection").prepend(container)
            //transfer input value to other comment
            //publish to commentل ازم يكون الكومنت يعدي التلت احرف عشان يعمل
            if ($("#UinputComment").val().length > 3) {
                $(".commentOther span").eq(x + 0).text($("#UinputComment").val());
            }
            //اقل من تلاته متكتب الكمونتinputلو عدد الحروف الي هتتكتب ف ال
            else {
                $(".other-comment").eq(x + 0).css("display", "none");
            }

            // to make input empty after publish the comment
            $("input").val("")
            x++

        });
        $("#button").on("click", function () {
            var x = 0, 
                z = 0;
            $("<!--start post component --> <div class=conOfPost ds-none> <!-- save post div whoc shown --> <span style=' color: #777;margin-bottom: 10px;display: block; font-weight: bold'> posts</span> <div class='savePost'> <div class='save-post'> <h5> <i class='fas fa-bookmark colorchange'></i>save post <p class='colorchange'>add this to your save item</p> </h5> </div> <div class='save-post'> <h5> <i class='far fa-window-close colorchange'></i>hide post <p class='colorchange'>add this to your save item</p> </h5> </div> <div class='save-post'> <h5> <i class='far fa-clock colorchange'></i>snooze ahmed for 30 days <p class='colorchange'>temporarily stop seeing post</p> </h5> </div> <div class='save-post'> <h5> <i class='fas fa-star colorchange'></i>stop seeing ahmed first <p class='colorchange'>see his post in usual order</p> </h5> </div> </div> <!-- end save post --> <div class='post bg-white'> <div class='container'> <div class='row'> <div class='col-lg-2'> <img class='imgme' src='img/ap.jpg'> </div> <div class='col-lg-10'> <div class='upost'> <a id='save-post'> <span><i class='fas fa-ellipsis-h fa-lg'></i></span> </a> <h6>ahmed mostafa</h6> <p class='pText'>.</p> </div> </div> </div> </div> <div class='imgSec'> <img class='imgPost' src='img/ay.jpg'> </div> <!-- container of post --> <!-- end container of post --> <!-- start section related to like comment share --> <div class='interactive'> <section> <div id='like' class='liker'> <i class='fas fa-thumbs-up'></i> like </div> <div class='commenter'> <i class='far fa-comment-alt'></i> comment </div> <div class='share'> <i class='fas fa-share'></i> share </div> </section> <!-- start section comment scope--> <!-- section which contains comment of Other --> <section class='commentSection'> <!-- start div has class comment in jquery --> <!--div class row--> <!-- div class col-lg-2 --> <!-- div class Other img--> <!-- end scope of col-lg-2 --> <!-- div class col-lg-10 --> <!-- start class commentOther--> <!-- end scope col-lg-10 --> <!-- end div scope --> <!-- end scope of ROW--> <!-- end scope of other comment --> <!-- your comment scope --> <div class='row'> <!-- your comment whose shown --> <div class='col-lg-2'> <img src='img/ap.jpg'> </div> <div class='col-lg-10'> <input id='UinputComment' type='text' placeholder=' write a comment'> <ul class='list-unstyled'> <li> <i class='fas fa-camera-retro'></i></li> <li> <i class='far fa-sticky-note fa-xs'></i></li> <li> <i class='far fa-meh fa-xs'></i></li> </ul> </div> </div> <!-- your comment scope --> </section> <!-- end section comment scope--> </div> <!-- end div related to like comment share--> </div> <!--end post component --> </div>").insertAfter(".tweet");

            $(".pText").eq(x).text($(".inputPost").val());
            $(".inputPost").val("");

            z++
            x++
           

          




        });
        /* when click in fontawesome icon click in input file to choose file */
        $(".upload").click(function () {

            $("#i_file").click();

        });
        /* show and hide save post div */
          $("body").on("click", "#save-post", function () {
                $(".savePost").toggle();
            })
        /*end show and hide save post div */
    //img view
     $(".full-img").height( $(window).innerHeight() );
    
    $("img").on("click",function(){

        
     $(".full-img >img").attr("src",$(this).attr("src") ).css({
            marginLeft:(-0.5 * $(this).innerWidth() ),
            marginTop:(-0.5 * $(this).innerHeight() )
          
        }).parent(".full-img").show();
        console.log( $(this).height() + " " +$(this).width())
      
    })
    $("img").on("dblclick",function(){
        
        
      $(this).parent(".full-img").toggle()
    })


    });


//    .commentOther span دا الديق الي جواه تقسيمه الجريت بتاعت البوتستراب الي جواه الكلام
//    #UinputComment الانبت الي بتعلق فيه

//$(document).ready(function(){
//for( var x = 0 ; x < 5 ; x =x + 1)
//    {
//            $(".post").prependTo(".conOfPost");
//     
//    }
//
//
//    
//});