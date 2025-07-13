let jump =new Audio("jump.mp3");
jump.loop=true;
jump.play();
let timer = 3000;
let death=0;

var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  width = 1900,
  height = 850,
  player = {
      x: 200,
      y: height-100,
      width: 25,
      height: 50,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping: false,
      grounded: false,
      color:'#E6AC27'
  },
  keys = [],
  friction = 0.8,
  gravity = 0.3,
  boxes = [],
  powerup = [];  
 
powerup.push({
      x: 310,
      y: 50,
      width: 20,
      height: 20,
      color: '#BF4D28',
      effect: 'shrink'
  });

  powerup.push({
    x: 750,
    y: 150,
    width: 20,
    height: 20,
    color: 'cyan',
    effect: 'grow'
});

powerup.push({
      x: 600,
      y: 750,
      width: 20,
      height: 20,
      color: 'green',
      effect: 'gravity'
  });

  

powerup.push({
      x: 20,
      y: 350,
      width: 20,
      height: 20,
      color: 'blue',
      effect: 'tele',
      rotate: 20,
      px: 20,//where they get teleported
      py: 410,
      stay: true
  });
  powerup.push({
    x: 20,
    y: 670,
    width: 20,
    height: 20,
    color: 'blue',
    effect: 'tele',
    rotate: 20,
    px: 365,//where they get teleported
    py: 410,
    stay: true
});
powerup.push({
  x: 370,
  y: 670,
  width: 20,
  height: 20,
  color: 'blue',
  effect: 'tele',
  rotate: 20,
  px: 35,//where they get teleported
  py: 290,
  stay: true
});

powerup.push({
      x: width-100,
      y: height-100,
      width: 50,
      height: 50,
      color: 'yellow',
      effect: 'win',
      stay: true
  });
  const monkyy= new Image();

// dimensions
boxes.push({//box on left
  x: 0,
  y: height/4+10,
  width: 10,
  height: height,
  color: 'green'
});
boxes.push({//box on left
  x: 0,
  y: 0,
  width: 10,
  height: height,
  color: 'green'
});
boxes.push({//box for the ground
  x: 0,
  y: height - 10,
  width: width,
  height: 50,
  color: 'orange'
});
boxes.push({//box on right
  x: width - 10,
  y: 0,
  width: 50,
  height: height,
  color: 'yellow'
});

boxes.push({
  x: 0,
  y: 0,
  width: width,
  height: 10,
  color: '#655643'
});

// level layout
boxes.push({
  x: 50,
  y: 400,
  width: 10,
  height: 300,
  color: '#655643'
});
boxes.push({
  x: 350,
  y: 400,
  width: 10,
  height: 300,
  color: '#655643'
});
boxes.push({
  x: 400,
  y: 390,
  width: 10,
  height: 310,
  color: '#655643'
});
boxes.push({
  x: 800,
  y: 190,
  width: 10,
  height: 700,
  color: '#655643'
});
boxes.push({
  x: 400,
  y: 780,
  width: 10,
  height: 60,
  color: '#655643'
});
boxes.push({
  x: 10,
  y: 700,
  width: 400,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 300,
  y: 780,
  width: 100,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 400,
  y: 89,
  width: 10,
  height: 240,
  color: '#655643'
});
boxes.push({
  x: 400,
  y: 0,
  width: 10,
  height: 60,
  color: '#655643'
});
boxes.push({
  x: 400,
  y: 220,
  width: 400,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 700,
  y: 720,
  width: 100,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 450,
  y: 630,
  width: 100,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 690,
  y: 530,
  width: 100,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 520,
  y: 430,
  width: 100,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 0,
  y: 390,
  width: 455,
  height: 10,
  color: '#655643'
});

boxes.push({
  x: 0,
  y: 320,
  width: 410,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 100,
  y: 240,
  width: 100,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 240,
  y: 140,
  width: 100,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 380,
  y: 270,
  width: 20,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 1040,
  y: 0,
  width: 10,
  height: 700,
  color: '#655643'
});
boxes.push({
  x: 1270,
  y: 100,
  width: 10,
  height: 740,
  color: '#655643'
});
boxes.push({
  x: 1000,
  y: 300,
  width: 30,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 830,
  y: 400,
  width: 30,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 970,
  y: 600,
  width: 30,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 830,
  y: 760,
  width: 30,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 1000,
  y: 800,
  width: 100,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 1200,
  y: 760,
  width: 30,
  height: 10,
  color: '#655643'
});
boxes.push({
  x: 1180,
  y: 560,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 1080,
  y: 660,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 1100,
  y: 460,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 1180,
  y: 360,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 1060,
  y: 260,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 1160,
  y: 160,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 1430,
  y: 800,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 1630,
  y: 800,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 400,
  y: 50,
  width: 40,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 430,
  y: 50,
  width: 10,
  height: 60,
  color: 'lightgray'
});
boxes.push({
  x: 430,
  y: 140,
  width: 10,
  height: 60,
  color: 'lightgray'
});
boxes.push({
  x: 430,
  y: 140,
  width: 50,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 430,
  y: 190,
  width: 50,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 470,
  y: 170,
  width: 10,
  height: 20,
  color: 'lightgray'
});
boxes.push({
  x: 500,
  y: 140,
  width: 10,
  height: 60,
  color: 'lightgray'
});
boxes.push({
  x: 530,
  y: 140,
  width: 10,
  height: 60,
  color: 'lightgray'
});
boxes.push({
  x: 570,
  y: 140,
  width: 10,
  height: 60,
  color: 'lightgray'
});
boxes.push({
  x: 530,
  y: 140,
  width: 50,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 530,
  y: 170,
  width: 25,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 600,
  y: 140,
  width: 10,
  height: 60,
  color: 'lightgray'
});
boxes.push({
  x: 630,
  y: 140,
  width: 10,
  height: 60,
  color: 'lightgray'
});
boxes.push({
  x: 600,
  y: 140,
  width: 30,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 660,
  y: 120,
  width: 10,
  height: 100,
  color: 'lightgray'
});
boxes.push({
  x: 460,
  y: 100,
  width: 60,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 730,
  y: 30,
  width: 10,
  height: 200,
  color: 'lightgray'
});
boxes.push({
  x: 550,
  y: 100,
  width: 60,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 630,
  y: 85,
  width: 40,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 490,
  y: 30,
  width: 240,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 440,
  y: 80,
  width: 20,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 480,
  y: 75,
  width: 190,
  height: 10,
  color: 'lightgray'
});
boxes.push({
  x: 690,
  y: 75,
  width: 10,
  height: 120,
  color: 'lightgray'
});
boxes.push({
  x: 690,
  y: 75,
  width: 10,
  height: 120,
  color: 'lightgray'
});
boxes.push({
  x: 1670,
  y: 0,
  width: 220,
  height: 120,
  color: 'lightgray'
});
//end of lvl layoyut

//spikes caca
powerup.push({
  x: 1320,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1350,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1380,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1410,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1440,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1470,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1500,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1530,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1560,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1590,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1620,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1650,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1680,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1710,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1740,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1770,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1800,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1830,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1860,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});

powerup.push({
  x: 820,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 820,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});


powerup.push({
  x: 820,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 850,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 880,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 910,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 940,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 970,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1000,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1030,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1060,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1090,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1120,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1150,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1180,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1210,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});
powerup.push({
  x: 1240,
  y: 830,
  width: 20,
  height: 20,
  color: 'red',
  effect: 'death',
  stay:true,
});

canvas.width = width;
canvas.height = height;

function update() {
  // check keys
  if (keys[38] || keys[32] || keys[87]) {
      // up arrow or space
      if (!player.jumping && player.grounded) {
          player.jumping = true;
          player.grounded = false;
          player.velY = -player.speed * 2.5;//how high to jump
      }
  }
  if (keys[39] || keys[68]) {
      // right arrow
      if (player.velX < player.speed) {
          player.velX++;
      }
  }
  if (keys[37] || keys[65]) {
      // left arrow
      if (player.velX > -player.speed) {
          player.velX--;
      }
  }



  player.velX *= friction;
  player.velY += gravity;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  
  player.grounded = false;
  for (var i = 0; i < boxes.length; i++) {//print boxes
      ctx.fillStyle = boxes[i].color;
      ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
      
      var dir = colCheck(player, boxes[i]);

      if (dir === "l" || dir === "r") {
          player.velX = 0;
          player.jumping = false;
      } else if (dir === "b") {
          player.grounded = true;
          player.jumping = false;
      } else if (dir === "t") {
          player.velY *= -1;
      }

  }
  
  if(player.grounded){
       player.velY = 0;
  }
  
  player.x += player.velX;
  player.y += player.velY;

  ctx.fill();//Draw charater stuff
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  monkyy.src="ende.png";
  ctx.drawImage(monkyy,player.x, player.y, player.width, player.height)
  //draw powerup stuff 
  for(var j = 0; j < powerup.length; j++){
    ctx.save();
    var cx = powerup[j].x + 0.5 * powerup[j].width,   // x of shape center
    cy = powerup[j].y + 0.5 * powerup[j].height; //y of shape center
    ctx.translate(cx, cy);  //translate to center of shape
  
    if(powerup[j].effect  === 'tele' || powerup[j].effect  === 'death'){   ctx.rotate( (Math.PI / 180) * 45);//rotate 25 degrees.
      ctx.rotate( (Math.PI / 180) * powerup[j].rotate);//rotate 25 degrees.
      powerup[j].rotate = (Math.PI / 180) * powerup[j].rotate;
    }
    ctx.translate(-cx, -cy);            //translate center back to 0,0
    ctx.fillStyle = powerup[j].color;
    ctx.fillRect(powerup[j].x, powerup[j].y, powerup[j].width, powerup[j].height);
    ctx.restore();
    
    //powerup collision
    if(colCheck(player, powerup[j])!==null){//touched power up!
      if(powerup[j].effect==='gravity'){
        gravity= 0.2;//decrease gravity
        player.speed = 3;
        player.color = 'lime';
      }
      else if (powerup[j].effect==='shrink'){
        player.width= 10;
        player.height= 10;
        player.speed = 4;
      }
      else if (powerup[j].effect==='grow'){
        player.width= 25;
        player.height= 50;
        player.speed = 3;
      }
      else if (powerup[j].effect==='death'){
        player.x= 750;
        player.y= 150;
        death++;
      }
      else if (powerup[j].effect==='tele'){
        player.x=powerup[j].px;
        player.y=powerup[j].py;
      }
      else if (powerup[j].effect==='win'){
        window.location.href="cautare.html"
        
      }
      if(powerup[j].stay!==true)
      powerup[j].width=0;//make power up go away
    }
  }
  function restart(){
    timer=3000;
    player.color="#E6AC27";
    player.x=200;
    player.y=height-100;
    player.speed=3;
    for(let l=0;l<powerup.length;l++)
    {if(powerup[l].stay!==true){powerup[l].width=20;}
      
    }
    death++;
  }
  //powerup stuff
  ctx.fillStyle="blue";
  ctx.font="30px Impact";
  ctx.fillText('Timp ramas: '+timer,1680,45);
  timer--;
  if(timer==0){restart()}
  ctx.fillStyle="red";
  ctx.font="30px Impact";
  ctx.fillText('Morti: '+death,1680,85);

  
}
setInterval(function(){update()},1000/70)
function colCheck(shapeA, shapeB) {
  // get the vectors to check against
  var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
      vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
      // add the half widths and half heights of the objects
      hWidths = (shapeA.width / 2) + (shapeB.width / 2),
      hHeights = (shapeA.height / 2) + (shapeB.height / 2),
      colDir = null;

  // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      // figures out on which side we are colliding (top, bottom, left, or right)
      var oX = hWidths - Math.abs(vX),
          oY = hHeights - Math.abs(vY);
      if (oX >= oY) {
          if (vY > 0) {
              colDir = "t";
              shapeA.y += oY;
          } else {
              colDir = "b";
              shapeA.y -= oY;
          }
      } else {
          if (vX > 0) {
              colDir = "l";
              shapeA.x += oX;
          } else {
              colDir = "r";
              shapeA.x -= oX;
          }
      }
  }
  return colDir;
}

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});
let rgb=0;
setInterval(() => {
rgb=Math.floor(Math.random()*59);
purple=100+Math.floor(Math.random()*200);
$("body").css("background-color","rgb("+purple+",0,"+purple+")")

}, 1000);

window.addEventListener("load", function () {
  update();
});
