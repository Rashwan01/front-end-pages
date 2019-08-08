/* global $ , console, alert */
$(function () {
    //trigger niceScroll
    "use strict";

    $("html").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: "3px"
    });

    // make header with background the height of window */
    $(".header").height($(window).height());
    // scroll to feature section 
    $(" .fa-chevron-down").click(function () {
        $("html").animate({
            scrollTop: $(".feature").offset().top
        }, 500);
    });

    $(".works").click(function () {
        $("html").animate({
            scrollTop: $(".ourWork").offset().top
        }, 500)
    })
    $(".hire").click(function () {

        $("html").animate({

            scrollTop: $(".ourTeam").offset().top
        })
    })

    /*  on click button  show more will apeat 3 photo */
    $(".show-more").on("click", function () {
        //last 3  img access
        // this already exisit 
        $(".item>img:eq(6), .item>img:eq(7), .item>img:eq(8)").toggleClass("ds-none");
        // will be created
        $(".item>img:eq(6), .item>img:eq(7), .item>img:eq(8)").toggleClass("show");
        // if there is calass ds-none that mean last 3 photo is hidden so change text of the button to show more 
        if ($(".item>img:eq(6), .item>img:eq(7), .item>img:eq(8)").hasClass("ds-none")) {
            $(".show-more").text("show more");

        }
        //if class show is addition to class atrr that mean  photo os apeared and want to cjange text to show less
        if ($(".item>img:eq(6), .item>img:eq(7), .item>img:eq(8)").hasClass("show"))
            $(".show-more").text("show less");

    });

    // slide belong to testimonals
    var leftArrow = $(".fa-angle-left"),
        rightArrow = $('.fa-angle-right');

    function cheackArrow() {

        if ($(".client:first").hasClass("active")) {

            leftArrow.fadeOut(0.2);

        } else {
            leftArrow.fadeIn(0.2);

        }
        if ($(".client:last").hasClass("active")) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();

        }
    }


    rightArrow.click(function () {


        $(".active").fadeOut(1000, function () {


            {
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();

                cheackArrow();
            }


        })
        cheackArrow();


    })

    leftArrow.click(function () {

        $(".active").fadeOut(1000, function () {


            {
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();

                cheackArrow();
            }
        })
        cheackArrow();
    })
    cheackArrow();



});
