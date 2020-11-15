class paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
           var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("darkred");
      strokeWeight(5);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  