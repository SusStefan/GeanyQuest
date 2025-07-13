
var niggggg = new Audio("Muzica/meniu.mp3");
niggggg.loop=true;
niggggg.play();
niggggg.pause();
$("#bobit").css({"display":"inherit"})
document.getElementById("bobita").src ="componente/imagine/geany.png"
    $("#aa").css({"display":""})
    $("#gean").html("Apasa oriunde ca sa continui...")
    $("body").click(function(){
      document.getElementById("bobita").src ="prot.png";
      $("#vb").css("color","purple");$("#vb").html("Geany: bine bine grasule, da spune mai repede ca nu am timp de palavrageala")
        $("body").click(function(){
          document.getElementById("bobita").src ="componente/imagine/bob.png";
          $("#vb").css("color","green");$("#vb").html("Bobitza: Ba idiotule, tu nu ai timp de viata... a cazut un meteorit mov la mine la bar si incepe sa se imprastie in tot satul... ")
          $("body").click(function(){$("#vb").css("color","purple");
          document.getElementById("bobita").src ="prot.png";
          $("#vb").html("Geany: Si ce naiba vrei sa fac? sa-i dau una?")
           $("body").click(function(){
            document.getElementById("bobita").src ="componente/imagine/bob.png"; 
            $("#vb").css("color","green");$("#vb").html("Bobitza: Nu ma maimuta ce esti! Trebuie sa ma ajuti sa ii convingem si pe ceilalti sa ne ajute sa il oprim")
            $("body").click(function(){window.location.href="loading4.html"})})})})})
