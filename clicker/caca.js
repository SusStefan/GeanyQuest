$(document).ready(function(){$ = jQuery;
  var aleg = new Audio("../Muzica/aleg.mp3");
  var rock = new Audio("geb.mp3");
  $("#clik").css("display","none");
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
let tms = 0
Choose();
function Choose(){
$(".jimin").css("display","none");
$("#key").css("display","none");
$("body").css({"background-color":"rgb(23,53,40)"});
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
    case 0:   PlayB(x);break;
    case 1:   PlayB(x) ; break;
    case 2:   PlayB(x) ; break;
    case 3:  document.getElementById("info").innerHTML ="nu il ai pe misteri geany boss scuze"; break;
    default: document.getElementById("info").innerHTML ="selectati un geany valid";
  
 }}
}
function PlayB(x){  $("#ciuzo").css("display","none");
let index=60;
let punlock=0;
let proc=100;
let ptimer=0
switch(x){
  case 0: index=60;ptimer=60;proc=100;break;
  case 1: index=45;ptimer=45;proc=120;break;
  case 2: index=75;ptimer=75;proc=80;break;
}
let timer=ptimer;
let datorie=1000;
let sdat=10;
let win=0;
let lose=0;

let bg=0;
let paidsdat=sdat;
let tgrau=0;
let tcorn=0;
let corn =1;
let grau=1;
let pautog=35 * (proc/100);
let psapa=30 * (proc/100);
let pcorn=50 * (proc/100);
let pchild=45 * (proc/100);
let tmoney=0;

rock.loop=true;rock.play();
$("body").css("background-size","cover");
$("body").css("background-image","url('camp.jpg')");
$("#clik").css("display","inherit");
$("#mineGrau").css("display","inherit");
$("#taxt").html("Timp pana la datorie: "+timer+" sec");
$(".sapaclass").html(psapa+" lei");
$(".porumbclass").html(pcorn+" lei")
$(".autogclass").html(pautog+" lei")
aleg.pause();
$("#butones").click(function(){
if(lose===1 && win===0){window.location.reload();}
else {window.close();}

})
setInterval(() => {
  if(win==0 || lose==0){
    if(timer>0){
      timer--;
      $("#taxt").html("Timp pana la datorie: "+timer+" sec")}
      else{timer=ptimer;
        if(paidsdat!=0){ lose=1;
          $("#back").css("display","inherit");
          $("#minegrau").css("display","none");
          $("#maga").css("display","none");
          $("#mineporumb").css("display","none");
          $("#meniu").css("display","none");
          $("#stats").css("display","none");
          $("#tax").css("display","none");
          
        }
      }
  }
if(bg!=0){
  tgrau=tgrau+2*bg;
  UpdateTotal(tgrau,tmoney,tcorn);
}
}, 1000);

function UpdateTax(datorie,paidsdat){
  $("#taxi").html("Datoria urmatoare: "+paidsdat+" lei");
  $("#taxv").html("Datoria totala: "+datorie+" lei");
  paidsdat=sdat;
}
$("#pay").click(function(){
if(tmoney>0){
if(paidsdat<tmoney){tmoney=tmoney-paidsdat;paidsdat=0;}  
else{paidsdat=paidsdat-tmoney;tmoney=0;}
if(tmoney>0){$("#pay").css("border", "10px solid lime")}
  else{$("#pay").css("border", "10px solid red")}
UpdateTotal(tgrau,tmoney,tcorn)
UpdateTax(datorie,paidsdat);
CheckPaymentColor(tmoney);
}
if(paidsdat===0){
  datorie=datorie-sdat;
  sdat=sdat+50;
  paidsdat=sdat;
  timer=Math.floor(timer+index);
  $("#taxt").html("Timp pana la datorie: "+timer+" sec");
  UpdateTax(datorie,paidsdat)
  if(datorie<=0){win=1; Win()}
}
})
function Win(){ win=1;
  $("#maga").css("display","none");
  $("#state").css("color","lime");
  $("#butones").css("background-color","lime");
  $("#butones").css("border","7px solid green");
  $("#tbutones").html("Iesi");
  $("#state").html("Ai castigat!");
  $("#txtp").html("Codul este: ihatx");
  $("#back").css("display","inherit");
          $("#minegrau").css("display","none");
          $("#mineporumb").css("display","none");
          $("#meniu").css("display","none");
          $("#stats").css("display","none");
          $("#tax").css("display","none");
}
function CheckPaymentColor(tmoney){
  if(tmoney>0){$("#pay").css("border", "10px solid lime")}
  else{$("#pay").css("border", "10px solid red")}
  if(tmoney>=psapa){$("#sapaligaz").css("border", "2px solid green");
  $("#sapaligaz").css("background-color", "lime");}
  else{{$("#sapaligaz").css("border", "2px solid brown");
  $("#sapaligaz").css("background-color", "red");}}

  if(tmoney>=pchild){$("#sapaligazz").css("border", "2px solid green");
  $("#sapaligazz").css("background-color", "lime");}
  else{{$("#sapaligazz").css("border", "2px solid brown");
  $("#sapaligazz").css("background-color", "red");}}

  if(tmoney>=pcorn && punlock==0){
    $("#porumgaz").css("border", "2px solid green");
    $("#porumgaz").css("background-color", "lime");}
  else if(punlock==1){ $("#porumgaz").css("background-color", "blue");
$(".porumbclass").html("gata")}
else{$("#porumgaz").css("border", "2px solid brown");
$("#porumgaz").css("background-color", "red");}
if(tmoney>=pautog){
  $("#autoggaz").css("border", "2px solid green");
  $("#autoggaz").css("background-color", "lime");}
  else{{$("#autoggaz").css("border", "2px solid brown");
  $("#autoggaz").css("background-color", "red");}}
}
$("#shop").click(function(){
$("#maga").css("display","inherit");
$("#sellall").click(function(){
  tmoney=tmoney+Math.floor(tgrau*0.3);
  tmoney=tmoney+Math.floor(tcorn*0.6);
  tgrau=0;tcorn=0;
  CheckPaymentColor(tmoney)
  UpdateTotal(tgrau,tmoney,tcorn)
})
$("#exit").click(function(){
  $("#maga").css("display","none");
})
})
$("#minegrau").click(function(){
  tgrau=tgrau+grau;
  UpdateTotal(tgrau,tmoney,tcorn)
})
$("#mineporumb").click(function(){
  tcorn=tcorn+corn;
  UpdateTotal(tgrau,tmoney,tcorn)
})

function UpdateTotal(tgrau,tmoney,tcorn) {
  $("#grau").html(tgrau+" Buc");
  $("#porumb").html(tcorn+" Buc");
  $("#bani").html(tmoney+" lei");
}

//Buyings
$("#sapaligaz").click(function(){
if(tmoney>=psapa){grau++;tmoney=tmoney-psapa;psapa=psapa+3*psapa;
  $("#poral").css("display","inherit");

}
UpdateTotal(tgrau,tmoney,tcorn);
UpdateCash(psapa,grau,pchild,corn); 
CheckPaymentColor(tmoney); 
})

$("#sapaligazz").click(function(){
  if(tmoney>=pchild){corn++;tmoney=tmoney-pchild;pchild=pchild+3*pchild;}
  UpdateTotal(tgrau,tmoney,tcorn);
  UpdateCash(psapa,grau,pchild,corn); 
  CheckPaymentColor(tmoney); 
  })

$("#autoggaz").click(function(){
  if(tmoney>=pautog){
    bg=bg+1;
    tmoney=tmoney-pautog;
    pautog=2*pautog;
    $(".autogclass").html(pautog+" lei")
  }
  UpdateTotal(tgrau,tmoney,tcorn);
  UpdateCash(psapa,grau,pchild,corn); 
  CheckPaymentColor(tmoney); 
  })

let lh=400;
$("#porumgaz").click(function(){
  if(punlock==0){
  if(tmoney>=pcorn){tmoney=tmoney-pcorn;
    $("#porumgaz").css("border", "2px solid blue");
    $("#porumgaz").css("background-color", "cyan");
    $(".porumbclass").html("unlocked")
    punlock=1;
    $("#sapall").css("display","inherit");
    $("#mineporumb").css("display","inherit");
    $(".porumb").css("top","400px");
    lh=lh-100;
    $(".porumb").css("height",lh+"px");
    $("#sapaligazz").css("display","inherit");
    $("#autog").css("display","inherit");
  }
  UpdateTotal(tgrau,tmoney,tcorn);
  UpdateCash(psapa,grau,pchild,corn); 
  CheckPaymentColor(tmoney);

}
  
  })
function UpdateCash(psapa,grau,pchild,corn){
$("#plusText").html("+"+grau);
$("#plusPext").html("+"+corn);
$(".sapaclass").html(psapa+" lei")  ;
$(".sapaaclass").html(pchild+" lei")  ;

}
}


})