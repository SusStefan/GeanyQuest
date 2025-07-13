$(document).ready(function(){
  $("canvas").css("background-size","cover")

let canvas= document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight-5;
const head= new Image(200,200);
head.src="head.png";
const lhand= new Image(100,100);
lhand.src="lhand.png";
const rhand= new Image(100,100);
rhand.src="rhand.png";
const rata= new Image(200,200);
rata.src="rata.png";
let notime=0;
let enemies =[];
let q=0;
let timer=60;
let bule =0;
let stopp=0;
const spacer = new Image(3,1);
spacer.src="space.jpg";
let bosulica=1;
let gamespeed=10;
function Spwn()
{q++;
if(q%120==0 && stopp==0){
  enemies.push(new Enemy(1,(Math.random()*canvas.width-400)+200,-50,50,"purple",10,1))
  enemies.push(new Enemy(1,player.x,-50,50,"purple",10,1))
}
else if(stopp==1 && bosulica==1){bosulica=0;
  enemies.push(new Enemy(4,canvas.width/2,0,200,"magenta",300,3));
  enemies.push(new Enemy(5,0,0,100,"magenta",300,3));
  enemies.push(new Enemy(8,canvas.width-100,0,100,"magenta",300,3));
  q++;
if(q%120==0){
  enemies.push(new Enemy(1,(Math.random()*canvas.width-400)+200,-50,50,"purple",10,1))}
}


}
class BulletController{
  bullets = [];
  time=0;
  constructor(canvas)
  {
    this.canvas = canvas;
  }
  shoot(x,y,speed,delay,damage,){ bule = this.bullets.length;
    if(this.time <=0)
    {if(bule <=5){this.bullets.push(new Bullet(x,y,speed,damage,delay))}
      
      this.time =delay;
    }
    this.time--;
  }
  draw(ctx){
    this.bullets.forEach((bullet)=>{
      if(this.isBulletOffScreen(bullet))
      {
        const index = this.bullets.indexOf(bullet);
        this.bullets.splice(index,1);
        bule = this.bullets.length;
      }
      bullet.draw(ctx)});
  }
  isBulletOffScreen(bullet)
  {return bullet.y<=-bullet.height }
  colide(sprite)
  {
    return this.bullets.some(bullet=>{
      if(bullet.colide(sprite)){
        this.bullets.splice(this.bullets.indexOf(bullet),1);
        bule = this.bullets.length;
        return true;
      }
      return false
    })
      
  }
}
let health=4;
let inf=0;
let sec=0;
let abb = new Audio("abandoned.mp3");
abb.loop=true;
abb.play();
let kill = new Audio("kill.mp3");
kill.loop=true;

const bulletC = new BulletController(canvas);
class Player {
  constructor(x,y,radius,color,speed,bulletC)
  { this.x = x;
    this.y = y;
    this.radius =radius;
    this.color = color;
    this.speed =speed;
    this.bulletC=bulletC;
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  draw()
  {ctx.shadowColor = this.color;
    ctx.shadowBlur =20;
    ctx.lineWidth=10;
    if(inf==0){
    ctx.fillStyle="white"}
    else{ctx.fillStyle="red"}
    ctx.drawImage(rata,this.x,this.y,this.radius,this.radius)
    ctx.font = "50px Comic Sans"
    ctx.fillStyle="lime"
    ctx.fillText("viata: "+health,100,100);
    ctx.fillStyle="red"
    if(notime==0){ctx.fillText("Supravietuieste: "+timer,canvas.width/2-200,100);}
    else{ ctx.fillStyle="magenta";ctx.fillText("Timp pana la distrugerea satului: "+timer,canvas.width/2-350,canvas.height-100);}
    ctx.fillStyle="yellow"
    ctx.fillText("gloante disponibile: "+(6-bule),canvas.width-500,100)
    if(inf>0){inf--}
  }
  update()
  { player.shoot(); 
    if(this.upp && this.y-this.radius>0)
    {this.y=this.y-this.speed;}
    if(this.downp&& this.y+this.radius<canvas.height)
    {this.y=this.y+this.speed;}
    if(this.leftp &&this.x-this.radius>0)
    {this.x=this.x-this.speed;}
    if(this.rightp&& this.x+this.radius<canvas.width)
    {this.x=this.x+this.speed;}
  
  }
  takeDamage()
  {if(inf==0){health=health-1;inf=100}}
  shoot()
  {this.bulletC.draw(ctx);
    if(this.shootp)
    { 
      let speed =5;
      let delay =10;
      let damage =1;
      let bulletX = this.x + this.radius/2;
      let bulletY = this.y;
      this.bulletC.shoot(bulletX-15,bulletY-50,speed,delay,damage)
    }
  }
  colide(sprite){
    if(this.x<sprite.x+sprite.width &&
      this.x + this.width> sprite.x &&
      this.y<sprite.y+sprite.height &&
      this.y + this.height> sprite.y){
        this.takeDamage()
        return true
      }
      return false
  }
  keydown = (e) => {
    if(e.code == "ArrowDown")
       {this.downp = true;}
       if(e.code == "ArrowRight")
       {this.rightp = true;}
       if(e.code == "ArrowUp")
       {this.upp = true;}
       if(e.code == "ArrowLeft")
       {this.leftp = true;}
       if(e.code == "Space")
       {this.shootp = true;}
  }
  keyup = (e) => {
    if(e.code == "ArrowDown")
    {this.downp = false;}
    if(e.code == "ArrowRight")
    {this.rightp = false;}
    if(e.code == "ArrowUp")
    {this.upp = false;}
    if(e.code == "ArrowLeft")
    {this.leftp = false;}
    if(e.code == "Space")
       {this.shootp = false;}
  }
  }
  
  class Enemy{
    constructor(type,x,y,width,color,health,speed)
    {this.x=x;
    this.y=y;
    this.color=color;
    this.health = health;
    this.height = this.width =width;
    this.speed = speed
    this.type = type;
    this.shoo=0;
    this.swit
    }
    draw(ctx)
    {
      ctx.fillStyle = this.color;
      if(this.health >1)
      {ctx.strokeStyle ="white"}
      else ctx.strokeStyle =this.color;
      if(this.type<4 || this.type==7 || this.type==6  ){ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.strokeRect(this.x,this.y,this.width,this.height);}
      else{
        if(this.type==4){
          ctx.shadowColor="black"
          ctx.drawImage(head,this.x,this.y,this.width,this.height)}
          if(this.type==5){
            ctx.shadowColor="black"
            ctx.drawImage(lhand,this.x,this.y,this.width,this.height)}
            if(this.type==8){
              ctx.shadowColor="black"
              ctx.drawImage(rhand,this.x,this.y,this.width,this.height)}
      }
      ctx.fillStyle="white";
      ctx.font = "25px Comic Sans"
      if(this.health>1 && this.type!=5 && this.type!=8){ctx.fillText(this.health, this.x+this.width/3.5,this.y+this.height/1.5)}
      
      
    }
    update()
    {
      if(this.type==1){this.y+=this.speed;}
      else if(this.type==6){this.x+=this.speed;}
      else if(this.type==7){this.x-=this.speed;}
      else if(this.type==2){this.y+=this.speed;this.x+=this.speed;}
      else if(this.type==3){this.y+=this.speed;this.x-=this.speed;}
      else if(this.type==4){if(this.x<canvas.width-this.width && this.swit==0)this.x+=this.speed;
                            else{this.swit=1;
                              if(this.x>0 && this.swit==1)
                              this.x-=this.speed;
                            else{this.swit=0;}}  

                        if(this.health<3){window.location.href="goodend.html"}
                             
      }
      else if(this.type==5 || this.type==8){if(this.y+50<player.y){this.y+=this.speed;}
      else if(this.y+50>player.y){this.y-=this.speed;} 
      this.shoo++
if(this.shoo>=100)
{
  this.shoo=0;
  enemies.push(new Enemy(6,this.x,this.y+this.height/2,10,"orange",1,2))
  enemies.push(new Enemy(7,this.x,this.y+this.height/2,10,"orange",1,2))
  
}
    }
 
      if(this.health>1 && this.type!=5 && this.type!=8)
{
  this.shoo++
if(this.shoo>=100)
{
  this.shoo=0;
  enemies.push(new Enemy(1,this.x,this.y,10,"orange",1,2))
  enemies.push(new Enemy(2,this.x,this.y,10,"orange",1,2))
  enemies.push(new Enemy(3,this.x,this.y,10,"orange",1,2))
  
}
}
}
    takeDamage(damage)
    {this.health-=damage;
 
    }
    colide(sprite){
      if(this.x<sprite.x+sprite.width &&
        this.x + this.width> sprite.x &&
        this.y<sprite.y+sprite.height &&
        this.y + this.height> sprite.y){
          sprite.takeDamage(this.damage)
          return true
        }
        return false
    }
   
  }
 class Bullet
  {constructor(x,y,speed,damage)
  {this.x =x;
  this.y=y;
this.speed =speed;
this.damage=damage;
this.width=5;
this.height=15;
this.color="white"}
draw(ctx)
{
  ctx.fillStyle=this.color;
  this.y-=this.speed;
  ctx.fillRect(this.x,this.y,this.width,this.height)
  
}
colide(sprite){
  if(this.x<sprite.x+sprite.width &&
    this.x + this.width> sprite.x &&
    this.y<sprite.y+sprite.height &&
    this.y + this.height> sprite.y){
      sprite.takeDamage(this.damage)
      return true
    }
    return false
}
}
let xx=0;
let xxx=-canvas.height;
  const player =new Player(canvas.width/2,canvas.height/2,40,"red",10,bulletC);
player.draw();
  setInterval(function(){animate()  },1000/60)
  function animate()
  {
    if(timer!=0){
    sec++;
    if(sec%60==0){timer--}
  
  }
    ctx.shadowColor = "black";
ctx.drawImage(spacer,0,xx,canvas.width,canvas.height);
ctx.drawImage(spacer,0,xxx,canvas.width,canvas.height);
if(xx>canvas.height) xx=-canvas.height;
else xx+=gamespeed;
if(xxx>canvas.height) xxx=-canvas.height;
else xxx+=gamespeed;
player.update();

if(health<=0 && notime==0){window.location.reload()}
else if(health<=0 && notime==1){window.location.href="badend.html"}
player.draw();
Spwn()
enemies.forEach((enemy) =>{
  if(timer==0 && notime==0){timer=90;
    stopp=1;notime=1;health=4;
    abb.pause();
    kill.play();
    enemies.splice(enemies.indexOf(enemy),1);
  }
  if(timer==0 && notime==1){window.location.href="badend.html"}
  if(enemy.y>canvas.height){  enemies.splice(enemies.indexOf(enemy),1);}
  if(bulletC.colide(enemy))
  {
    if(enemy.health <= 0){
    const index = enemies.indexOf(enemy);
    enemies.splice(index,1)}
  }
    else{
  enemy.draw(ctx);enemy.update()}
    if(enemy.x<player.x+player.radius &&
      enemy.x + enemy.width> player.x &&
      enemy.y<player.y+player.radius &&
      enemy.y + enemy.height> player.y){
       if(inf==0) {health=health-1;inf=100}}
 })
  }

})