class Chain {
    constructor(body1, body2, o1, o2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {
                x: o1, y: o2
            }
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);

        this.o1 = o1
        this.o2 = o2
    }
    display(){
       var posA = this.chain.bodyA.position;
       var posB = this.chain.bodyB.position;

       strokeWeight(4);
       line(posA.x,posA.y,posB.x+this.o1,posB.y+this.o2);
    }
}