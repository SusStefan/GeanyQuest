$(document).ready(function(){$ = jQuery;
var jazz = new Audio("a.mp3");
var card = new Audio("car.mp3");
var than = new Audio("tan.mp3");
var aleg = new Audio("../Muzica/aleg.mp3");
$("#celenthanos").css("display","none");
var images = [],x = 0;
images[0]="../giani.jpg";
images[1]="../fatalau.jpg";
images[2]="../confused.jpg";
images[3]="../mystery.png";
var ch=[], x= -1;
ch[0]=0;
ch[1]=1;
ch[2]=2;
ch[3]=3;
Choose()

function Choose(){
aleg.loop=true;
aleg.play();
$("#stanga").click(function(){clickStanga()})
$("#drepta").click(function(){clickDreapta()})
$("#minfo").click(function(){showInfo(x)})
$("#joaca").click(function(){Check(x)})


function clickDreapta()
{x=(x=== images.length-1)? 0: x+1;
  document.getElementById("img").src = images[x]
  changeText(x)
}
function clickStanga()
{x=(x<=0)? images.length-1: x-1;
  document.getElementById("img").src = images[x]
  changeText(x)

}

function changeText(x)
{
  switch(x){
    case 0:document.getElementById("info").innerHTML = "geany (standard)"; break;
    case 1:document.getElementById("info").innerHTML = "gay geany (fatalau)"; break;
    case 2:document.getElementById("info").innerHTML = "curious geany (confused)"; break;
    case 3:document.getElementById("info").innerHTML = "mystery geany :O (hidden)"; break;
  }
}

function showInfo(x){
  switch(x){
    case 0:  window.open('https://geany-quest.fandom.com/wiki/Geany_(Standard)', '_blank'); break;
    case 1:  window.open('https://geany-quest.fandom.com/wiki/Gay_Geany_(Fatalau)', '_blank'); break;
    case 2:  window.open('https://geany-quest.fandom.com/wiki/Geany_(Standard)', '_blank'); break;
    case 3:  window.open('https://geany-quest.fandom.com/wiki/Geany_(Standard)', '_blank'); break;
    default: document.getElementById("info").innerHTML ="selectati un geany valid";
}}

function Check(x) { 
  
  switch(x){
    case 0:   PlayB(x);break
    case 1:   PlayB(x) ; break
    case 2:   PlayB(x) ; break;
    case 3:  document.getElementById("info").innerHTML ="nu il ai pe misteri geany boss scuze"; break;
    default: document.getElementById("info").innerHTML ="selectati un geany valid";
  
 }}
}



function PlayB(x){
  Transformation(x); 
  $("#ciuzo").css("display","none");
  $("body").css({"background-image":"url('bg.jpg')"});
  $("#celenthanos").css("display","inherit");
  aleg.pause();
jazz.volume=0.2;
jazz.play();
let total=0;
let etotal=0;
let mdrunk=5;
let edrunk=5;
var trans=1;
ppass=0;
epass=0
let xex=0;
jazz.loop=true;
let tsrt=1;
switch(x){
  case 0:$("#hh").attr("src",images[0]);
  $("#trg").html("Geany");break;
  case 1:$("#hh").attr("src",images[1]);$("#trg").html("gay Geany");break; 
  case 2:$("#hh").attr("src",images[2]);
  $("#trg").html("conf. Geany");break; 
  case 3:$("#hh").attr("src",images[3]);
  $("#trg").html("???");break; 
  default: $("#hh").attr("src",images[0]);$("#trg").html("geany");
}
$("#deal").click(function(){
  if(tsrt==1){jazz.pause();jazz.play();tsrt=2;}
  Disable()
  Cardz(1)
  setTimeout(() => {
    EneTrun()
  },1000);
})
$("#stop").click(function(){
  Disable();
  ppass=1;
  setTimeout(() => {
    if(epass==0){
    EneTrun()}
    else{CheckWin(etotal,total)}
  },1000);
})

function YouTurn(){
  setTimeout(() => {
    
 
  $("#deal").click(function(){
    Disable()
    Cardz(1)
    
    setTimeout(() => {
      EneTrun()
    },1000);
  })
  $("#stop").click(function(){
    ppass=1;
    Disable()
    if(epass==0){
    setTimeout(() => {
      EneTrun()
    },1000);}
    else{if(etotal>total){mdrunk=mdrunk-1; Again()}  
  else{edrunk=edrunk-1; Again();}  }
  }) }, 1000);
  
  
}
function Disable()
{ $("#deal").unbind( "mouseenter mouseleave click" );
$("#stop").unbind( "mouseenter mouseleave click" );}
function EneTrun(){ 
  Disable()
  if(edrunk>2){
  Cardz(2)}
else{
  if(mdrunk>2){
    let i=0;
    card.play();
    if(xex==0){i=10; info="<img class='cards' id='zece' src='101.png'/>";xex=xex+1;}
    else if(xex==1){i=10; info="<img class='cards' id='zece' src='101.png'/>";xex=xex+1}
   else if(xex==2){i=1; info="<img class='cards' id='unu' src='1.png'/>";xex=0} 
    setTimeout(() => {etotal = etotal+i;
      $("#masae").append(info)},1000);
      setTimeout(() => {CheckWin(total,etotal)},2000)
  }
  else{if(etotal<18){Cardz(2);}
else{epass=1;}}
}
  YouTurn()
}

function Cardz(x){

  let info="geany";
  let i=0
  let rando=Math.floor(Math.random()*13);
  card.play();
  switch(rando){
    case 0:i=1;info="<img class='cards' id='unu' src='1.png'/>";break;
    case 1:i=2;info="<img class='cards' id='doi' src='2.png'/>";break;
    case 2:i=3;info="<img class='cards' id='trei' src='3.png'/>";break;
    case 3:i=4;info="<img class='cards' id='patru' src='4.png'/>";break;
    case 4:i=5;info="<img class='cards' id='cinci' src='5.png'/>";break;
    case 5:i=6;info="<img class='cards' id='sase' src='6.png'/>";break;
    case 6:i=7;info="<img class='cards' id='sapte' src='7.png'/>";break;
    case 7:i=8;info="<img class='cards' id='opt' src='8.png'/>";break;
    case 8:i=9;info="<img class='cards' id='noua' src='9.png'/>";break;
    case 9:i=10;info="<img class='cards' id='zece' src='10.png'/>";break;
    case 10:i=10;info="<img class='cards' id='zece' src='101.png'/>";break;
    case 11:i=10;info="<img class='cards' id='zece' src='102.png'/>";break;
    case 12:i=10;info="<img class='cards' id='zece' src='103.png'/>";break;
  }
  switch(x){
    case 1:  setTimeout(() => {total=total+i;
      $("#masap").append(info)},1000);
      setTimeout(() => {CheckWin(total,etotal)},2000);break;
      case 2:  setTimeout(() => {etotal = etotal+i;
        $("#masae").append(info)},1000);
        setTimeout(() => {CheckWin(total,etotal)},2000);break;
  };


}

function CheckWin(total,etotal){
  if(epass===0){
  if(total>21){mdrunk=mdrunk-1;Applydrunk(mdrunk); Again();}
  if(total==21){edrunk=edrunk-1; Again();}
  if(etotal>21){edrunk=edrunk-1; Again();};
  if(etotal==21){mdrunk=mdrunk-1;Applydrunk(mdrunk); Again();};}
  if(epass===1 && ppass===1){
    epass=0;
    ppass=0;
    if(total<etotal && etotal<21){mdrunk=mdrunk-1; Again();}
    if(etotal<total && total<21){edrunk=edrunk-1; Again();}
  }
    Transformation(x); 
}
function Applydrunk(mdrunk){
switch(mdrunk)
{
  case 4:$(".cards").css({"filter":"blur(2px);"});break;
  case 3:$(".cards").css({"filter":"blur(4px);"});break;
  case 2:$(".cards").css({"filter":"blur(6px);"});break;
  case 1:$(".cards").css({"filter":"blur(8px);"});break;
}
}
function Again(){
  Disable();
  epass=0;
  ppass=0;
  CheckWinn(edrunk, mdrunk);
  ChangeBott(edrunk, mdrunk);
  $(".cards").remove();
  etotal=0;
  total=0;

  setTimeout(function(){YouTurn();},1000)
  
}
function CheckWinn(edrunk, mdrunk){
  if(edrunk==0){Wine()}
  else if(mdrunk==0){Lose()}
}
function Lose(){
  $("#masae").css({"display":"none"});
  $("#masap").css({"display":"none"});
  $("#moar").css({"display":"inherit"});
  $("#restart").click(function(){location.reload()})
}
function Wine(){
  $("#masae").css({"display":"none"});
  $("#masap").css({"display":"none"});
  $("#cause").css({"display":"none"});
  $(".aal").html("Ai castigat")
  $("#favor").html("codul: megr")
  $("#moar").css({"display":"inherit"});
  $("#red").html("iesi")
  $("#restart").click(function(){window.close()})
}
function ChangeBott(edrunk, mdrunk){
switch(edrunk){
  case 4:$("#efifth").attr("src","empty.png");break;
  case 3:$("#eforth").attr("src","empty.png");break;
  case 2:$("#ethird").attr("src","empty.png");break;
  case 1:$("#esecond").attr("src","empty.png");break;
  case 0:$("#efirst").attr("src","empty.png");break;
}
switch(mdrunk){
  case 4:$("#fifth").attr("src","empty.png");break;
  case 3:$("#forth").attr("src","empty.png");break;
  case 2:$("#third").attr("src","empty.png");break;
  case 1:$("#second").attr("src","empty.png");break;
  case 0:$("#first").attr("src","empty.png");break;
}
}
function Transformation(x){  if(trans==1){
  if(edrunk==2 || x==1){
    if(x==1){
      $("#ups").html("Baaaaaaaaaaaaa ! EstI BuLanGiu !! GayUUUUllee! CELEENTHANOOOS!!!")
    }
    jazz.pause()
    $("#spune").css({"display":"inherit"})
    $("#masae").css({"display":"none"});
    $("#masap").css({"display":"none"});
  
  $("body").click(function(){
    $("body").css({"background-image":"url('unknown.png')"});
    $("#sugus").html("clnthanos")
    $("#masae").css({"background-color":"purple"});
    $("#ebauta").css({"background-color":"purple"});
    $("#enemy").css({"background-color":"purple"});
    $("#ee").attr("src",'unknown.png');
    $("#masae").css({"display":"inherit"});
    $("#masap").css({"display":"inherit"});
    than.loop=true;
    than.play()
    $("#spune").css({"display":"none"});
    $("body").unbind("click");
    trans=2;
  })  


  
}}}}
})