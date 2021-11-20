var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
ctx.canvas.height = window.innerHeight;
ctx.canvas.width = window.innerWidth;

var front = document.getElementById("front");
var mid = document.getElementById("mid");
var back = document.getElementById("back");
var player_img = document.getElementById("player");

var obj_arr = []; // stores every object in the level
// automatic gets added after creating a level

class object{ //global object 
    constructor(x,y,v){
        this.x = x;
        this.y = y;
        this.v = v;
        obj_arr.push(this);
    }
}
class rec extends object{//rectangular things
    constructor(x,y,v,w,h){
        super(x,y,v);
        this.h = h;
        this.w = w;
    }
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, ctx.canvas.height - this.y, this.h, this.w);
    }
}
class circ extends object{//circular things
    constructor(x,y,v,r){
        super(x,y,v);
        this.r = r;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, ctx.canvas.height - this.y, this.r, 0*Math.PI,2*Math.PI);
        ctx.stroke();
    }
}

// function draw_background(){
//     let x = 50;
//     ctx.drawImage(back, 0, 20,ctx.canvas.width/2,ctx.canvas.height);
//     ctx.drawImage(mid, 0, 20,ctx.canvas.width/2,ctx.canvas.height);
//     ctx.drawImage(front, 0, 20,ctx.canvas.width/2,ctx.canvas.height);
//     ctx.drawImage(back, ctx.canvas.width/2, 20,ctx.canvas.width/2,ctx.canvas.height);
//     ctx.drawImage(mid, ctx.canvas.width/2, 20,ctx.canvas.width/2,ctx.canvas.height);
//     ctx.drawImage(front, ctx.canvas.width/2, 50,ctx.canvas.width/2,ctx.canvas.height);
// }
function update(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    //draw_background(); 
    for(i of obj_arr){
        i.draw();
    }
    document.addEventListener('keypress', foo);
}

function foo(e){
    if(e.key == "w"){//jump
        player.y -= 5;
    }else if(e.key == "a"){
        player.x -= 5;
        for(i of obj_arr){
            i.x += 5;
            i.draw();
        }
    }else if(e.key == "d"){
        player.x += 5;
        for(i of obj_arr){
            i.x -= 5;
            i.draw();
        }
    }
}

var ground = new rec(0,100,0,100,500);
var ground2 = new rec(700,100,0,100,500);
var player = new rec(100,200,0,50,100);
for(i of obj_arr){
    i.draw();
}
setInterval(update,1000/30); //set Frames per sec