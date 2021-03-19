class Roof{
    constructor(x,y,w,h){

        this.roof = Bodies.rectangle(x,y,w,h , { isStatic : true});
        World.add(world, this.roof);

        this.w = w;
        this.h = h;
    }

    show(){
        var p = this.roof.position;
        rectMode(CENTER);
        fill('blue');
        rect(p.x, p.y , this.w, this.h );
    }
}