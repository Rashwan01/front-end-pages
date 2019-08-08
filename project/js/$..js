// JavaScript Document
$(document).ready(function(){
	"use strict";

		
	$(".arrow-right , .arrow-left").click(function(){
	
		// change continaer text
			$(".holder").each(function(){
			if($(this).hasClass("hidden"))
				{
					$(this).removeClass("hidden");
				}

			else{

					$(this).addClass("hidden");
					}

			});
		//swap pic
			$(".imgchangedpointer img").each(function(){

			if($(this).hasClass("hidden"))
				{
					$(this).removeClass("hidden");
				}

			else{

					$(this).addClass("hidden");
					}
	});
		
		
	});
	
	
});