
var niaaa = new Audio("Muzica/meniu.mp3")
niaaa.loop=true;
niaaa.play();
$("#da").click(function(){niaaa.loop=true; niaaa.play();})
$("#nu").click(function(){niaaa.loop=false; niaaa.pause();niaaa.currentTime=0;})
$(document).ready(function(){$ = jQuery;
  $("input").keydown(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
  });
  $('#play').click(function(){window.location.href="loading.html" ;})
  $('#exit').click(function(){window.close()})
  $('#options').click(function(){ $('#op').css( "display", "initial" ); $('#Muzica').html(slider.value)})
$('#close').click(function(){ $('#op').css( "display", "none" );})
$("#sursa").click(
  function(){window.location.href="sursus.html";}
  )

})
function CheckCode()
{
  var jack = document.getElementById("fname");
  if(jack.value == "cartofspirat"){
  window.location.href="final/end.html"
  }
  else if(jack.value == "opioid"){
    window.location.href="final/toooh/tyh.html"
    }
    else if(jack.value == "bosus"){
      window.location.href="final/pvz/Levels/boss1.html"
      }
}