class Particle  {
    constructor(x,y,radius)  {
        var options={
            restitution: 0.4,
            
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options)
        this.colour = color(random(0,255), random(0,255), random(0,255))
        World.add(world,this.body);
    }
    display()  {
        var pos = this.body.position
        var angle = this.body.angle

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        ellipseMode(RADIUS)
        fill(this.colour)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}