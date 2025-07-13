const canvas = document.getElementById("canvas");
const ctx= canvas.getContext('2d');
let vai = new Audio("vai.mp3");
let ouch = new Audio("ough.mp3");
vai.loop=true;
vai.volume=0.2;
vai.play();
canvas.width = 1600;
canvas.height = 800;
let win=0;
let chosen =0;
let level =1;
const robs= new Image();
robs.src="Imagini/roby.png";
const monky= new Image();
monky.src="Imagini/monky.png";
const monkyy= new Image();
monkyy.src="Imagini/monkyyy.png";
//global
const card1 ={
  x:300,
  y:10,
  width:70,
  height:85,
  cost:50,
  }
  const card2 ={
    x:390,
    y:10,
    width:70,
    height:85,
    cost:100,
    }
function Explain(x) 
{  
switch(x){
 case 1: 
 ctx.fillStyle="gold";
 ctx.fillText("Masina de bani",1000,40,600);
 ctx.fillStyle="white";
 ctx.fillText("+Produce 25b in cateva secunde",1000,70,300);
 ctx.fillText("-Nu poate ataca",1000,100,300);break;
 case 2: 
 ctx.fillStyle="gold";
 ctx.fillText("Roby",1000,40,600);
 ctx.fillStyle="white";
 ctx.fillText("+Ataca cu 20 dmg/glont",1000,70,300);
 ctx.fillText("-Damage mic, fara penetrare",1000,100,300);break;

}

}
    function ChoosePlant(){
    ctx.fillStyle='rgba(0,0,0,0.2)'
    ctx.fillRect(1000 ,15 ,card1.width *5,card1.height);
    let card1stroke,card2stroke="black";
    if(colision(mouse,card1)){
      card1stroke="gold";
      card2stroke="black";
      Explain(1)
    }
    else if(colision(mouse,card2)){
      card2stroke="gold";
      card1stroke="black";
      Explain(2)
    }
    else{card2stroke="black";
    card1stroke="black";}
    if(colision(mouse,card1)&& mouse.clicked){
     chosen=1;
    }
    else if(colision(mouse,card2)&& mouse.clicked){
      chosen=2;
     }
    if(chosen===1){  card2stroke="black";
    card1stroke="red";}
    else if(chosen===2){  card2stroke="red";
    card1stroke="black";}
   

      ctx.lineWidth=1;
      ctx.fillStyle='rgba(0,0,0,0.2)'
      ctx.fillRect(card1.x ,card1.y ,card1.width,card1.height);
      ctx.drawImage(sun,card1.x ,card1.y ,card1.width,card1.height)
      ctx.strokeStyle= card1stroke
      ctx.strokeRect(card1.x ,card1.y ,card1.width,card1.height);
      ctx.fillRect(card2.x,card2.y,card2.width,card2.height);
      ctx.drawImage(robs,card2.x ,card2.y ,card2.width,card2.height)
      ctx.strokeStyle= card2stroke
      ctx.strokeRect(card2.x,card2.y,card2.width,card2.height);
      ctx.font="30px Impact";
      if(numberrecourse>=card1.cost){
        ctx.fillStyle="white";
        ctx.fillText(card1.cost,320,80,30)
      }
      else{ctx.fillStyle="red";
      ctx.fillText(card1.cost,320,80,30)}
      if(numberrecourse>=card2.cost){
        ctx.fillStyle="white";
        ctx.fillText(card2.cost,405,80,40)
      }
      else{ctx.fillStyle="red";ctx.fillText(card2.cost,405,80,40)}
    }
    
document.addEventListener('keypress',function(e){if(e.key==='Enter' && gameover===1){document.location.reload()}
else if(e.key==='Enter' && win===1){window.location.href="Levels/lvl2.html"}
})


const floatmes=[]
const cellsize =114;
const cellGap =3;
const gamegrid = [];
const plants = [];
const enem= [];
let frame=0;
const penem=[];
let ienem=1000;
let numberrecourse =125;
let gameover= 0;
let score=0;
let winningscore=100;
const projectiles=[];
const resources =[];



//mouse
const mouse = { x:10, y:10, width:0.1, height:0.1,clicked:false }
let canvasposition = canvas.getBoundingClientRect();
canvas.addEventListener('mousedown',function(){
  mouse.clicked =true;
})
canvas.addEventListener('mouseup',function(){
  mouse.clicked =false;
})
canvas.addEventListener('mousemove',function(e){mouse.x = e.x - canvasposition.left;
mouse.y =e.y -canvasposition.top;})
canvas.addEventListener("mouseleave",function(){mouse.x= undefined; mouse.y=undefined})
//board
const controlbar = { width: canvas.width,
                    height:cellsize}
class Cell {constructor(x,y){this.x = x; this.y=y; this.width= cellsize; this.height =cellsize} 
draw() 
{if(mouse.x && mouse.y&&colision(this,mouse)){ ctx.strokeStyle = 'black'; 
ctx.strokeRect(this.x, this.y, this.width,this.height)}
}}
  
 
function createGrid(){ for(let y=cellsize; y<canvas.height; y +=cellsize){for(let x=0; x<canvas.width; x+=cellsize){gamegrid.push(new Cell(x,y))}}};createGrid();
function handleGameGrid(){for(let i = 0; i<gamegrid.length; i++){
  gamegrid[i].draw();

}}

//projectiles
class Project{constructor(x,y)
  { this.x=x;
    this.y=y;
this.height=10;
this.width=10;
this.power=20;
this.speed=5;
  }
  update(){this.x+=this.speed}
  draw(){ctx.fillStyle="black";
ctx.beginPath();
ctx.arc(this.x,this.y, this.width,0,Math.PI*2);
ctx.fill();
}
}
function handleP() {for(let i=0; i<projectiles.length;i++){projectiles[i].update();projectiles[i].draw();
for(let j=0; j<enem.length;j++){if(enem[j]&& projectiles[i] &&colision(enem[j],projectiles[i])){enem[j].health -= projectiles[i].power;
  ouch.currentTime=0;
  ouch.volume=0.2;
  ouch.play()
  floatmes.push(new Message("-" + projectiles[i].power,enem[j].x,enem[j].y,30,"red"))
projectiles.splice(i,1);i--;}
if(enem[j]&&enem[j].health<=0){
  let neurec = 10;
  score +=neurec;
  const findi= penem.indexOf(enem[j].y);
  penem.splice(findi,1);
  enem.splice(j,1);
  j--;}

}

if(projectiles[i]&&projectiles[i].x>canvas.width-cellsize){projectiles.splice(i,1);i--;}

}  }
//plants
const sun =new Image(10,10);
sun.src="Imagini/sun.png";
const gun =new Image(10,10);
gun.src="Imagini/rob.png";

class Plants {constructor(x,y){
  this.x=x;
  this.y=y;
  this.width=cellsize;
  this.height=cellsize;
  this.shooting=false;
  this.health=100;
  this.chosenplant=chosen;
  this.timer=0;}
draw(){
  if(this.chosenplant===1){ctx.drawImage(sun,this.x,this.y,100,100)}
else if(this.chosenplant===2){ctx.drawImage(gun,this.x,this.y,100,100)
} 
  ctx.fillStyle="gold";
  ctx.font="30px Arial";
  ctx.fillText(Math.floor(this.health),this.x+20,this.y+30)

}
  update(){
    if(this.chosenplant===1){this.timer++;if(this.timer%900===0){resources.push(new Resourse(this.x+50,this.y+50,25))}}
    if(this.chosenplant===2){this.timer++;
    if(this.shooting){
    
  if(this.timer%100===0){projectiles.push(new Project(this.x+50,this.y+50))}}
  else{this.timer=0;}}
  }
}




function handleplant(){
  for(let i=0; i<plants.length; i++)
  {plants[i].draw(); 
  plants[i].update();
  if(penem.indexOf(plants[i].y) !== -1
    ){plants[i].shooting= true;} else{plants[i].shooting= false;}
for(let j=0; j<enem.length; j++){
  if(plants[i] && enem[j]&& colision(plants[i],enem[j])){enem[j].movement=0;
    plants[i].health -=1;}
if(plants[i] &&enem[j]&&plants[i].health<=0){
  plants.splice(i,1);
  i--;
  enem[j].movement=enem[j].speed}
}}
}

//zombies
class Enemy{
  constructor(vpos,h,s){
    this.x=canvas.width;
    this.y=vpos;
    this.height=cellsize-1;
    this.width=cellsize-1;
    this.speed=s;
    this.movement=this.speed;
    this.health=h;
    this.mhealth=this.health;}
update(){this.x =this.x-this.movement;}
draw(){
 if(this.health>100 && this.health<=200)
 {
  ctx.drawImage(monkyy,this.x,this.y,100,100)
 }
 if(this.health<=100){
  ctx.drawImage(monky,this.x,this.y,100,100)
 }
ctx.fillStyle="white";
ctx.font="30px Arial";
ctx.fillText(Math.floor(this.health),this.x,this.y)
}}
function handleE(){
  for(let i=0; i<enem.length; i++)
  {enem[i].update();enem[i].draw()
  if(enem[i].x<0){gameover=1;}
  }
if(frame%ienem===0 && score<winningscore){
  let vpos= Math.floor(Math.random()*5 +1)*cellsize;
  if(frame<4000){enem.push(new Enemy(vpos,100,0.4));}
  else if(frame>=4000 &&frame<=6000){
    let rando = Math.floor(Math.random()*2)
    switch(rando){
      case 1: enem.push(new Enemy(vpos,100,0.4));break;
      default: enem.push(new Enemy(vpos,200,0.6));
    }}
    else if(frame>6000){enem.push(new Enemy(vpos,200,0.6));

  }
  if(ienem>200){ienem -=50;}
penem.push(vpos)}}

//resource
const amounts = [20, 30, 40];
rx=Math.random()*(canvas.width-cellsize);
ry=Math.random()*(canvas.height-cellsize);
class Resourse{
  constructor(x,y,amogus){
    this.x =x;
    this.y =y;
    this.width =cellsize* 0.6;
    this.height = cellsize* 0.6;
    this.amounts =amogus;
}
draw(){ctx.fillStyle ="purple";
ctx.fillRect(this.x,this.y,this.width,this.height);
ctx.fillStyle ="white";
ctx.fillText(this.amounts,this.x+20,this.y+40)}

}
function handleR(){
if(frame %1500===0 && score<winningscore){resources.push(new Resourse(rx,ry,50));}
for(let i=0; i<resources.length; i++){resources[i].draw();if(resources[i]&& mouse.x &&mouse.y && colision(resources[i],mouse)){numberrecourse +=resources[i].amounts;
  floatmes.push(new Message("+" + resources[i].amounts,resources[i].x,resources[i].y,30,"purple"))
  floatmes.push(new Message("+" + resources[i].amounts,250,50,30,"gold"))
  resources.splice(i,1);i--;}}
}

//utilities
function handlestatus(){
  ctx.fillStyle="gold";
  ctx.font="30px Impact";
  ctx.fillText('Shadow-tex: '+numberrecourse,20,45);
  ctx.fillText('Score: '+score,20,85);
  ctx.fillText('Frame: '+frame,1400,45);
  ctx.fillText('1F~0,016s',1400,85);
  ctx.fillStyle="BLACK";
  ctx.fillText('Now playing: Zarita zanga (NIGHTCORE)',1000,785);
  if(gameover){ctx.fillStyle="black"
ctx.font="60px Arial";
ctx.fillText("Ai pierdut",530,300);
ctx.font="30px Arial";
ctx.fillText("Apasa enter ca sa restartezi nivelul !",540,340);}
if(score>winningscore && enem.length ===0){ctx.fillStyle="black";
win=1;
level+=1
ctx.font="60px Impact";
ctx.fillText("Ai castigat !",530,300);
ctx.fillText("Apasa enter ca sa treci la nivelul urmator !",530,430);
vai.pause();
ctx.font="30px Impact";
ctx.fillText("Numar de puncte: "+score +" pct",535,340);
ctx.fillText("Numar de campioni: "+plants.length ,535,380);
}
}

canvas.addEventListener("click", function() {
  const gridposx = mouse.x-(mouse.x % cellsize);
  const gridposy = mouse.y-(mouse.y % cellsize);
  if(gridposy<cellsize) {return};
  for(let i=0;i<plants.length; i++){if(plants[i].x === gridposx && plants[i].y === gridposy){return}};
  let plantCost=300; 
  switch(chosen)
  {
    case 1:plantCost=50;break;
    case 2:plantCost=100;break;
  }
 
  if(chosen>0){ if(numberrecourse>=plantCost){
    plants.push(new Plants(gridposx,gridposy)); numberrecourse =numberrecourse-plantCost;
    floatmes.push(new Message("-" + plantCost,240,50,30,"red"))
  }
  else{floatmes.push(new Message("shadowtex insuficient",mouse.x,mouse.y,25,"purple"))}}
 else{floatmes.push(new Message("Nu ai selectat nimic!",mouse.x,mouse.y,25,"purple"))}
  })
 


window.addEventListener("resize",function(){canvasposition=canvas.getBoundingClientRect()})



//floating

class Message{
constructor(value,x,y,size,color)
{
this.value=value;
this.x=x;
this.y=y;
this.size=size;
this.lifespan=0;
this.color=color;
this.opacity=1;
}
update(){this.y-=0.3;this.lifespan+=1;
if(this.opacity>0.03){this.opacity-=0.03}}
draw(){
  ctx.globalAlpha=this.opacity
  ctx.fillStyle=this.color;
ctx.font=this.size+"px Impact";
ctx.fillText(this.value,this.x,this.y);
ctx.globalAlpha=1;}
}
function handleM(){
  for(let i=0; i<floatmes.length; i++)
  {
    floatmes[i].update();
    floatmes[i].draw();
    if(floatmes[i].lifespan>=40){floatmes.splice(i,1);i--}
  }
}

function animate(){

  frame++
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.fillStyle ="brown";
  ctx.fillRect(0,0,controlbar.width, controlbar.height);
   handleGameGrid();
   
  handleplant();
  handleP();
handleE();
ChoosePlant();
handleR();
handleM();
  handlestatus();
  
if(!gameover) requestAnimationFrame(animate);}
animate();
function colision(first, second){if(!(first.x > second.x+ second.width || first.x + first.width < second.x || first.y> second.y+second.height || first.y+first.height <second.y)){return true;}}