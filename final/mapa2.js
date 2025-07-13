var change = new Audio("change.mp4");
let dan=0;
var couponWindow = {
  width: $(window).width(),
  height: $(window).height(),
  resizing: false
};
var $w=$(window);
$w.resize(function() {
  if ($w.width() != couponWindow.width && !couponWindow.resizing) {
    couponWindow.resizing = true;
    window.resizeTo(couponWindow.width, $w.height());
  }
  couponWindow.resizing = false;
});
change.loop=true;
change.volume=0.5;
change.currentTime= 102;
change.play();
$("input").keydown(function(event) {
  if (event.keyCode == 13) {
      event.preventDefault();
  }
});
function CheckCode()
{
  var jack = document.getElementById("fname");
  if(jack.value == "01110011" && dan==0){change.play()
    $("#blur").css("width","250px");
    $("#bine1").css("display","inherit");
    dan=1;
  }
  else if(jack.value == "01100111"&& dan==1){change.play()
    $("#blur").css("width","0px");
    $("#bine2").css("display","inherit");
    dan=2;
  }
  else if(jack.value == "01101011"&& dan==2){window.location.href="reveal.html";
  }
}
$("#bobitza").click(function(){change.pause();})
$("#rata").click(function(){change.pause();})
$("#branzoi").click(function(){change.pause();})
function OpenAsci()
{
  window.open("ascii.html")
}