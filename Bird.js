class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png");
    this.trajectory = []
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    //position = [this.body.position.x,this.body.position.y]
    //this.trajectory.push(position)
    //counter++;
    if(this.body.velocity.x>10 && this.body.position.x> 150 ){
      position = [this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
    }
      for(counter=0;counter<this.trajectory.length;counter++){
        image(this.smokeimg,this.trajectory[counter][0],this.trajectory[counter][1])
      }
    

    super.display();
  }
}
