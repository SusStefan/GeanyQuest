
var intense = new Audio("../no.mp3");
intense.loop = true;
intense.play();
$("body").click(function(){  
$("#personaj").css("background-image","url('gang.png')");
$("#textbox").css("border","10px solid red");
$("#textbox").css("background-color","burlywood");
$("#txt").html("Geany(si gangul): Cine esti?");
$("body").click(function(){  
  $("#personaj").css("background-image","url('shadow.png')");
  $("#textbox").css("border","10px solid rgb(82, 0, 82)");
  $("#textbox").css("background-color","purple");
  $("#txt").html("???:Ai vrea tu sa afli... te invit sa afli...");
  $("body").click(function(){  
    $("#personaj").css("background-image","url('scary.png')");
    $("#txt").html("???:Dar mai intai... SPUNE-TI LA REVEDERE DE LA PRIETENI... MWUAHAHAHAHAHA");
    $("body").click(function(){  
      $("#personaj").css("background-image","url('../prot.png')");
      $("#personaj").css("background-size","cover");
      $("#textbox").css("border","10px solid red");
      $("#textbox").css("background-color","burlywood");
      $("#txt").html("Geany(fara gangul): pfuaaaaa ce-ai facut tata, unde mi-e ghengu??? :(((");
      $("body").click(function(){  $("#personaj").css("background-size","auto");
      $("#personaj").css("background-image","url('shadow.png')");
      $("#textbox").css("border","10px solid rgb(82, 0, 82)");
      $("#textbox").css("background-color","purple");
      $("#txt").html("???:I-am dus in cel mai mare cosmar al lor... vor muri cat de curand... iar tu...");
      $("body").click(function(){  $("#personaj").css("background-size","auto");
        $("#personaj").css("background-image","url('scary.png')");
        $("#textbox").css("border","10px solid rgb(82, 0, 82)");
        $("#textbox").css("background-color","purple");
        $("#txt").html("???:Nu te voi lasa sa pleci asa usor geany... vreau sa ma joc putin cu tine mai intai");
        $("body").click(function(){
          window.location.href="tuhu.html";
})})})})})})})