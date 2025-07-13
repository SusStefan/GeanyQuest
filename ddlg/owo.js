$(document).ready(function(){$ = jQuery;
  var kmyself=new Audio("istoricded.mp3");
  var creepy=new Audio("creepy.mp3");
  var stat=new Audio("jumpscare.mp3");
  var rattle =new Audio("rattle.mp3");
  var buzz =new Audio("wrong.wav");
  var clic =new Audio("leclic.mp3");
  var aleg = new Audio("../Muzica/aleg.mp3");
  $("#scary").css("display","none");
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
 Choose()

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
      case 0:   PlayB(x);break
      case 1:   PlayB(x) ; break
      case 2:   PlayB(x) ; break;
      case 3:  document.getElementById("info").innerHTML ="nu il ai pe misteri geany boss scuze"; break;
      default: document.getElementById("info").innerHTML ="selectati un geany valid";
    
   }}
}
function StartTimer(x){
  if(x==0){tms=90}
  else if(x==1){tms=30}
  else if(x==2){tms=120}
  let sec = tms;
  setInterval(() => {
    $("#time").html(sec)
    if(sec!=0){sec=sec-1}
    else{Die()}
    
  }, 1000);
}
function PlayB(x){
  aleg.pause();
  $(".jimin").css("display","inherit");
  $("#key").css("display","inherit");
  $("body").css({"background-color":"pink"});
  kmyself.loop=true;
  kmyself.volume=0.3;
  kmyself.play();
  
  $("#ciuzo").css("display","none");
  $("body").css({"background-image":"url('weab.png')"});
  $("#uwus").css("display","inherit");
  $("#namer").html("MC (geany)");
  $("#text").html("Unde naiba sunt??? ce e cu picselii astia?")
  $('.jimin').click(function(){
    $("#namer").html("???");
  $("#text").html("omggg Geany !!! Esti asa un sussy baka !!!!! ma faci sa inrosesc !!!!!!!")
  $('.jimin').click(function(){
    $("#namer").html("MC (Geany)");
    $("#text").html("Cine dracu a spus asta?? Arata-te aratare ca o sa fie vai de capul tau de ...")
  $('.jimin').click(function(){
    $("#namer").html("Narrator");
    $("#text").html("Geany nici nu apuca sa termine propozita ca in fata lui apare o fata de o nespusa frumusete")
  $('.jimin').click(function(){
    $("#namer").html("Geanina");
    $("#omggu").attr("src", "Geanina.png");
    $("#text").html("B-B-B-Buna geany-san !! >~<")
    $('.jimin').click(function(){
      $("#namer").html("MC Geany");
      $("#text").html("...ahmmmm")
      $(".opt").css("display","inherit");
      $("#adin").html("Buna, iubirea vietii mele B) !");
      $("#dva").html("GEANINO, TU ESTI!WTFF?!?!?");
      $("#tri").html("Doamne, ce creatura scarboasa :barf:");
      $("#cettr").html("uwu, regina mea owo uwu");
   
        $('#coi').click(function(){
        $('#coi').unbind("click");
          $("#coi").css("display","none");
          $("#omggu").attr("src", "kms.png");
          $("#namer").html("Geanina");
        $("#text").html("AWWWW, ce kawaii esti, Geany-san !! vuv");
        $('.jimin').click(function(){
          $("#omggu").attr("src", "kms.png");
          $("#namer").html("Geany");
        $("#text").html("Geanino ce ai patit fa la fata, esti bine???");
        $('.jimin').click(function(){
          $("#omggu").attr("src", "kms.png");
          $("#namer").html("Geanina");
          kmyself.pause();
          creepy.loop=true;
          creepy.play();
          $("#text").css("font-family","Impact") 
        $("#text").html("Awww awww, ma faci sa faci sa innrosssesc Buna Geany-san , uw smc jscbb");
        $('.jimin').click(function(){
         
          $("#omggu").attr("src", "kms.png");
          $("#namer").html("Geani");
          $("#text").css("font-family","Brush Script MT") 
        $("#text").html("... CE NAIBA SE INTAMPLA !?!?!?!?!?!?!?");
        $("body").css({"background-image":"url('uhhh.png')"});
      
        $('.jimin').click(function(){
          $('.jimin').unbind("click");
          
          creepy.pause();
          $("#scary").css("display","inherit");
          stat.play();
        setTimeout(function(){
          stat.pause();
          creepy.play();
          $("#namer").html("m4j1nn");
          $("#omggu").attr("src", "kms.png");
        $("#text").html("k̵͓̫͉̟̪̽̄̀̈̈́̂̒̓̕͝ȩ̴̼͖̭͆̇̈ͅẏ̶̧̢̢̡̝̖͕̜͓̲̻̮͑̽ ̸̲̖̘̦͒͌.̷̨̣̟͉͓͍͈̗̼̺͒̓͛̓͛͊̏̃͜.̴̘̱̗̠̓");
        $("#scary").css("display","none");
          $("body").css("background-color","gray");
          $(".jimin").css("background-color","black");
          $(".jimin").css("border","10px solid gray");
          setTimeout(function(){
            creepy.pause();
            $("#scary").css("display","inherit");
            stat.play();
            setTimeout(function(){
              stat.pause();
              creepy.play()
              $("#namer").html("m4j1nn");
              $("#omggu").attr("src", "uh oh.png");
              $("#text").html("k̵͓̫͉̟̪̽̄̀̈̈́̂̒̓̕͝ȩ̴̼͖̭͆̇̈ͅẏ̶̧̢̢̡̝̖͕̜͓̲̻̮͑̽ ̸̲̖̘̦͒͌.̷̨̣̟͉͓͍͈̗̼̺͒̓͛̓͛͊̏̃͜.̴̘̱̗̠̓ ̷̛̪̭̿͑͗̅͒́̎̂͘͝G̶̢͎̮̤͚̖̰̗̯̦͘Ọ̸̗͈̠̈͊̐̀Ń̸͕͚̬̫͚̖͎̖̗̝̝̟͌̿͐͒͆̓̍̓́̕͝È̵̡̡̧̢̧̮̟͎̲̤͕̝̈́̀̈́̅̌̂̓̚͜͠ͅ ̸̲̖̘̦͒͌.̷̨̣̟͉͓͍͈̗̼̺͒̓͛̓͛͊̏̃͜.̴̘̱̗̠̓");
              $("#scary").css("display","none");
            setTimeout(function(){ creepy.pause();
              $("#scary").css("display","inherit");
              stat.play();
              setTimeout(function(){
                stat.pause();
                kmyself.loop=true;
                kmyself.play();
                $("#omggu").attr("src", "Geanina.png");
                $("#namer").html("Geanina");
                $("body").css({"background-image":"url('weab.png')"});
                $("#text").html("Geany-san !!! Esti bine????? Parca ai vazut o fantoma /. w .\\");  
                $("#scary").css("display","none");
                $("body").css("background-color","pink");
                $(".jimin").css("background-color","plum");
                $(".jimin").css("border","10px solid white");
            
                $('.jimin').click(function(){
                  $("#namer").html("Geani");
                  $("#text").html("Mamaaaa, cred ca m-am cacat pe mine");  
                  $('.jimin').click(function(){
                    $("#namer").html("Geanina");
                    $("#omggu").attr("src", "mad.png");
                  $("#text").html("GEANY BAKA !!! Cum poti sa spui asemnea cuvinte urate >:3");  
                    $('.jimin').click(function(){
                      $("#namer").html("Geani");
                      $("#text").html("AAAA, voiam sa zic cacalica cu funditze, fa"); 
                      $('.jimin').click(function(){
                        $("#namer").html("Geanina");
                        $("#omggu").attr("src", "Geanina.png");
                      $("#text").html("Nu pot ramane suparata pe tine, Geany-kun !!!! Ma duc sa iti iau pantaloni de schimb uwu!!!"); 
                      $('.jimin').click(function(){
                        $("#omggu").css("display","none");
                        $("#namer").html("Geani");
                      $("#text").html("Pfeu, hai ca a plecat creatura asta... asta nu e Geanina... e un d-ala, bampir sau ceva");
                      $('.jimin').click(function(){
                        kmyself.pause()
                        creepy.play()
                        $("#text").html("NU DIN NOU, SA VA IAU LA PICIOA-");
                      $("body").css({"background-image":"url('uhhh.png')"});
                      $('.jimin').click(function(){
                      Exe()
                })})})})})})})
              },1000)
            },400)
            },1000)
          },2000)
        },1000)
      })})})})}) 

     
     })
  })})})})}
function Exe(){ $("#ciuzo").css("display","none");

  $("#timer").css("display","inherit");
  StartTimer(x);
  $('#uwus').unbind("click")
                      kmyself.pause();
                      creepy.pause()
                      stat.play();
                      $("#scary").css("display","inherit");
                      setTimeout(function(){
                        const blur_elem = document.getElementById( "blur-around" );
document.onmousemove = (evt) => {
  blur_elem.style.transform = `translate(${evt.clientX}px, ${evt.clientY}px)`;
};
                        $("body").css("background-color","black");
                       stat.pause();
                       let key = 0;
                       let room = 1;
                       let holdkey=0;
                       let open=0;
                       let fixed=0;
                       let eye=0;
                       let holdeye=0;
                       let jumpscare=1
                       let grabbed=0;
                       creepy.pause()
                       creepy.loop=true;
                       creepy.play();
                       $("#scary").css("display","none");
                       $("#blur-around").css("display","inherit");
                       $(".jimin").css("display","none");
                       $("#eye").css("display","none");
                       $("body").css({"background-image":"url('uhh.png')"});
                       $("#items").css("display","inherit");
                       $("#papers").css("display","inherit");
                       $("#keyhole").css("display","inherit");
                       $("#move-right").css("display","inherit");
                       $("#papers").click(function(){Anul()
                        $("#move-back").css("display","inherit");
                        $("#papers").css("display","none");
                       $("#keyhole").css("display","none");
                       $("#move-right").css("display","none");
                       $("#key").css("display","none");
                       $("body").css({"background-image":"url('pages.png')"});
                       })
                       $("#key").click(function(){
                        $("#key").css("display","none");
                        $("#main-item").css("background-image","url(keyy.png)");
                        key=1;
                        rattle.play();
                        grabbed=1;
                       });
                       $("#main-item").click(function(){
                         if(key==1){$("#main-item").css("border","3px solid yellow")
                         holdkey=1;}
                         else if(eye==1){$("#main-item").css("border","3px solid red")
                         holdeye=1;}
                       })

                       $("#broken").click(function(){
                        
                        if(fixed==0){
                          if(holdeye==1){
                            $("#main-item").css("background-image","url('blac.png')");
                            rattle.currenttime=0;
                          rattle.play(); fixed=1;eye=0;
$("body").css("background-image","url('key1.png')");
Anul()}
else{buzz.play()}
}
                         
                         else{Type(2)}
                         })

                       $("#keyhole").click(function(){Anul()
                        if(open==0){
                        if(holdkey==1){
                          $("#main-item").css("background-image","url('blac.png')");
                          rattle.currenttime=0;
                        rattle.play(); $("#keytext").html("Ai deschis sertarul");open=1;key=0}
                        else{$("#keytext").html("Nu ai cheia")}
                        setTimeout(function(){$("#keytext").html(" ")},2000)}
                        else{
                          $("#move-back").css("display","inherit");
                          if(eye==0){
                          $("#eye").css("display","inherit");}
                          else{$("#eye").css("display","none");}
                          $("#papers").css("display","none");
                       $("#keyhole").css("display","none");
                       $("#move-right").css("display","none");
                       $("#key").css("display","none");
                       $("body").css({"background-image":"url('drawer.png')"});
                        }
                       });
                       $("#eye").click(function(){eye=1;$("#eye").css("display","none");
                      rattle.currentTime=0;
                    rattle.play();
                    $("#main-item").css("background-image","url(ey.png)");
                    })
                       $("#move-back").click(function(){
                         if(eye==1 && jumpscare==1){$("#omggu").css("display","inherit");
                           $("#omggu").attr("src", "mad.png");
                          setTimeout(function(){$("#omggu").css("display","none"); jumpscare=0},500)
                         }
                         Anul()
                        creepy.pause();
                        creepy.play();
                        if(room==1){
                          $("#move-back").css("display","none");
                          $("#eye").css("display","none");
                          $("#papers").css("display","inherit");
                         $("#keyhole").css("display","inherit");
                         $("#move-right").css("display","inherit");
                         if(grabbed==1){
                          $("#key").css("display","none");}
                          else{$("#key").css("display","inherit");}
                         $("body").css({"background-image":"url('uhh.png')"});

                        }
                        if(room==2){ $("#move-back").css("display","none");
                        $("#keypad").css("display","inherit");
                        $("#door").css("display","inherit");
                        $("#u").css("display","none");
                        $("#screen").css("display","none");
                        $("#uuu").css("display","none");
                        $("#broken").css("display","none");
                        $("#move-left").css("display","inherit");
                        $("body").css({"background-image":"url('door.png')"});
                      }
                       })
                       $("#move-right").click(function(){Anul()
                         creepy.pause();
                         creepy.play();
                         room=2;
                        $("body").css(
                          {"background-image":"url('door.png')"});
                        $("#move-right").css("display","none");
                        $("#move-left").css("display","inherit");
                        $("#papers").css("display","none");
                        $("#keypad").css("display","inherit");
                        $("#keyhole").css("display","none");
                        $("#key").css("display","none");
                       });
                       
                       $("#move-left").click(function(){Anul()
                         room=1
                        creepy.pause();
                        creepy.play();
                        $("body").css({"background-image":"url('uhh.png')"});
                        $("#move-right").css("display","inherit");
                        $("#move-left").css("display","none");
                        $("#papers").css("display","inherit");
                        $("#keypad").css("display","none");
                        $("#keyhole").css("display","inherit");
                        if(grabbed==1){
                          $("#key").css("display","none");}
                          else{$("#key").css("display","inherit");}
                       })
                       $("#u").click(function(){
                         if(fixed==0){buzz.currentTime=0;buzz.play()}
                         else{Type(1);}
                       })
                       $("#uuu").click(function(){
                        if(fixed==0){buzz.currentTime=0;buzz.play()}
                        else{Type(3);}
                      })
                       $("#keypad").click(function(){
                        $("#move-back").css("display","inherit");
                        $("#keypad").css("display","none");
                        $("#move-left").css("display","none");
                        if(fixed==0){$("body").css({"background-image":"url('key2.png')"});}
                        else{$("body").css({"background-image":"url('key1.png')"});}
                        
                        $("#u").css("display","inherit");
                        $("#screen").css("display","inherit");
                        $("#uuu").css("display","inherit");
                        $("#broken").css("display","inherit");
                       })
                      },600)
}
function Anul(){
  holdkey=0;
  $("#main-item").css("border","3px solid white")
}
let gg=0
function Type(abc){
  let info="";
  let i=0;
  switch(abc){
  case 1: info="<img class='cards' id='zece' src='unus.png'/>";i=1;gg=gg+1;break;
  case 2: info="<img class='cards' id='zece' src='eyeus.png'/>";i=2;gg=gg+1;break;
  case 3: info="<img class='cards' id='zece' src='treius.png'/>";i=3;gg=gg+1;break;
  }
  if(gg<5){
  $("#screen").append(info);}
  else{$("#unus").remove();
  $("#treius").remove();
  $("#eyeus").remove();
  $("#u").css("display","none");
                        $("#screen").css("display","none");
                        $("#uuu").css("display","none");
                        $("#broken").css("display","none");
                        $("#blur-around").css("display","none");
                        $("#move-back").css("display","none");
                        $("#timer").css("display","none");
                        $("#items").css("display","none");
                        $(".items").css("display","none");
                        $("body").css({"background-image":"url('END.jpg')"})
stat.play();
setTimeout(function(){$("#omggu").css("display","inherit"); $("#omggu").attr("src", "uh oh.png");},2700)
setTimeout(function(){stat.pause();window.close()},3000)
}
  alert(code)
  clic.play();
  clic.currentTime=0;
  code=code*10+i;
  CheckCode(code)
}
function Die(){$("#blur-around").css("display","none");
$(".jimin").css("display","none");
$("#uwus").css("background-color", "black");
$("#omggu").attr("src", "6666.png");
  $("#omggu").css("display","inherit"); 
  $("body").css("background-color", "black");
  
  stat.play
  $("#namer").html("MNSBUJSVWUVC");
                      $("#text").html("ģ̷̧̧̧̮̳͇̤̺̬͈̳͈̳̮͙̰̮͎̠͔͓̻̺̮̪͔͓̲̟͒̌̇̔̈́́̉̄̓̀̀͊̃̋́͂͋̌͋̀̈́͆̅̕͝e̷̦̲̖̖̟̭̳͎̩̻̖̱͑̆͗̈͑̿͑̽̽͜ā̴̧̡̨̨̛͓̭̳̹̫͙̥̝̟̪̣̼̦̣̟̻̞̟̰͕͇͉̺̦̹̞̤̱̰̟̞̳̖̺̌͂͋͗̈́̒̊͜ͅṋ̴͙̥͉͈̬̤̿̊̈́̈́̀̽͒͌̿̏̒̊̋̈́̆̈̾̀͗̄̔̀̑̅̄̈́̈͋̊̎̔̉̉̽̓̕͝͝ỷ̵̜͎̪̯̭͉̤͚̯͖̲̺̻͔̦͔͆͑̈̓̎̊͒̂̏̾̀̀̀̊̈́̒̒̾̒̿̈́̐͑͘͠͝ͅý̵̨̘̻̠̖̳͋̓́̎̀̆̉͂̓͌̽͋̂̎͆̅̽̔̀̈́̂͐́̓̓̊̇̍͐̔̆̕̕͝y̸̨̖̲̠̙̝͈͊̅̾̔̀̅͌͊̀̏̾͋̉̒̓̿̃̿̏̃̈́͆̔̅͌̄̏̾̏̈́͊͘͜͠͝ÿ̷̢̨̡̡͙̠̼̞̤̮̲̯̣̻̼̙̞̝̲͓̖̹͈̜̠͉̣͕͍͉͕̮̞͈́́̓̆̽̀͋͐̌͠y̴̧͈͎̟̗̰̜̯̓̔̇̑̆̋͒̐͒͘̕͝ ̷̢̡̨̡̢͖̯̗͉̙̪͓̱̬͚̥͉̥̗̹͓͉̙͎̐̀̆̌̌̃͒̄̉͂̐͒̀͋̋͊̒̾̔͋̒̔̃̽̓͒̆́̚͠͝ͅh̶̨̦̞͚̖̜͓͓̺̥̣͍̎̅̽̈̂̐́̈́̕̚͜͝͝͝ȃ̷̢̛͔̲͖̣̲̣̥͇̘̲̼̹͉̥̯͔̞̙̯̳̎̐̇̓̈́̽̑̂̆̍̉͂̓̄̉̚̚͝h̶̛̛̟̳̹͓͉͍͍̤͕̹̟͋͊͊̄̇̽̾̒̈͋͌͒̈͐͐̄̊͛͛̂̏͗͐̿̉͜͝͝͝a̸̘͂̑̑̀̂̔̇̈́̅̀͋̽̉̐̑̿̽̈́͌̓̎͛̉͘͘͠͝ḩ̵̢̧̛̭̫̰̹̣͓̤̰̯̻̮̦͙̬̲̹̪̥̦̥̯͙̰̬͈̩̜̠̯͙̘͖̙͎͖̰̭́̊͑́̈́̇͋͗̔͐͆́͆̅̊̊̎͂̂̅͌̀͌̽̂̽͐̇̿͐͛̊̐̄͠͝a̸̩̰͑h̴̢̧̛̛͖͕͇̗͇̰̰̬̼̳̰̠̣͖̙͍͈̮͊͋̉̃̊̇̋̈́͂̋̈́̆̍̓̾͊͂̀̃͌̆̀̀̈́̑͂̓̽̄͒̈̔͘̚͘͝͝͝ȁ̵̢͎̠̤̓̔̎̉͑̈́̚̚͘̕ḧ̸̨͕̫̰̹̘̩̹̙̻̣̥̲̯̙̼̖͔̫͈̳̦̖͕̣̼̣̜́͑̍́̈́̽̉̽͌̃̓̐̏̀̑͒̀͐̒̆̄̉̐̇͑̿͂̀̊̔̕̚̕̕̕͝͝a̷̡̡̨̛̹̱̣̠̹͎͙̳͙̖̤̲̳͚̗͕̼̹͎̖̭̝͚̰̱̞͊̽͒̇͋̌̍͗̍͊͊͛̊̐̊̈́͑̈́̑̾̋͘͝͠͝͠ͅh̶̡̛̻͓͙͔͔͔̻̙̭͔̯̹͇̬͈͉̖̳̩̻͍͕̬͕͌̆̉̈́̓̒͒͌͗͂̒̆͊̆͗̈́̓͌̊̾̒́̑̋̎̑̂͛̕̚͜͝͠ͅả̷̳̆̍̈̎̆͒͒̈́͆̅̓ȟ̷̛̛̺͒͑̈̃̀͒̀̈́̒͑̋̎̀̔̅̈́́̚͝a̶̧̧̨̗͖̼̰̫͙̫͎͉̱̹͚͇̣̪͖̼͉̙̫͓̙͎̜͈͉̯͉̲̼̼̱͉̩̐͋̐̒͂̆̓̕͜ͅͅa̸̧̛̤̗̠̗̺̞̞͎̪̼̤̋̈́͒͒̒̇̌͑̔́̍͑̆͗̅̔̐̈́̾͛̉̓̑̓͑̽͗̅̕͜͠͝͝͝a̷̢̢̨̡̡̙̫̯̘͕̗̯͓̙̣͓̼̥̹̍́͛͒͒͋̂͐̀͒̅͑̂́́͒̀̓̍̌̌̑̾̊͜͠͝ͅ");
              ;
  setTimeout(function(){window.close();},1000) 
}

})