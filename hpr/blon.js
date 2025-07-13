$(document).ready(function(){$ = jQuery;
  let page=0;
  let frame=0;
  let top1=500;
  let yayy = new Audio("yay.mp3");
  let vlad = new Audio("vlad.mp3");
  let done = new Audio("done.mp3");
  let clap = new Audio("clap.mp3");
yayy.play();
setTimeout(function(){
  $("#text").click(function(){
    page++;

    CheckPage(page)
  })
vlad.loop=true;
vlad.play();
},3000)


function CheckPage(page)
{
  if(page===1){
   
    $("#text").css("background-image","url(' ')");
    $("#p").html("Happy birthday, my chaotic buddy!");
    $("#sign").html("- Le tusk");
  }
  else if(page===2)
  {$("#p").css("font-size","40px");
  $("#sign").css("font-size","40px");
    $("#p").html("Sa ai parte de multe primogemuri si multe qiqi-uri");
    $("#sign").html("- Davalc");
  }
  else if(page===3)
  {
    $("#p").html("Trebuie sa treci prin foc ca sa stii in ce crezi. Cred in tine. La multi ani Roby!");
    $("#sign").html("- Poteto");
  }
  else if(page===4)
  {
    $("#p").html("La multi ani !");
    $("#sign").html("- Mihai");
  }
  else if(page===5)
  {
    $("#p").html("Iti urez multe clipe fericite si fructe de mare ^^ <3 <3");
    $("#sign").html("-Antonia ^^ ");
  }
  else if(page===6)
  {
    $("#p").html("La multi ani, geografie !1!!");
    $("#sign").html("-Fanu ");
  }
  else if(page===7)
  {
    $("#p").html("Te pupa geany si iti ureaza multe combinatii, daca stii ce zic ;) !!");
    $("#sign").html("-geany ");
  }


  else if(page===8)
  {$("#p").css("font-size","30px");
  $("#sign").css("font-size","30px");
    $("#p").html("La Multi Ani, Roby ! Sa ai parte numai de momente frumoase alaturi de cei dragi si sanatate multa! Sper ca ti-a placut surpriza pe care ti-am pregatit-o ! ");
    $("#sign").html("- Sussy ");
  }
  else if(page===9){
    $("#white").css("display","inherit");
  Finish()
  }
}
setInterval(animate, 5);
  function animate(){
    if(frame<1750)
  { frame++;
    top1=top1-0.5
    $("#unu").css("top",top1+"px");
    $("#trei").css("top",top1+"px");
    $("#doi").css("top",top1+"px");
  }
  }

function Finish(){vlad.pause();
  done.play();
  
  $("#white").animate({opacity: 1},3000, function(){
    $("body").css("background-color","black");
    $("#text").css("display","none");
  $("#heart").css("display","none");
  $("#final").css("display","inherit");
    $("#white").animate({opacity: 0},3000, function(){
      clap.play()
    $("body").click(function(){window.close()})
    })

  })
  
}
})