
  var cut = new Audio("../no.mp3");
  cut.loop=true;
  cut.play();
$("body").click(function(){  
  $("#personaj").css("background-image","url('../prot.png')");
  $("#textbox").css("border","10px solid red");
  $("#txt").html("Geany: Cu cine vorbesti, bobtiza?");
  $("#txt").css("color","purple");
  $("body").click(function(){  
    $("#personaj").css("background-image","url('../bobita.png')");
  $("#textbox").css("border","10px solid red");
  $("#txt").css("color","green");
  $("#txt").html("Bobitza: Pai nu il vezi... e Dorel... e viu ");

    $("body").click(function(){  
      $("#personaj").css("background-image","url('dorel.png')");
      $("#textbox").css("border","10px solid rgb(82, 0, 82)");
      $("#textbox").css("background-color","purple");
      $("#txt").html("Dorel????:Buna geany, ne intalnim din nou ");
      $("body").click(function(){  
        $("#personaj").css("background-image","url('../prot.png')");
        $("#personaj").css("background-size","cover");
        $("#textbox").css("border","10px solid red");
        $("#textbox").css("background-color","wheat");
        $("#txt").html("Geany: Tu nu esti dorel !!!! PFOAI PAI DACA NU IL DAI PE DOREL INAPOI E VAI DE CAPUL TAU!!!");
        $("body").click(function(){  
       
        
               
              $("#personaj").css("background-image","url('dorel.png')");
       
        $("#personaj").css("background-image","url('dorel.png')");
        $("#textbox").css("border","10px solid rgb(82, 0, 82)");
        $("#textbox").css("background-color","purple");
        $("#txt").html("Dorel???: eu sunt geani... dar mi-am descoperit adevaratul potential. Acum eu fac combinatiile");
        $("body").click(function(){ c=1; 
          $("#personaj").css("background-image","url('../prot.png')");
          $("#textbox").css("border","10px solid red");
          $("#textbox").css("background-color","wheat");
          $("#txt").html("Geany: Pfuaiiii, pai eu zic ca e vai de capul tau. Hai bobitza sa-l batem pe fraier ");
          $("body").click(function(){  
            $("#personaj").css("background-image","url('../componente/imagine/geany.png')");
            $("#txt").css("color","green");
            $("#txt").html("Bobitza: ba geany eu zic sa stai naibii cuminte ! cum sa il bati pe dorel??");
            $("body").click(function(){  
              $("#personaj").css("background-image","url('../prot.png')");
              $("#txt").css("color","purple");
              $("#txt").html("Geany: ??????????????????????????????????????????????????????????");
              $("body").click(function(){ 
                $("body").unbind("click");
                  Playing();
                  
                
            
      })})})})})})})})})
function Playing(){$("#first").css("display","none");
cut.pause();
  var caca = new Audio("caca.mp3");

  caca.volume=0.3;
  caca.loop=true;
  caca.play();
let card1=0
let card2=0
let card3=0
let type1=0
let type2=0
let type3=0;
$("body").css("background-image","url('xddd.jpg')");
$(".displai").css("display","inherit");
$("#kk").css("display","inherit");
$("#first").css("display","none");
$("#geany").css("display","inherit");
$("#dorica").css("display","inherit");
$("#bobitza").css("display","inherit");
$("#fight").css("display","inherit");
$("#one").css("display","inherit");
$("#two").css("display","inherit");
$("#three").css("display","inherit");


let mana=6;
let rands;
let etype=0;
let aheal=0;
let faza =1;
let maxhealth=10;
let health=maxhealth;
let emaxhealth=20;
let ehealth=15;
let stun=0;
let dodge=0;
let cooldown=0;

card1=1;type1=1;$("#one").css("background-image","url('decks/BackCard.png')");
$("#jhp").html(health+"/"+maxhealth);
$("#jehp").html(ehealth+"/"+emaxhealth);
EnemyDeclare()
function EnemyDeclare()
{
  if(faza==1) rands = Math.floor(Math.random()*3)
  else{
    cooldown++;
    $("#dore").html(" ");
    $("#geanis").html(" ");
    if(cooldown==3){ rands = 4;
      card4=1;
      $("#four").css("background-image","url(decks/BackSpecial.png");
      $("#dore").html("Gata cu combinatiile !");
      $("#geanis").html("Caca maca, nu prea cred !");
    cooldown=0;}
    else{rands = 5;

    }
   }
 switch(rands){
case 0: etype=1;break;
case 1: etype=2;break;
case 2: etype=3;break;
case 4: etype=4;break;
case 5: etype=5;break;
default: etype=3;
 }
}
$("#fight").click(function(){
  if(mana<=3){
    mana=mana+3;
  }
else{mana=6;}
  UpdateMana(mana);
 if(etype==1 && stun==0 && faza==1){
  if(health>3){
    health-=3;$("#jhp").html(health+"/"+maxhealth);
  }
  else {location.reload();} 
  
  }
 else if(etype==2 && stun==0 && faza==1){

  if(aheal==0){
  if(ehealth<=13){
    ehealth=ehealth+7;
    $("#jehp").html(ehealth+"/"+emaxhealth);
    stun =0;
    $("#stuyn").css("display","none");
  }
  else{ehealth=emaxhealth;$("#jehp").html(ehealth+"/"+emaxhealth);} 
 }}
 else if(etype==4 && dodge==0)
 {
  health-=999999;$("#jhp").html(health+"/"+maxhealth);
  location.reload();
  
 }
 else if(etype==5 && dodge==0)
 {
  health-=2;$("#jhp").html(health+"/"+maxhealth);

 }
 EnemyDeclare();
 if(card1==0 ||card2==0 ||card3==0){
Draw(1);
 }
 dodge=0;
 stun =0;
 aheal=0;
  $("#stuyn").css("display","none");
});
function UpdateMana(mana){
if(mana>6){mana=6;}
switch(mana){
  case 6: $("#man").html("$$$$$$");break;
  case 5: $("#man").html("$$$$$-");break;
  case 4: $("#man").html("$$$$--");break;
  case 3: $("#man").html("$$$---");break;
  case 2: $("#man").html("$$----");break;
  case 1: $("#man").html("$-----");break;
  default:$("#man").html("------");
}

}
$("#dorica").hover(function(){  $("#ca").html(" ");
  if(etype==4){$("#eimag").css("background-image","url('decks/instakill.png')")}
  else if(etype==5){$("#eimag").css("background-image","url('decks/cdd.png')")}

},function(){
  $("#eimag").css("background-image","url('../ddlg/blac.png')");
  $("#ca").html("Da hover pe inamic ca sa vezi ce carte foloseste runda asta!")  
})
  $("#bobitza").hover(function(){
  $("#ca").html(" ");
if(etype==1){$("#eimag").css("background-image","url('decks/edamage.png')")}
else if(etype==2){$("#eimag").css("background-image","url('decks/eheal.png')")}
else if(etype==3){$("#eimag").css("background-image","url('decks/bobosit.png')")}
},function(){$("#eimag").css("background-image","url('../ddlg/blac.png')");
$("#ca").html("Da hover pe inamic ca sa vezi ce carte foloseste runda asta!")
})

$("#one").hover(function(){
  if(card1==1){
  if(type1==1){$("#imag").css("background-image","url('decks/draw.png')")}
  else if(type1==2){$("#imag").css("background-image","url('decks/mana.png')")}
  else if(type1==3){$("#imag").css("background-image","url('decks/stun.png')")}
  else if(type1==4){$("#imag").css("background-image","url('decks/hd.png')")}
  else if(type1==5){$("#imag").css("background-image","url('decks/heal.png')")}
  else if(type1==6){$("#imag").css("background-image","url('decks/damage.png')")}
  else if(type1==7){$("#imag").css("background-image","url('decks/discard.png')")}
  else if(type1==8){$("#imag").css("background-image","url('decks/stuner.png')")}
  else if(type1==9){$("#imag").css("background-image","url('decks/ah.png')")}
  $("#one").css("border","7px solid red")}
},function(){$("#imag").css("background-image","url('../ddlg/blac.png')");$("#one").css("border","7px solid limegreen")})

$("#two").hover(function(){
  if(card2==1){
  if(type2==1){$("#imag").css("background-image","url('decks/draw.png')")}
  else if(type2==2){$("#imag").css("background-image","url('decks/mana.png')")}
  else if(type2==3){$("#imag").css("background-image","url('decks/stun.png')")}
  else if(type2==4){$("#imag").css("background-image","url('decks/hd.png')")}
  else if(type2==5){$("#imag").css("background-image","url('decks/heal.png')")}
  else if(type2==6){$("#imag").css("background-image","url('decks/damage.png')")}
  else if(type2==7){$("#imag").css("background-image","url('decks/discard.png')")}
  else if(type2==8){$("#imag").css("background-image","url('decks/stuner.png')")}
  else if(type2==9){$("#imag").css("background-image","url('decks/ah.png')")}
  $("#two").css("border","7px solid red")}
},function(){$("#imag").css("background-image","url('../ddlg/blac.png')");$("#two").css("border","7px solid limegreen")})

$("#three").hover(function(){
  if(card3==1){
  if(type3==1){$("#imag").css("background-image","url('decks/draw.png')")}
  else if(type3==2){$("#imag").css("background-image","url('decks/mana.png')")}
  else if(type3==3){$("#imag").css("background-image","url('decks/stun.png')")}
  else if(type3==4){$("#imag").css("background-image","url('decks/hd.png')")}
  else if(type3==5){$("#imag").css("background-image","url('decks/heal.png')")}
  else if(type3==6){$("#imag").css("background-image","url('decks/damage.png')")}
  else if(type3==7){$("#imag").css("background-image","url('decks/discard.png')")}
  else if(type3==8){$("#imag").css("background-image","url('decks/stuner.png')")}
  else if(type3==9){$("#imag").css("background-image","url('decks/ah.png')")}
  $("#three").css("border","7px solid red")}
},function(){$("#imag").css("background-image","url('../ddlg/blac.png')");$("#three").css("border","7px solid limegreen")})

$("#four").hover(function(){
  if(card4==1){
    $("#imag").css("background-image","url('decks/true.png')");
    $("#four").css("border","7px solid red")
  }
},function(){$("#imag").css("background-image","url('../ddlg/blac.png')");$("#four").css("border","7px solid limegreen")})

$("#four").click(function(){
if(card4==1){
  dodge=1;
  card4=0;
  $("#four").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
}  
})
$("#one").click(function(){
  if(card1==1){
  if(type1==1 && mana>=3){
  type1=0;
  card1=0;
  $("#one").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
  mana=mana-3;
        UpdateMana(mana);
  Draw(2);
  }
  else if(type1==2){mana=mana+1;UpdateMana(mana);type1=0;
    card1=0;
    $("#one").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");}
  else if(type1==3 && mana>=2){type1=0;
    card1=0;
  Stun(50);
  $("#one").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
  }

  else if(type1==4 && mana>=4){type1=0;
    card1=0;
    mana=mana-4;
    UpdateMana(mana);
    if(faza!=2){
      if(ehealth>=4){ehealth=ehealth-4;}
      else{ehealth=0;}}
      else{ dhealth=dhealth-4; if(dhealth<=0){Cutsceen()}
      $("#jdhp").html(dhealth+"/"+dmaxhealth);}
    if(ehealth==0){NextPhase()}
    if(health<=8){health+=2;}
    else{health=maxhealth;}
    $("#jhp").html(health+"/"+maxhealth);
    $("#jehp").html(ehealth+"/"+emaxhealth);
UpdateMana(mana);

  $("#one").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
  }

  else if(type1==5 && mana>=4){type1=0;
    card1=0;
    mana=mana-4;

    UpdateMana(mana);
  if(health<=5){
    health=health+5;
  }
  else{health=maxhealth;}
  $("#jhp").html(health+"/"+maxhealth);

  $("#one").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
  }

  else if(type1==6 && mana>=2){type1=0;
    card1=0;mana=mana-2;
    UpdateMana(mana);
    if(faza!=2){
      if(ehealth>=3){ehealth=ehealth-3;}
      else{ehealth=0;}
      if(ehealth==0){NextPhase()}}
      else{ dhealth=dhealth-4; if(dhealth<=0){Cutsceen()}
      $("#jdhp").html(dhealth+"/"+dmaxhealth);}
  
$("#jehp").html(ehealth+"/"+emaxhealth);

  
  $("#one").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
  }

  else if(type1==7 && mana>=1){
    if(card2==1 && card3==1)
    { type1=0;
      card1=0;
      type2=0;
      card2=0;
      type3=0;
      card3=0;
      $("#one").css("background-image","url('../ddlg/blac.png')");
      $("#two").css("background-image","url('../ddlg/blac.png')");
      $("#three").css("background-image","url('../ddlg/blac.png')");
      mana=mana-1;
      UpdateMana(mana);  
     if(faza==1){
       if(ehealth>4){ehealth=ehealth-4;}
       else{ehealth=0; NextPhase();}
       $("#jehp").html(ehealth+"/"+emaxhealth);
     }
     else{
      if(dhealth>4){dhealth=dhealth-4;}
      else{dhealth=0; Cutsceen();}
      $("#jdhp").html(dhealth+"/"+dmaxhealth);}
  
      
     }
    


  $("#imag").css("background-image","url('../ddlg/blac.png')");
  }

  else if(type1==8 && mana>=4){
    type1=0;
    card1=0;
  Stun(100);
  $("#one").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
  }
  else if(type1==9 && mana>=3){
    card1=0;
    type1=0;
    mana=mana-3;
    aheal=1;
    UpdateMana(mana);
    $("#one").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");   }    
  }
})

$("#two").click(function(){
  if(card2==1){
  if(type2==1 && mana>=3){
  type2=0;
  card2=0;
  $("#two").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
mana=mana-3
   
        UpdateMana(mana);
  Draw(2);
  }   
  else if(type2==2){mana=mana+1;UpdateMana(mana);  
    type2=0;
    card2=0;
    $("#two").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");}
    else if(type2==3 && mana>=2){
      type2=0;
      card2=0;
    Stun(50);
    $("#two").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
    else if(type2==4 && mana>=4){
      type2=0;
    card2=0;
    mana=mana-4;
    UpdateMana(mana);
    if(faza!=2){
      if(ehealth>=4){ehealth=ehealth-4; $("#jehp").html(ehealth+"/"+emaxhealth);}
      else{ehealth=0; NextPhase();   }}
      else{ dhealth=dhealth-4; if(dhealth<=0){Cutsceen()}
      $("#jdhp").html(dhealth+"/"+dmaxhealth);}
    if(health<=8){health+=2;}
    else{health=maxhealth;}
    $("#jhp").html(health+"/"+maxhealth);
   
    $("#two").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
  
    else if(type2==5 && mana>=4){
      type2=0;
      card2=0;
      mana=mana-4;

      UpdateMana(mana);
    if(health<=5){
      health=health+5;
    }
    else{health=maxhealth;}
    $("#jhp").html(health+"/"+maxhealth);
    $("#two").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
  
    else if(type2==6 && mana>=2){
      type2=0;
      card2=0;
      mana=mana-2;
  
      UpdateMana(mana);
    if(ehealth>=3){
      if(faza!=2){
        if(ehealth>=3){ehealth=ehealth-3;}
        else{ehealth=0;}
        if(ehealth==0){NextPhase()}}
      }
        else{ dhealth=dhealth-4; if(dhealth<=0){Cutsceen()}
        $("#jdhp").html(dhealth+"/"+dmaxhealth);}
$("#jehp").html(ehealth+"/"+emaxhealth);
    
    $("#two").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
  

      else if(type2==7 && mana>=1){
        if(card1==1 && card3==1)
        { type1=0;
          card1=0;
          type2=0;
          card2=0;
          type3=0;
          card3=0;
          $("#one").css("background-image","url('../ddlg/blac.png')");
          $("#two").css("background-image","url('../ddlg/blac.png')");
          $("#three").css("background-image","url('../ddlg/blac.png')");
          mana=mana-1;
          UpdateMana(mana);  
         if(faza==1){
           if(ehealth>4){ehealth=ehealth-4;}
           else{ehealth=0; NextPhase();}
           $("#jehp").html(ehealth+"/"+emaxhealth);
         }
         else{
          if(dhealth>4){dhealth=dhealth-4;}
          else{dhealth=0; Cutsceen()}
          $("#jdhp").html(dhealth+"/"+dmaxhealth);}
      
          
         }
        
    
    
      $("#imag").css("background-image","url('../ddlg/blac.png')");
      }
  
    else if(type2==8 && mana>=4){type2=0;
      card2=0;
    Stun(100);
    $("#two").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }  
    else if(type2==9 && mana>=3){
      card2=0;
      type2=0;
      mana=mana-3;
      aheal=1;
      UpdateMana(mana);
      $("#two").css("background-image","url('../ddlg/blac.png')");
      $("#imag").css("background-image","url('../ddlg/blac.png')");   }         
    }
})

$("#three").click(function(){
  if(card3==1){
  if(type3==1 && mana>=3){
  type3=0;
  card3=0;
  $("#three").css("background-image","url('../ddlg/blac.png')");
  $("#imag").css("background-image","url('../ddlg/blac.png')");
  mana=mana-3;
  UpdateMana(mana);
  Draw(2);}   
  else if(type3==2){mana=mana+1;UpdateMana(mana);  type3=0;
    card3=0;
    $("#three").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");}
    else if(type3==3 && mana>=2){type3=0;
      card3=0;
    Stun(50);
    $("#three").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
    else if(type3==4 && mana>=4){type3=0;
      card3=0;
      mana=mana-4;
      UpdateMana(mana);
      if(faza!=2){
        if(ehealth>=4){ehealth=ehealth-4;}
        else{ehealth=0;}}
        else{ dhealth=dhealth-4; if(dhealth<=0){Cutsceen()}
        $("#jdhp").html(dhealth+"/"+dmaxhealth);}
      if(health<=8){health+=2;}
      else{health=maxhealth;}
      $("#jhp").html(health+"/"+maxhealth);
      $("#jehp").html(ehealth+"/"+emaxhealth);
    $("#three").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
  
    else if(type3==5 && mana>=4){type3=0;
      card3=0;
      mana=mana-4;

      UpdateMana(mana);
    if(health<=5){
      health=health+5;
    }
    else{health=maxhealth;}
    $("#jhp").html(health+"/"+maxhealth);
    $("#three").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
  
    else if(type3==6 && mana>=2){type3=0;
      card3=0;
      mana=mana-2;

      UpdateMana(mana);
      if(faza!=2){
        if(ehealth>=3){ehealth=ehealth-3;}
        else{ehealth=0;}
        if(ehealth==0){NextPhase()}
      }
        else{ dhealth=dhealth-4; if(dhealth<=0){Cutsceen()}
        $("#jdhp").html(dhealth+"/"+dmaxhealth);}
$("#jehp").html(ehealth+"/"+emaxhealth);
  
    $("#three").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
  
    else if(type3==7 && mana>=1){
      if(card2==1 && card1==1)
      { type1=0;
        card1=0;
        type2=0;
        card2=0;
        type3=0;
        card3=0;
        $("#one").css("background-image","url('../ddlg/blac.png')");
        $("#two").css("background-image","url('../ddlg/blac.png')");
        $("#three").css("background-image","url('../ddlg/blac.png')");
        mana=mana-1;
        UpdateMana(mana);  
       if(faza==1){
         if(ehealth>4){ehealth=ehealth-4;}
         else{ehealth=0; NextPhase();}
         $("#jehp").html(ehealth+"/"+emaxhealth);
       }
       else{
        if(dhealth>4){dhealth=dhealth-4;}
        else{dhealth=0; Cutsceen()}
        $("#jdhp").html(dhealth+"/"+dmaxhealth);}
    
        
       }
      
  
  
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }
  
    else if(type3==8 && mana>=4){type3=0;
      card3=0;
    Stun(100);
    $("#three").css("background-image","url('../ddlg/blac.png')");
    $("#imag").css("background-image","url('../ddlg/blac.png')");
    }  
    else if(type3==9 && mana>=3){
      card3=0;
      type3=0;
      mana=mana-3;
      aheal=1;
      UpdateMana(mana);
      $("#three").css("background-image","url('../ddlg/blac.png')");
      $("#imag").css("background-image","url('../ddlg/blac.png')");   }        
  }
})


function Stun(y){
  if(y==50){ mana=mana-2;
    UpdateMana(mana);
    let r =Math.floor(Math.random()*2);
    if(r==0){stun=1;
      $("#stuyn").css("display","inherit");
    }
    else{stun=0;}
  }
  if(y==100){
    mana=mana-4;
    UpdateMana(mana);
    if(ehealth>1){ ehealth=ehealth-1;}
   else{NextPhase();}
   $("#jehp").html(ehealth+"/"+emaxhealth);
 stun=1;
 $("#stuyn").css("display","inherit");
  }
}
function Draw(x){
  
    if(card1==0){
      card1=1;type1=Math.ceil(Math.random()*9);
      if(x==2){  
        if(card2==0){card2=1; type2=Math.ceil(Math.random()*9); $("#two").css("background-image","url('decks/BackCard.png')");}
        else if(card3==0){card3=1; type3=Math.ceil(Math.random()*9); $("#three").css("background-image","url('decks/BackCard.png')");}
      }
      $("#one").css("background-image","url('decks/BackCard.png')");
     
      
     
    }
    else if(card2==0){
      card2=1;type2=Math.ceil(Math.random()*9);
      if(x==2){  
      if(card1==0){card1=1; type1=Math.ceil(Math.random()*9); $("#one").css("background-image","url('decks/BackCard.png')");}
      else if(card3==0){card3=1; type3=Math.ceil(Math.random()*9); $("#three").css("background-image","url('decks/BackCard.png')");}
      }
      $("#two").css("background-image","url('decks/BackCard.png')");
      type2=Math.ceil(Math.random()*9)
      
    }
    else if(card3==0){
      card3=1;
      type3=Math.ceil(Math.random()*9);
      $("#three").css("background-image","url('decks/BackCard.png')");
    }
if(faza==2){
  if(type1==3 || type1==8){type1=6; }
  if(type2==3 || type2==8){type2=6; }
  if(type3==3 || type3==8){type3=6; }
  if(type1==9 ){type1=4; }
  if(type2==9 ){type2=4; }
  if(type3==9 ){type3=4; }
}
}

function NextPhase() 
{  faza=2;
  $("#bobitza").css("display","none");
  $("#ehp").css("display","none");
  $("#dorica").css("right","30%");
  $("#dhp").css("left","1200px");
  health=maxhealth;
  dmaxhealth = 10;
  dhealth = dmaxhealth;
  $("#jhp").html(health + "/" +  maxhealth);
  $("#jdhp").html(dhealth + "/" +  dmaxhealth);
  $("#gean").css("display","inherit");
  $("#dor").css("display","inherit");
  $("#four").css("display","inherit");

}

function Cutsceen(){
  caca.pause();
cut.play();
  $(".displai").css("display","none");
  $("#kk").css("display","none");
  $("#first").css("display","inherit");
  $("#geany").css("display","none");
  $("#dorica").css("display","none");
  $("#bobitza").css("display","none");
  $("#fight").css("display","none");
  $("#one").css("display","none");
  $("#two").css("display","none");
  $("#three").css("display","none");
 
  $("#dor").css("display","none");
  $("#gean").css("display","none");
  $("#four").css("display","none");
  $("body").click(function(){  
    $("#personaj").css("background-image","url('../prot.png')");
    $("#textbox").css("border","10px solid red"); $("#txt").css("color","green");
    $("#txt").html("Geany: Daca l-ati vrut pe geany, l-ati primit pe geany aha aha aha!");
   
    $("body").click(function(){  
      $("#personaj").css("background-size","auto");
      $("#personaj").css("width","400px");
      $("#personaj").css("background-image","url('naked.png')");
      $("#textbox").css("border","10px solid red");  $("#txt").css("color","RED");
      $("#txt").html("Dorel: MOAAAMA GEANY CE MI S-A INTAMPLAT??? VALELEU VALELEUUUU");
    
  
      $("body").click(function(){  
        $("#personaj").css("background-size","cover");
        $("#personaj").css("width","600px");
        $("#personaj").css("background-image","url('../componente/imagine/bob.png')");
        $("#textbox").css("border","10px solid red");  $("#txt").css("color","purple");
        $("#txt").html("Bobitza: Nu imi vine sa cred ca m-ai batut, mai fraiere, of ce umilinta");

        $("body").click(function(){  
          $("#personaj").css("background-image","url('../prot.png')");
          $("#textbox").css("border","10px solid red"); $("#txt").css("color","green");
          $("#txt").html("Geany: V-am facut o combinatie de nu v-ati vazut ! Hai ! Acum ma ajutati sau maca maca?");   
          $("body").click(function(){  
            $("#personaj").css("background-image","url('../componente/imagine/bob.png')");
            $("#textbox").css("border","10px solid red");  $("#txt").css("color","purple");
            $("#txt").html("Bobitza:Da ma da, hai ca te ajutam. Codul e s");   
            
  })})})})})
}
}