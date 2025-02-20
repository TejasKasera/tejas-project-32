class BlockPurple {
    constructor (x,y,width,height) {
      var options = {
          restitution:1,
          friction:0.5,
          density:0.5
      }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;     
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle
        if(this.body.speed<5){
          push()
        translate(pos.x,pos.y);
        fill("purple")
        rectMode(CENTER);
        strokeWeight(4);
        rect( 0, 0, this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body)
          push()
          this.visibility = this.visibility-5;
          tint(255,this.visibility)
          pop();
      }
    };
    }