class Dustbin {
  constructor(x, y, width, height) {
    var options = {
       isStatic:true
       
    }
    
    this.body = Bodies.rectangle(1000, 400, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("dustbingreen.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
          var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(0);
    image(this.image,0,-100 -this.width/3, this.height);

   
    pop();
  }
};
