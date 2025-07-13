const canvas =document.querySelector("canvas");
const ctx = canvas.getContext("2d");
var r = new Audio("reload.mp3")
var vander = new Audio("lookout.mp3")
vander.loop =true;
vander.volume=0.3;
vander.play();
let roby =new Image();
roby.src="robi.png";
let ww =new Image();
ww.src="enemy.png";
let www =new Image();
www.src="enemy2.png";
canvas.width=innerWidth;
canvas.height=innerHeight;
let gloante =36;
let scor=0;
let stop =0;
const enemies = [];
//player
class Player {
constructor(x,y,radius,color)
{ this.x = x;
  this.y = y;
  this.radius =radius;
  this.color = color;
}
draw()
{ctx.fillStyle = this.color;
  ctx.beginPath()
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
  ctx.fill();
  ctx.drawImage(roby,this.x-80,this.y-90,160,210)
}
}
let done=1;
const player =new Player(canvas.width/2,canvas.height/2,50,"red");
player.draw();
const projectiles = [];
let spped =10;
window.addEventListener('click',(event) => {
 let angle = Math.atan2(
   event.clientY - canvas.height/2,
   event.clientX - canvas.width/2)
let velocity ={
  x:Math.cos(angle)*spped,
  y:Math.sin(angle)*spped
}
if(gloante!=0 && done==1){gloante--;
projectiles.push(new Projectile(canvas.width/2,canvas.height/2,10,"yellow",velocity))}
if(gloante==0){done=0;r.currentTime=0;}
})

  setInterval(function(){if(gloante<36 && done==0){ r.play();gloante++}else{done=1;}},100)

let q=0;
function spawnEnemies() 
{ 
setInterval(() => {
  const radius = 50
  let x=9
  let y
  if(Math.random() < 0.5)
  {
    y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    x = Math.random() * canvas.width;
  }
  else 
  {
    x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
    y = Math.random() * canvas.height; 
  }

const color = 'purple' 
let angle = Math.atan2(
  canvas.height/2 - y,
  canvas.width/2 - x)
let velocity ={
 x:Math.cos(angle),
 y:Math.sin(angle)
}
if(stop==0){
if(q<100)
enemies.push(new Enemy(x,y,radius, color, velocity,2))
else enemies.push(new Enemy(x,y,radius, 'orange', velocity ={
  x:Math.cos(angle)*2,
  y:Math.sin(angle)*2,
 },4))
q++
}
},1000)

}

//enemies

class Enemy
{
constructor(x,y,radius,color,velocity,mhealth)
{
  this.x = x;
  this.y = y;
  this.radius =radius;
  this.color = color;
  this.velocity=velocity;
  this.mhealth=mhealth;
  this.health=mhealth;
}
draw()
{ctx.fillStyle = this.color;
  ctx.beginPath()
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
  ctx.fill();
  if(this.mhealth==2){ctx.drawImage(ww,this.x-80,this.y-90,160,210)}
  else if(this.mhealth==3){ctx.drawImage(www,this.x-80,this.y-90,160,210)}
  ctx.fillStyle="white";
  ctx.font="40px Times New Roman"
  ctx.fillText(this.health,this.x-10,this.y+10)
}
update()
{ this.draw();
  this.x += this.velocity.x;
  this.y += this.velocity.y;
}
}

//profecyt
class Projectile
{
constructor(x,y,radius,color,velocity)
{
  this.x = x;
  this.y = y;
  this.radius =radius;
  this.color = color;
  this.velocity=velocity;
}
draw()
{ctx.fillStyle = this.color;
  ctx.beginPath()
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
  ctx.fill();
}
update()
{ this.draw();
  this.x += this.velocity.x;
  this.y += this.velocity.y;
}
}
//animate
let lives=3;
 
animate();
spawnEnemies();


function animate() { 
 ctx.fillStyle=  "rgba(10,0,10,0.6)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle ="red";  
  ctx.fillRect(10,10, 360, 60);
  ctx.fillStyle ="green";  
  ctx.fillRect(10,10, 120*lives, 60);
  ctx.fillStyle="white";
  ctx.font="40px Times New Roman"
  ctx.fillText("VIETI:"+lives,50,50)
  ctx.fillStyle ="black";  
  ctx.fillRect(canvas.width-400,10, 360, 60);
  ctx.fillStyle ="yellow";  
  ctx.fillRect(canvas.width-400,10, 10*gloante, 60);
  ctx.fillStyle ="red";  
  ctx.fillText("GLOANTE:"+gloante,canvas.width-400,50)
  ctx.fillStyle ="cyan";  
  ctx.fillText("Scor:"+scor,100,canvas.height-100)
  
  ctx.fillStyle ="yellow";  
  player.draw();
  projectiles.forEach((projectile,proji) => {projectile.update();})
  enemies.forEach((enemy,index) => {enemy.update();
    const dis =Math.hypot(player.x - enemy.x,player.y - enemy.y)
    if(dis - enemy.radius - player.radius< 1) 
    {setTimeout(function(){enemies.splice(index, 1)
      },0)
    if(lives>=1)
    lives--;
    if(lives==0){window.location.reload()}
      
    }
  projectiles.forEach((projectile,proji)  => {
    const dist = Math.hypot(projectile.x - enemy.x,projectile.y - enemy.y)
 
    if(dist - enemy.radius - projectile.radius< 1) 
    { projectiles.splice(proji,1)
      enemy.health--;

      if(enemy.health<1){
    setTimeout(function(){enemies.splice(index, 1);scor=scor+10;
     },0)}
      
    }
  })
  
  })
  if(scor==300){stop=1;}
  if(scor>=300 && enemies.length==0){
    ctx.fillStyle= "yellow"
    ctx.fillText("AI CASTIGAT ! APASA 'ENTER' !",canvas.width/2,canvas.height/2)
    ctx.fillText("Capacitate de gloante si viteza de reincarcare ",canvas.width/2,canvas.height/2+50)
    ctx.fillText("upgradate !",canvas.width/2,canvas.height/2+100)
    document.addEventListener('keypress',function(e){
      if(e.key==='Enter'){window.location.href="shoot2.html"}
    
    })
  }
 requestAnimationFrame(animate) }
