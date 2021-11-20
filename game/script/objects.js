class object{ //global object 
    constructor(x,y,v){
        this.x = x;
        this.y = y;
        this.v = v;
    }
}
class rec extends object{//rectangular things
    constructor(x,y,v,h,w){
        this.h = h;
        this.w = w;
        super(x,y,v);
    }
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);
    }
}
class circ extends object{//circular things
    constructor(x,y,v,r){
        this.r = r;
        super(x,y,v);
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0*Math.PI,2*Math.PI);
        ctx.stroke();
    }
}