const back1 = new Image();
back1.src = "./img/back.png";
const back2 = new Image();
back2.src = "./img/mid.png";
const back3 = new Image();
back3.src = "./img/front.png";
const player_img = new Image();
player_img.src = "./img/player_happy.png"

var layer1 = new layer(back1,0.25);
var layer2 = new layer(back2,0.5);
var layer3 = new layer(back3,0.75);

var player = {
    x:30,
    y:170,
    h:100,
    w:100,
    vy:-5,
    draw:function(){
        ctx.drawImage(player_img, player.x, ctx.canvas.height - player.y, player.h, player.w);
    }
};

var grounded = 0; //flag for if player can jump

//add new objects belows this
var ground = new rec(0,100,500,100);
var ground2 = new rec(600,100,800,100);
var ground3 = new rec(1400,200,400,200);
var ground4 = new rec(1900,100,300,100);
var ground5 = new rec(2250,50,100,50);
var ground6 = new rec(2400,100,100,100);
//above this 

function update(){// update loop runs 30 times a sec
   
    //SOMEHOW WORKS PLZ DONT TOUCH
    
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height); //clears canvas

    for(layer of layers_arr){//draws background
        layer.draw();
    }

    if(up && grounded){
        grounded = 0;
        player.vy = 40;       
    }

    player.y += player.vy;
    player.vy -= (player.vy < -5) ? 0 : 5;

    if(right){
        for(layer of layers_arr){
            console.log(layer.x);
             layer.update(-1);
            console.log(layer.x);
        }
        for (i of obj_arr){
            i.x -= hori_speed;
        }
    }
    if(left){
        if(obj_arr[0].x < 0){
            for(layer of layers_arr){
                layer.update(1);
            }
            for (i of obj_arr){
                i.x += hori_speed;
            }
        }
    }
    for(i of obj_arr){
        if(!collision(i, player)){ // returns 1 if player does not collide with 'i'
            
        }else{ 
            player.y = i.y + player.h;
            player.vy = 0;
            grounded = 1;
        }
        i.draw();
    }
    player.draw();
}

setInterval(update,1000/30); 
