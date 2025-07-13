$(document).ready(function(){$ = jQuery;
var aleg = new Audio("Muzica/aleg.mp3")
aleg.loop=true;
aleg.play();
$("#stanga").click(function(){clickStanga()})
$("#drepta").click(function(){clickDreapta()})
$("#minfo").click(function(){showInfo(x)})
$("#joaca").click(function(){Check(x)})

var images = [],x = 0;
images[0]="giani.jpg";
images[1]="fatalau.jpg";
images[2]="confused.jpg";
images[3]="mystery.png";
var ch=[], x= -1;
ch[0]=0;
ch[1]=1;
ch[2]=2;
ch[3]=3;
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
    case 0:   window.location.href="loading2.html" ;
    case 1:   window.location.href="loading2.html" ;
    case 2:   window.location.href="loading2.html" ; break;
    case 3:  document.getElementById("info").innerHTML ="nu il ai pe misteri geany boss scuze"; break;
    default: document.getElementById("info").innerHTML ="selectati un geany valid";
  
 }}

})
