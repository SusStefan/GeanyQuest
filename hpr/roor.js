$(document).ready(function() {
var h = new Audio("voice.mp3");
var s = $("#sans");
var t = $("#snas")
function Rv(){h.pause();h.currentTime=0;}
setTimeout(() => {
  Rv();
    s.html(".");
    h.play();
    setTimeout(() => {
      Rv();
        s.append(".")
        h.play();
        setTimeout(() => {
          Rv();
            s.append(".")
            h.play();
            Another();
          },500);
      },500);
  },500);

  function addTextByDelay(text,s,delay){
    if(text.length >0){ Rv(); h.play()
        //append first character 
        s.append(text[0]);
        setTimeout(
            function(){
                //Slice text by 1 character and call function again                
                addTextByDelay(text.slice(1),s,delay);            
             },delay                 
            );
    }
  }
function Another(){ 
  setTimeout(()=>{s.html(" ");
  var text="How pecular...";
  var delay=300;
  addTextByDelay(text,s,delay);},1000)
  setTimeout(function(){
    s.html(" ");
     text="What are you doing here?";
     delay=200;
    addTextByDelay(text,t,delay);
  },6200)
  setTimeout(()=>{t.html(" ");
  var text="Could it be...No...";
  var delay=300;
  addTextByDelay(text,t,delay);},12400)

setTimeout(()=>{t.html(" ");
  var text="IT'S YOU, G E O";
  var delay=400;
  addTextByDelay(text,t,delay);
  setTimeout(()=>{$("#white").animate({opacity: 1},3000, function(){window.location.href="../pvz/pvz.html"})},2800)
},20100)
}
})