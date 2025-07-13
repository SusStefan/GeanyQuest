import Bullet from "./kk";
export default class BulletController{
  bullets = [];
  time=0;
  constructor(canvas)
  {
    this.canvas = canvas;
  }
  shoot(x,y,speed,delay,damage){
    if(this.time <=0)
    {
      this.bullets.push(new Bullet(x,y,speed,delay,damage))
    }
  }
  draw(ctx){}
}