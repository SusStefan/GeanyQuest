$(document).ready(function(){$ = jQuery;
var whiteout= new Audio("out.mp3");
whiteout.loop=true;
whiteout.play();

  $("#restart").click(function(){window.location.reload();})
$(".body").css("width",window.innerwidth+"px")
$(".body").css("height",window.innerheight+"px")

})