
let tel = new Audio("intra.mp3")
let d=0;
let kill=0;
$("#dulap").click(function(){
  $("#knife").css({"display":"inherit"})
  

})
$("#knife").click(function(){
  $("#knife").css({"display":"none"})
  kill=1;

})
setTimeout(function(){
  $("#aa").css({"display":"none"})
  tel.play();
  setTimeout(function(){
    document.getElementById("bobita").src ="bobita.png";}, 14000)
    setTimeout(function(){
    
    $("#bobit").css({"display":"inherit"})
    $("#aa").css({"display":""})
    $("#gean").html("Apasa aici ca sa continui...")
    $("body").click(function(){ 
      switch(d){
        case 0:document.getElementById("bobita").src ="prot.png";
        $("#vb").css("color","purple");$("#vb").html("Geany: nu");d=1;break;
        case 1: 
            document.getElementById("bobita").src ="bobita.png";
            $("#vb").css("color","green");$("#vb").html("Bobitza: Nu ai optiuni tampitule, mai stii cand ti-am dat 50 de lei atunci ca sa bagi la pacanele?");d=2;break;
            
        case 2:document.getElementById("bobita").src ="prot.png";
              $("#vb").css("color","purple");$("#vb").html("Geany: Stai ba cuminte grasule ca o sa fie... v a i    d e    c a p u l    t a u");d=3;break;
        case 3:
              document.getElementById("bobita").src ="bobita.png"; 
              $("#vb").css("color","green");$("#vb").html("Bobitza: Ce ma? Crezi ca ma poti bate, hai ia incearca frezatule!");d=4;break;
        default:
          
        if(kill==0){window.location.href="loading3.html"}
      else{window.location.href="genocide/wrong.html"}}
      





    })
 }, 16000)

}, 2000)



