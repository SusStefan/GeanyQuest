var suc= new Audio("Muzica/suc.mp3")
var harta= new Audio("Muzica/harta.mp3")
var er= new Audio("Muzica/er.mp3")
var aleg= new Audio("Muzica/aleg.mp3")
var segus= new Audio("segahell.mp3");
var yet= new Audio("ddlg/yet.mp3");

var no= new Audio("no.mp3");
let winb=0;
let inb=0;
let missing=0;
let winf=0;let inf=0;
let winc=0;let inc=0;
let wina=0;let ina=0;
let winr=0;let inr=0;
let trt=0;
let repeat=0
harta.loop=true;
harta.play();

$("#ce").click(function(){Input()})
$(".done").html("Alege Misiunea !");
if(missing==0){$(".dif").css("color", "white");
$(".dif").html("Dorel aici pt tine ;))");}
else{$(".dif").html("...");}
$("input").css({"display":"none"});
$("#kkk").css({"display":"none"});


$("#unu").html("1) bate-l pe bobitza")

$("#doi").html("2) Fa questul lui Celentano")

$("#trei").html("3) Fa questul lui Firicel")

$("#patru").html("4) Fa questul lui Robi")

$("#cinci").html("5) Fa questul Geaninei")

$("#sase").html("6) Afla ce se afla in Shadow Zone")

$("#sapte").html("7) Termina jocul")

$("#opt").html("8) Afla secretul ?????")
let sum=0;
function Shadow() {

  if(sum==5){alert("bv")}
  else{
  $("#loading").css("color", "red")
  $("#loading").html("Nu esti pregatit...")  
setTimeout(function() {
  $("#loading").css("color", "white")
  $("#loading").html("Harta")
  $(".done").html("Alege misiunea !");
  $(".dif").css("color", "red")
  $(".dif").html("...");  
},2000)}}
$("#hmm").hover(function() {
  $("#loading").css("color", "red")
  $("#loading").html("???");
  $(".done").css("color","red");
  $(".done").html("???");
  $(".dif").css("color", "red")
  $(".dif").html("???");  
})
$("#cg").hover(function() {
  if(winb==1){
    $(".dif").css("color", "lime")
    if(missing==0){
    $(".dif").html("Dorelficultate: te bate bobitza de te caci pe tine");}
    else{$(".dif").html("...");}
  $("#loading").css("color", "white")
  $("#loading").html("Casa lui Geany: Bobitza fight");
  $(".done").css("color","lime");
  $(".done").html("Misiune terminata ! Da click ca sa o repeti !");}
  else{$("#loading").css("color", "white")
  $("#loading").html("Casa lui Geany: ???");
  $(".done").css("color","red");
  $(".done").html("Misiune noua ! Da click ca sa o incepi !");
  $(".dif").css("color", "lime")
  if(missing==0){
  $(".dif").html("Dorelficultate: te bate bobitza de te caci pe tine");}
  else{$(".dif").html("...");}}
})
$("#cc").hover(function() {   if(winc==1){
  $(".dif").css("color", "lime")
  if(missing==0){
  $(".dif").html("Dorelficultate: Te bate un betivan????");}
  else{$(".dif").html("...");}
  $("#loading").css("color", "white")
  $("#loading").html("Casa lui Celentano: blecgjec beut");
  $(".done").css("color","lime");
  $(".done").html("Misiune terminata ! Da click ca sa o repeti !");}
  else{$("#loading").css("color", "white")
  $("#loading").html("Casa lui Celentano: ???");
  $(".done").css("color","red");
  $(".done").html("Misiune noua ! Da click ca sa o incepi !");
  $(".dif").css("color", "lime")
  if(missing==0){$(".dif").html("Dorelficultate: Te bate un betivan????");}
  else{$(".dif").html("...");}}
})
$("#cf").hover(function() {   if(winf==1){
  $(".dif").css("color", "yellow")
  if(missing==0){$(".dif").html("Dorelficultate: Sper ca nu te dor degetele");}
  else{$(".dif").html("...");}
  $("#loading").css("color", "white")
  $("#loading").html("Casa lui Firicel: zbor lIn");
  $(".done").css("color","lime");
  $(".done").html("Misiune terminata ! Da click ca sa o repeti !");}
  else{$("#loading").css("color", "white")
  $("#loading").html("Casa lui Firicel: ???");
  $(".done").css("color","red");
  $(".done").html("Misiune noua ! Da click ca sa o incepi !");
  $(".dif").css("color", "yellow")
  if(missing==0){$(".dif").html("Dorelficultate: Sper ca nu te dor degetele");}
  else{$(".dif").html("...");}
}
})
$("#ca").hover(function() {   if(wina==1){
  $(".dif").css("color", "white")
  if(missing==0){$(".dif").html("Dorelficultate: uhhh nu stiu frate");}
  else{$(".dif").html("...");}
  $("#loading").css("color", "white")
  $("#loading").html("Casa Geaninei: horor ce sa mai");
  $(".done").css("color","lime");
  $(".done").html("Misiune terminata ! Da click ca sa o repeti !");}
  else{$("#loading").css("color", "white")
  $("#loading").html("Casa Geaninei: ???");
  $(".done").css("color","red");
  $(".done").html("Misiune noua ! Da click ca sa o incepi !");
  $(".dif").css("color", "white")
  if(missing==0){$(".dif").html("Dorelficultate: uhhh nu stiu frate");}
  else{$(".dif").html("...");}}
})
$("#cr").hover(function() {   if(winr==1){
  $(".dif").css("color", "red")
  if(missing==0){$(".dif").html("Dorelficultate: ba o sa fie o seara luuuunga");}
  else{$(".dif").html("...");}
  $("#loading").css("color", "white")
  $("#loading").html("Casa lui Robi: o noapte de teroare");
  $(".done").css("color","lime");
  $(".done").html("Misiune terminata ! Da click ca sa o repeti !");}
  else{$("#loading").css("color", "white")
  $("#loading").html("Casa lui Robi: ???");
  $(".done").css("color","red");
  $(".done").html("Misiune noua ! Da click ca sa o incepi !");
  $(".dif").css("color", "red")
  if(missing==0){
  $(".dif").html("Dorelficultate: ba o sa fie o seara luuuunga");}
  else{$(".dif").html("...");}}
})
$("input").keydown(function(event) {
  if (event.keyCode == 13) {
      event.preventDefault();
  }
});

function CheckCode()
{
  var jack = document.getElementById("fname");
  if(jack.value == "biles" && inb==0){$("#loading").html("HARTA"); $(".done").html("Alege Misiunea !"); if(missing==0){$(".dif").css("color", "white");
  $(".dif").html("Dorel aici pt tine ;))");}
  else{$(".dif").html("...");};
  suc.play(); winb=1;inb=1; harta.loop=true;
  harta.play();Back();}
  else if(jack.value == "shadz" && inr==0){$("#loading").html("HARTA");suc.play();inr=1; winr=1; harta.loop=true;
  harta.play();Back();$(".done").html("Alege Misiunea !"); if(missing==0){$(".dif").css("color", "white");
  $(".dif").html("Dorel aici pt tine ;))");}
  else{$(".dif").html("...");};}
  
  else if(jack.value == "dorel..." && missing==1){$("#loading").html("HARTA"); harta.loop=true;
  harta.play();Back();$(".done").html("Alege Misiunea !"); if(missing==0){$(".dif").css("color", "white");
  $(".dif").html("...");}
  else{$(".dif").html("...");};}

  else if(jack.value == "geogroby"){aleg.pause();
    document.title="???";
    $("#fade").css({"display":"inherit"})
    $("#fade").animate({opacity: 1},5000, function(){window.location.href="hpr/ror.html"})}
  else if(jack.value == "megr"&& inc==0){$("#loading").html("HARTA");  if(missing==0){$(".dif").css("color", "white");
  $(".dif").html("Dorel aici pt tine ;))");}
  else{$(".dif").html("...");};suc.play();inc=1; winc=1; harta.loop=true;
  harta.play();Back();$(".done").html("Alege Misiunea !");}
  else if(jack.value == "msab"&& ina==0){
    aleg.pause();
    if(trt===0){ $("#loading").html("Hell");BackWrong();$(".done").html("???");trt=1;
    document.getElementById('fname').value = '666'}
    }
   

    else if(jack.value == "666"&& trt===1){$("#loading").html("HARTA");suc.play(); ina=1;wina=1; yet.loop=true;
    yet.play();Back();$(".done").html("Alege Misiunea !");}
    


  else if(jack.value == "ihatx"&& inf==0){$("#loading").html("HARTA");suc.play(); inf=1;winf=1; harta.loop=true;
  harta.play();Back();$(".done").html("Alege Misiunea !");}
  else{er.play();$("#loading").html("Nu e corect codul prostule. Incearca, DIN NOU");aleg.loop=true;
aleg.play()}
}

function BackWrong(){ 
  segus.loop=true;
  segus.play();
  $("input").css({"display":"none"});
  $(" #kkk").css({"display":"none"});
  $("#loading").html("h̸̨̛̰̭̮͚͖̖̲̤̫̖̮̫͚̩̹̺̗̦͆̀͌͑͂̐̚ ̶͔͔͖͎̼̿̋͘e̶̢̯͎̣̙̯̰͐̀ĺ̴̨̡̫̖̱̹͔͈̳̜̯̱̼̀̌̀̎̃͊̊̉̋̆͑̔̆͌̚̕͜͝ͅĺ̸̙͉͎̝̈̈́̀̈́͛͗̏̓̚"); 
  $("#mmam").click(function() {window.open("survival_tutorial/index_step06.html");Input()})
  
  $(".done").css("color", "red")
  $(".done").html("??? !");
  $(".dif").css("color", "red");
  $(".dif").html("dfsvyuemnbuv");
  $("body").css("background-color","black");
  $("#mmam").css({"display":"inherit"});
  
}

function Back(){
  $("#ce").css({"display":"inherit"});
  $("body").css("background-color","rgb(23,53,40)");
  $("#mmam").css({"display":"none"});
  $("#loading").html("HARTA"); 
  $(".done").css("color", "white")
  $(".done").html("Alege Misiunea !");
  $("#harta").css({"display":"inherit"})
  $(".mision").css({"display":"inherit"})
  $(".done").css({"display":"inherit"})
  $("input").css({"display":"none"});
  $(" #kkk").css({"display":"none"});
  $(".dif").css("color", "white");
  if(missing==0){$(".dif").css("color", "white");
  $(".dif").html("Dorel aici pt tine ;))");}
  else{$(".dif").html("...");}
  $(".dif").css({"display":"inherit"})
 aleg.pause();
 sum=winb+winc+winf+wina+winr;
Checksum()
Update()
}
function Checksum(){
 
  if(sum==0){$("body").css("background-color","rgb(23,53,40)")}
  else if(sum==1){  
   $("body").css("background-color","rgb(23,43,47)");}
  else if(sum==2){$("body").css("background-color","rgb(39,33,60)");}
  else if(sum==3){$("body").css("background-color","rgb(43,23,70)");
missing=1;

Gone()
}
  else if(sum==4){$("body").css("background-color","rgb(73,13,90)");}
  else if(sum==5){$("body").css("background-color","rgb(100,0,100)")
$("#ce").css("display","none");
$(".mision").css("display","none");
harta.pause();
yet.pause()
no.currentTime=52;
no.loop=true;
no.play();
$("#mmamm").css({"display":"inherit"});
$("#mmamm").click(function() {window.location.href = "final/end.html";no.pause();Input()})
$("#loading").html("Este timpul"); 
$(".done").css("color", "white")
$(".done").html("Codul Checkpoint: cartofspirat");
}
  
}
function Update(){
  if(winb==1){$("#unu").html("1) bate-l pe Bobitza")
  $("#unu").css("color","green");}
  if(winr==1){
  $("#patru").css("color","green");}
  if(wina==1){
  $("#cinci").css("color","green");}
  if(winc==1){
  $("#doi").css("color","green");;}
  if(winf==1){
  $("#trei").css("color","green");}
  
}

function Gone(){
  if(repeat==0){
    repeat = 1;
    document.getElementById('fname').value = 'dorel...'
Input()
window.open("gone.html");
  }
}

function Input(){
  $(".mision").css("display","none")
  $("#ce").css("display","none");
  $("#mmamm").css("display","none");
  $("#mmam").css("display","none");
  harta.pause();
  yet.pause();
  segus.pause();
  $("#harta").css("display","none")
  $("#mision").css("display","none")
  $(".done").css("display","none")
  $(".dif").css("display","none")
  $("input").css("display","inherit")
  $("#loading").html("Bordul cu Misiuni");
}