class Paper{
    constructor(x,y,radius){
        var bp={
            isStatic: false,
            restitution:1.0,
            friction:0.5,
            dencity:1.2
        }
        this.radius=radius
        this.body =Bodies.circle(x,y,radius,bp);
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        //var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        //angleMode(RADIANS);
        //rotate(angle);
        ellipseMode(RADIUS)
        fill("purple"); 
  circle(0,0,this.radius);
    pop();
}
}