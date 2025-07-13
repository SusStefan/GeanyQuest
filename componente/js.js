$(document).ready(function(){$ = jQuery;
  var audio = new Audio('muzica/Sun.mp3');
  var punch = new Audio('muzica/pumn.mp3');
  var poc = new Audio('muzica/poc.mp3')
  var haha = new Audio('muzica/haha.mp3');
  var drinc = new Audio('muzica/drinc.mp3');
  var aaaaa = new Audio('muzica/tipa.mp3');
  var psd = new Audio("muzica/psd.mp3");
  var wing=0;
  var first = new Audio("muzica/first.mp3")
  first.loop = true;
  audio.volume=0.3;
  first.volume=0.5;
  let moarte=1;
  
 
  first.play();
  function Stopsound(){
    if(aaaaa.play()){aaaaa.pause();aaaaa.currentTime = 0;}
    if(poc.play()){poc.pause();poc.currentTime = 0;}
    if(drinc.play()){drinc.pause();drinc.currentTime = 0;}
    if(punch.play()){punch.pause();punch.currentTime = 0;}
    if(haha.play()){haha.pause();haha.currentTime = 0;}}
 

let atp=0
let maxtp=5
  //HEALTH BAR
  
 
    var maxHealth = 100,
      curHealth = maxHealth;
    $(".health-bar-text").html(curHealth + "/" + maxHealth);
    $(".tp-bar").css({"width": "0%"})
    $(".tp-bar-text").html(atp + "/" + maxtp);
    $(".health-bar").css({"width": "100%"});
  
  //ENEMY HEALTH BAR
  var emaxHealth = 300;
  var phase = 1;
  ecurHealth = emaxHealth;

    
  
    //APPLY CHANGES
  
function applyChange(curHealth,atp)
{
  
  var a = curHealth * (100 / maxHealth);
  $('.health-bar').animate({'width': a + "%"}, 500);
$(".health-bar-text").html(curHealth + "/" + maxHealth);
$(".health-bar-shield").animate({
  'width': a + "%"
}, 300);
$(".health-bar-damage").animate({
  'width': a + "%"
}, 700);
$('.tp-bar').animate({'width': atp*20 + "%"}, 500);
$(".tp-bar-text").html(atp + "/" + maxtp)

}

//apply changes enemy



  
    //DAMAGE
    //o//
  
   let crit 
   let crii =0;
    function Damageenemy(x)
    {
      
      $("#abone").html(' ')
      $("#abtwo").html(' ')
      $("#abthree").html(' ')
      if (ecurHealth <= 0) {
        if(phase ==1){PhaseII()}
        else if(phase ==2){FPhase()}
        window.location.reload(true);
      } else {
        $(".e-health-bar, .e-health-bar-shield, .e-health-bar-damage, .tp-bar").stop()
        if(crii==0){;
        crit =Math.floor(Math.random()*10)}
        else {crii==0; crit=1} 
        if (crit==1){ edamage = 2* (x + Math.floor(Math.random()*20));}
        else{ edamage = x + Math.floor(Math.random()*20)};
        ecurHealth = ecurHealth - edamage;
        if(atp<maxtp){atp=atp+1; }
        if (ecurHealth < 0) {ecurHealth = 0; if(phase ==1){PhaseII()}
        else if(phase ==2){FPhase()}}
        else { 
          EnemyTurn();
          if (crit==1){$('.enemydamage').css("color","red")
          $('.enemydamage').html("CRIT -" + edamage +" HP")
          $('.enemydamage').show(1000)
          setTimeout(function(){$('.enemydamage').html(" ")},1000)}
          else {$('.enemydamage').css("color","white")
          $('.enemydamage').html("-" + edamage +" HP")
          $('.enemydamage').show(1000)
          setTimeout(function(){$('.enemydamage').html(" ")},1000)
        }}
       Stopsound()
       punch.play()

        eapplyChange(ecurHealth, atp);
        if (ecurHealth <= 0) 
        {if(phase ==1){PhaseII()}
          else if(phase ==2){FPhase()}};
       
    }
  
  }
     
  function Mori(){
    $(".enem").css({"display":"none"});
    $(".dialoguebox").css({"display":"none"});
    $("#moar").css({"display":"inherit"});
    $("#restart").click(function(){ window.location.reload(true);})
  }

    function Damageplayer(y)
    {
    
        $(".health-bar, .health-bar-shield, .health-bar-damage").stop()
        var damage = y+ Math.floor(Math.random()*10);
        curHealth = curHealth - damage;
        Stopsound()
        poc.play()
        if(damage==maxHealth){$('#text').html("Bobitza iti sfarseste lumea...");}
        else{
        if (curHealth < 0) {curHealth = 0;}
        else {
          $('#text').html("Bobitza iti trage una");
          $('.playerdamage').html("-" + damage +" HP")
          $('.playerdamage').show(1000)
          setTimeout(function(){$('.playerdamage').html(" ")},1000)
        }
        applyChange(curHealth,atp);
        if (curHealth == 0 ) {setTimeout(function(){Mori()}, 3000)}
      }
    }
  

    //HEAL
  
    function Heal(X){
      $("#abone").html(' ')
      $("#abtwo").html(' ')
      $("#abthree").html(' ')
      if(curHealth == maxHealth) {$('#text').html("esti full bo$$")}
      else{ let shield =X + Math.floor(Math.random() * 40);
        $(".health-bar, .health-bar-shield, .health-bar-damage").stop();
        curHealth=curHealth+shield;
        if(curHealth>maxHealth){curHealth = maxHealth}
        else {$('#text').html("geany baga o sarba param param param param param param param param");
              $('.playerdamage').html("+" + shield +" HP");
              $('.playerdamage').show(1000);
              setTimeout(function(){$('.playerdamage').html(" ")},1000)}
            EnemyTurn()}
      applyChange(curHealth,atp);
      if(ecurHealth!=0){
      }
    }
  
    function Shieldenem(){
    let eshield =30 + Math.floor(Math.random() * 40);
      $(".e-health-bar, .e-health-bar-shield, .e-health-bar-damage").stop();
      ecurHealth=ecurHealth+eshield;
      if(ecurHealth>emaxHealth){ecurHealth = emaxHealth}
      else {$('#text').html("Bobitza baga o palinca.");
      Stopsound();drinc.play();
      $('.enemydamage').html("+" + eshield +" HP")
      setTimeout(function(){$('.enemydamage').html(" ")},1000)}
    eapplyChange(ecurHealth,atp);
  }
  //TURNS
  $(".dmg").click(function() {
    ChooseEnemy()});
  $(".defend").click(function() {
    Heal(30)})
   $(".abb").click(function() {
  ShowAbb()});
  $(".abb1").click(function() {
    ShowStance()})
  
   function EnemyTurn(){
    $( "#e" ).unbind( "mouseenter mouseleave click" )
    $('#text').css("color","white")
    $(".options").hide(4000)
    $(".dmg").off()
    $(".defend").off()
    $(".abb").off()
    $(".abb1").off()
    ChooseAtt()}
  
   
  function Laugh(){$('#text').html("Bobitza rade de prostia ta..."); Stopsound(); haha.play(); setTimeout(function(){haha.pause()},3000)}
 
  
    function ChooseAtt()
  { 
    if(phase==1){
    let rando = Math.floor(Math.random()*100)
    if(rando<30 && rando>0){
    setTimeout(function(){Damageplayer(8);$('#text').html("Bobitza iti da una peste fatau...");
    },2000)}
    if(rando<50 && rando>30){setTimeout(function(){Shieldenem()
    },2000)}
    if(rando>50 && rando<60){setTimeout(function () {Damageplayer(20)},2000)}
    if(rando>60 && rando<90 ){setTimeout(function () {Damageplayer(15)},2000)}
    if(rando<=100 && rando>90){
      setTimeout(function(){Laugh();
      },2000)}

      $(".options").show(2000) 
      setTimeout(function(){
        $('#text').html("")
        $(".dmg").click(function() {
          ChooseEnemy()});
        $(".defend").click(function() {
          Danseaza()
          })}, 4000)}

          if(phase==2){
            let rando = Math.floor(Math.random()*100)
            if(rando<30 && rando>0){
              setTimeout(function(){Damageplayer(12);$('#text').html("B0b1tz4 1 iti trage una...");
              setTimeout(function(){$('#text').html("B0b1tz4 2 se uita in sufletul tau...");
              setTimeout(function(){Damageplayer(7);$('#text').html("B0b1tz4 3 da un picior in cap...");},2000)
            },2000)
              
              },3000)}
              if(rando<60 && rando>30){
                setTimeout(function(){Damageplayer(6);$('#text').html("B0b1tz4 1 iti trage una...");
                setTimeout(function(){Laugh();$('#text').html("B0b1tz4 2 rade...");
                setTimeout(function(){Damageplayer(8);$('#text').html("B0b1tz4 3 loveste...");},2000)
              },2000)
                
                },3000)}
                if(rando<=100 && rando>60){
                  setTimeout(function(){Laugh();$('#text').html("B0b1tz4 1 rade...");
                  setTimeout(function(){Damageplayer(25);$('#text').html("B0b1tz4 2 trage cu ochii :o");
                  setTimeout(function(){Laugh();$('#text').html("B0b1tz4 3 rade si el...");},2000)
                },2000)
                  
                  },3000)}
                  $(".options").show(6000) 
                  setTimeout(function(){
                    $('#text').html("")
                    $(".dmg").click(function() {
                      ChooseEnemy()});
                    $(".defend").click(function() {
                      Danseaza()
                      })}, 7000)
          }
          if(phase==3){ if(moarte==3){win=1;curHealth=0;applyChange(curHealth,atp); $('#text').html("Bobitza trage...")}; window.location.href="../cutsceen2.html"; }

          else if(moarte==2){$('#text').html("Bobitza pune tinta pe capul tau...");moarte=moarte+1}
          else if(moarte==1){$('#text').html("Bobitza se uita la tine...");moarte=moarte+1}
          $(".options").show(3000) 
                  setTimeout(function(){
                    $('#text').html("")
                    $(".dmg").click(function() {
                      ChooseEnemy()});
                    $(".defend").click(function() {
                      Danseaza()
                      })}, 4000)
        


    }
  
    function ShowAbb() { $('#text').html("Esti lipsit de talente bo$$, scuze...") }

function ChooseEnemy()
{ if(phase==1){
  $('#text').html("Da click pe cine vrei sa ataci!!!!!!!!!!!!")
  $('#text').css("color","red")
  $('#e').hover(function(){$('#text').html("BOBITZA")})
  $('#e').click(function(){$('#text').html("");$('#text').css("color","white");Damageenemy(60);})}
  if(phase==2){
    $('#text').html("CE SE INTAMPLA????")
    $('#text').css("color","red")
    $('#e').hover(function(){$('#text').html("b0b1tz4??")})
    $('#e').click(function(){$('#text').html("");$('#text').css("color","white");Damageenemy(60);})}
    if(phase==3){
      $('#text').html("kill bobby")
      $('#text').css("color","red")
      $('#e').hover(function(){$('#text').html("bobitza")})
      $('#e').click(function(){$('#text').html("");$('#text').css("color","white");Damageenemy(60);})}
  
}
 function PhaseII() {
  phase = phase+1;
  $( "#e" ).unbind( "mouseenter mouseleave click" )
  first.pause();
  psd.pause();
  $(".dialoguebox").css({"display":"none"}) 
  $("#spune").css({"display":"inherit"})
  emaxHealth=300;
  ecurHealth=emaxHealth;
  setTimeout(function(){
  $(".body").click(function(){
    $( ".body" ).unbind( "mouseenter mouseleave click" )
    $("#spune").css({"display":"none"})
    $("#e").css({"display":"none"})
    $(".body").css({"background-image":"linear-gradient(green , lime, green)"})
    Stopsound();
    haha.play();
    aaaaa.play();
   
    setTimeout(function(){ 
     document.getElementById("img").src="imagine/evil1.png"
      $(".body").css({"background-image":"linear-gradient(red , white, red)"});Stopsound();psd.play(); psd.loop=true;$(".dialoguebox").css({"display":""}); 
      
      document.getElementById("e").style.left = "-1px";
    $("#pi").css({"display":"inherit"})
    $("#pii").css({"display":"inherit"})
    $("#e").css({"display":""});
    curHealth=maxHealth;
    applyChange(curHealth,atp)
    $('#text').html("????")
    },4000)
    })},200)
  
 }
function FPhase(){
  phase = 3;
  $( "#e" ).unbind( "mouseenter mouseleave click" )
  psd.pause();
  first.pause();
  document.getElementById("img").src="imagine/geany.png"
  $("#pi").css({"display":"none"})
  $("#pii").css({"display":"none"})
  document.getElementById("e").style.left = "700px";
  $(".dialoguebox").css({"display":"none"}) 
  $("#ups").html("Gata joaca fraiere,tura urmatoare te sparg !")
  $("#spune").css({"display":"inherit"})
  emaxHealth=1000;
  ecurHealth=emaxHealth;
  setTimeout(function(){
    $(".body").click(function(){
      $( ".body" ).unbind( "mouseenter mouseleave click" );$("#spune").css({"display":"none"});
      $(".body").css({"background-image":"url(imagine/omg.png)"});Stopsound();audio.play(); audio.loop=true;$(".dialoguebox").css({"display":""}); 
     
    })

  },200)
}
function Danseaza(){
  if(atp==5){Heal(60); atp=0; applyChange(curHealth,atp);}
  else{$('#text').html("Ai nevoie de 5 tp ca sa dansezi")}
}
     
})
