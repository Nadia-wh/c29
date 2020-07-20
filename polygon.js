class polygon {
    constructor(x, y, r) {
      var options = {
        isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:2.0
      }
      
      
this.body = Bodies.circle(50,100,20,options);
this.x=50;
this.y=100;
this.r=20;

      World.add(world, this.body);
    }
    display(){
     
      var pos =this.body.position;
      push();
     
     // this.body.position.x=mouseX;
      //this.body.position.y=mouseY;

fill("yellow");
      translate(pos.x, pos.y);
      rectMode(CENTER );
      rect(pos.x,pos.y,this.r,this.r);
       
      
    
      pop();
    }
  };
  