
  document.body.style.zoom= "100%";
  var door=new Audio("slam.mp3")
var came=new Audio("came.mp3")
var back=new Audio("back.mp3")
var jump=new Audio("jump.mp3")
var intro=new Audio("intro.mp3")

  door.volume=0.3;
back.volume=0.1;
let branzoi=6;
let x=0;
let hov=0;
let dead=0;
let power=100;
let doo=0;
let bautura =100;
let cam=0;
let ca=0;
let i=0;
let mus=0;
let add=0;
let a=0;
let rata=3;
let skip=0;
let stop=1;
intro.play();
$("#lll").click(function(){StartGame()})
setTimeout(function(){
  if(skip==0){
$("#lll").hide()
StartTime();
UnDisplayCam();
back.loop=true;
  back.play()
  }
},44000)

function StartGame(){ 
  back.loop=true;
  back.play()
  $("#lll").hide();
  intro.pause();
  skip=1;
  StartTime();
  UnDisplayCam();
}
function StopSound()
{
  if(door.play()){door.pause();door.currentTime = 0;}
  if(came.play()){came.pause();came.currentTime = 0;}
}
$(".camer").click(function(){

  if(cam==0){DisplayCam()}
else if(cam==1){StopSound();came.play();UnDisplayCam()}})
function UnDisplayCam() { 
  if(add!=0){add=add-1;ConsumePower(add)}
  
  $(".muxic").click(function(){Music()});
  cam=0
  $("#cams").css({"display":"none"});
$("#inf").html(">...")
$("#bopen").click(function(){
  if(doo==1){
    i=0;
    if(add!=0){add=add-1;ConsumePower(add)}
  StopSound()
  door.play()}
  $("#int").css({"display":"none"})
  doo=0
})
$("#bclose").click(function(){
  $("#inf").html(">...")
  if(doo==0){
    i=1;
    add=add+1;
    ConsumePower(add)
    StopSound()
  door.play()
  $("#int").css({"display":"inherit"});doo=1}
  else{$("#inf").html("> Poti bloca doar o usa")}
})

$("#aopen").click(function(){
  if(doo==1){
    a=0;
    if(add!=0){add=add-1;ConsumePower(add)}
    ConsumePower(add)
    StopSound()
    door.play()}
  $("#inf").html(">...")
  $("#afara").css({"display":"none"})
  doo=0
})
$("#aclose").click(function(){
  $("#inf").html(">...")
  if(doo==0){
    a=1;
    add=add+1;
    ConsumePower(add)
    StopSound()
  door.play()
    $("#afara").css({"display":"inherit"});doo=1}
    else{$("#inf").html("> Poti bloca doar o usa")}
})
cam=0;

}
function DisplayCam()
{StopSound()
  came.play()
  $("#omg").click(function(){Cam1()})
  $("#omgg").click(function(){Cam2()})
  $("#omggg").click(function(){Cam3()})
  $("#omgggg").click(function(){Cam4()})
  $("#omggggg").click(function(){Cam5()})
  $("#cams").css({"background-color":"black"});
  $(".muxic").unbind( "mouseenter mouseleave click" );
  $("#aclose").unbind( "mouseenter mouseleave click" );
  $("#aopen").unbind( "mouseenter mouseleave click" );
  $("#bclose").unbind( "mouseenter mouseleave click" );
  $("#bopen").unbind( "mouseenter mouseleave click" );
  $("#cams").css({"display":"inherit"});
  cam=1;
  add=add+1;
  ConsumePower(add)
}
function StartTime(){
  let t =10;
  
  $("#time").html("> Ora: 10 dimineatza")
  setInterval(() => {t=t+1
    ChangeTime(t)
  }, 30000);
}

function ChangeTime(t) {
switch (t)
{
  case 10: $("#time").html("> Ora: 10 dimineatza");; break;
  case 11: $("#time").html("> Ora: 11 dimineatza");StartBranzoi(); break
  case 12: $("#time").html("> Ora: 12 dimineatza");DrainB(); break
  case 13: $("#time").html("> Ora: 1 dup' amiaz'");StartRata(); break
  case 14: $("#time").html("> Ora: 2 dup' amiaz'"); break
  case 15: $("#time").html("> Ora: 3 dup' amiaz'"); break
  case 16: $("#time").html("> Ora: 4 dup' amiaz'"); 
  setTimeout(()=>{Win()
   },500); break
}
  }

  function Cam1()
  { ca=1;
    CheckRata(rata);
    
 
    StopSound();
    came.play();
    $("#cams").css({"background-image":"url(cam1.jpg)"});
    
  }
  function Cam2()
  { ca=2;
    CheckRata(rata);
    
    
    StopSound();
    came.play();
    $("#cams").css({"background-image":"url(cam2.jpg)"});
   
  }
  function Cam3()
  { ca=3;

    CheckBranzoi(branzoi);
    
    StopSound();
    came.play();
    $("#cams").css({"background-image":"url(cam3.jpg)"});

  }
  function Cam4()
  { ca=4;
    
    CheckBranzoi(branzoi);
    StopSound();
    came.play();
    $("#cams").css({"background-image":"url(cam4.jpg)"});
   
  }
  function Cam5()
  { ca=5;
    
    CheckBranzoi(branzoi);
    StopSound();
    came.play();
    $("#cams").css({"background-image":"url(cam5.jpg)"});
    
  }

  function StartBranzoi(){
    branzoi=3;
    setInterval(function(){
      if(stop==1){
      if(dead!=1){
        let rando =Math.floor(Math.random()*4);
      if(rando==0){
      branzoi=branzoi-1;
      CheckBranzoi(branzoi);}};
      if(branzoi==0){
      setTimeout(function(){if(branzoi==0 && a==0){Jumpscare(1);dead=1}
      else if(branzoi==0 && a==1){branzoi=3;}},2000)}}
    }, 5000);
  }
 
  function CheckBranzoi(branzoi){
      
      if(ca==3 && branzoi==1){
        $("#branzoi").css({"background-image":"url(anib.png)"});
        $("#branzoi").css({"display":"inherit"})}
      else if(ca==4 && branzoi==2){
        $("#branzoi").css({"background-image":"url(anib.png)"});
        $("#branzoi").css({"display":"inherit"})}
      else if(ca==5 && branzoi==3){
        $("#branzoi").css({"background-image":"url(anib.png)"});
        $("#branzoi").css({"display":"inherit"})}
      else{$("#branzoi").css({"display":"none"})};
    }

    function StartRata(){
     rata=3;
      setInterval(function(){
        if(stop==1){
        if(dead!=1){
          let nigger =Math.floor(Math.random()*6);
        if(nigger==3){
        rata=rata-1;
       
        CheckRata(rata);}};
        if(rata==0){
        setTimeout(function(){
          if(rata==0 && i==0){Jumpscare(3);dead=1}
        else if(rata==0 && i==1){rata=3;}},2000)}}
      }, 5000);
    }
   
    function CheckRata(rata){
       if(ca==1 && rata==2){
        $("#branzoi").css({"background-image":"url(rata.png)"});
        $("#branzoi").css({"display":"inherit"})
       }
        else if(ca==2 && rata==1){
          $("#branzoi").css({"background-image":"url(rata.png)"});
          $("#branzoi").css({"display":"inherit"})}
        
        else{$("#branzoi").css({"display":"none"})};
      }    


  function Jumpscare(x) 
  {   stop=0;
    switch(x){
      case 1: $("body").css({"background-image":"url(anib.png)"});$("#cause").html("Cauza: Branzoi");break;
      case 2: $("body").css({"background-image":"url(anib2.png)"});$("#cause").html("Cauza: Celentano");break;
      case 3: $("body").css({"background-image":"url(rata.png)"});$("#cause").html("Cauza: Rata");break;
      case 4: $("body").css({"background-image":"url(anib.png)"});$("#cause").html("Cauza: 0% Baterie");break;
    }
    $("#restart").click(function(){location.reload()})
    rad=Math.floor(Math.random()*5)
    
    switch(rad)
    {
      case 0:$("#favor").html("cam noob, off"); break;
      case 1:$("#favor").html("l-ai lasat sa castige"); break;
      case 2:$("#favor").html("meci mai prost"); break;
      case 3:$("#favor").html("mai incearca"); break;
      case 4:$("#favor").html("hai ca poti"); break;
      default: $("#favor").html("fnag by sus");
    }
    UnDisplayCam();
    setTimeout(function(){$("#moar").css({"display":"inherit"})},3000)
    $(".muxic").css({"display":"none"});
    $("#bau").css({"display":"none"});
    $("#alcool-bar").css({"display":"none"});
    $(".camer").css({"display":"none"});
    $(".holder").css({"display":"none"});
    $("#info").css({"display":"none"});
    $(".door").css({"display":"none"});
    jump.play();
    back.pause();
    slam.pause();
    click.pause();

    
  }

  function Music(){
    if(mus==0){
      $("#cele").css({"display":"inherit"});
      $("#bau").css({"display":"inherit"});
      $("body").css({"background-image":"url(bgmm.jpg)"})
    $(".camer").css({"display":"none"});
    $(".holder").css({"display":"none"});
    $("#info").css({"display":"none"});
    $(".door").css({"display":"none"});
  mus=1;
  $("#bau").click(function () {
      AddB()} 
  )}
  else if(mus==1){
    $("#cele").css({"display":"none"});
    $("#bau").css({"display":"none"});
    $("body").css({"background-image":"url(casa.jpg)"})
    if(a==1){$("#afara").css({"display":"inherit"});}
    else{$("#afara").css({"display":"none"})}
    if(i==1){$("#int").css({"display":"inherit"});}
    else{$("#int").css({"display":"none"})}
    $(".camer").css({"display":"inherit"});
    $(".holder").css({"display":"inherit"});
    $("#info").css({"display":"inherit"});

  mus=0;}
  }

  function DrainB(){
    setInterval(() => {
      if(stop==1){
      bautura=bautura-1;
      AprovB()
      if(bautura==0){
        setTimeout(() => {
          Jumpscare(2);
        }, 500);  }}
    }, 200);
  }
  function AprovB(){
    $("#alcool").animate({
      'width': bautura + "%"
    }, 100);
  }
  function AddB(){
    if(bautura<95){
    bautura=bautura+5
      AprovB()}
  }
  function AprovP(power){
    $("#power").html(">Baterie: " + power+"%")
    if(power<61){$("#power").css("color","yellow")}
    if(power<31){$("#power").css("color","red")}
    if(power<16){$("#power").css("color","maroon")}
  }
  let igg=0
  function  ConsumePower(add){
    if(stop==1){
    switch(add){
      case 0: clearInterval(Gej);igg=0; break;
      default: 
        if(igg==0){
        Gej = setInterval(() => {
          if(add==1){
            if(power>0){
        power=power-1;}
      else{Jumpscare(1);}}
         igg=1;
         AprovP(power)
    },1000)};break}
      }    }
  function Win(){
    stop=0;
    $("#moar").css({"display":"inherit"});
    $(".aal").html("Ai Castigat!")
    $("#cause").html("Bv geany")
    $("#favor").html("Codul e: shadz");
    $("#restart").css({"background-color":"red"});
    $("#red").html("iesi");
    $("#restart").click(function(){window.close()})
    $(".muxic").css({"display":"none"});
    $("#bau").css({"display":"none"});
    $("#alcool-bar").css({"display":"none"});
    $(".camer").css({"display":"none"});
    $(".holder").css({"display":"none"});
    $("#info").css({"display":"none"});
    $(".door").css({"display":"none"});
  }
 