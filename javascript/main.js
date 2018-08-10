$(document).ready(function(){
	$(".activate").click(function(){
		$("p").fadeOut("slow");
	});


 $("#flip").click(function(){
 	$("#panel").toggle("slow");

 });


$(".animatebox").click(function(){
	var greenbox = $(".greenbox");
	greenbox.animate({height:'300px', opacity:'0.4'},"slow");
	greenbox.animate({width:'300px', opacity:'0.8'},"slow");
	greenbox.animate({height:'100px', opacity:'0.4'},"slow");
	greenbox.animate({width:'100px', opacity:'0.8'},"slow");

});



});


