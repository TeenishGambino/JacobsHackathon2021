// const back1 = new Image();
// back1.src = "./img/back.png";
const back2 = new Image();
back2.src = "./img/mid.png";
const back3 = new Image();
back3.src = "./img/front.png";

const wave_img = new Image();
wave_img.src = "./img/tsunami1.png";
const wave_img2 = new Image();
wave_img2.src = "./img/tsunami2.png"

const shouse1 = new Image();
shouse1.src = "./img/shouse1.png";
const large_house = new Image();
large_house.src = "./img/largehouse.png";
// var layer1 = new layer(back1,0.25);
var layer2 = new layer(back2,0.5);
var layer3 = new layer(back3,0.75);
play = 1;
const player_img = new Image();
player_img.src = "./img/player_happy_r.png"

var player = {
    x:400,
    y:250,
    h:100,
    w:100,
    vy:-5,
    draw:function(){
        ctx.drawImage(player_img, player.x, ctx.canvas.height - player.y, player.h, player.w);
    }
};
var wave = {
    x:-400,
    y:50,
    h:600,
    w:300,
    s_mod:2,
    draw:function(){
        this.x += 1 * this.s_mod;
        this.y += 0.5 * this.s_mod;
        //ctx.fillRect(wave.x,ctx.canvas.height - wave.y,wave.h,wave.w)
        ctx.drawImage(wave_img, wave.x, ctx.canvas.height - wave.y, wave.h, wave.w);
    }
};

var grounded = 0; //flag for if player can jump

//add new objects belows this
//max jump ~ 170
//var ground = new rec(large_house,0,100,200,100);
var ground = new rec(-500,100,900,100);
// var ground2 = new rec(650,200,400,200);
// var ground3 = new rec(1050,300,350,300);
// var ground4 = new rec(1400,350,300,350);
// var ground5 = new rec(2000,350,500,50);
// var ground6 = new rec(1900,90,500,90);
//above this 
var collectables = [{
    x:1600,
    y:420,
    h:100,
    w:100
},{
    x:1600,
    y:220,
    h:100,
    w:100
}];

function update(){// update loop runs 30 times a sec
    if(collision(wave,player) || player.y <= 0){
        alert("You lost to the wave!");
        play = 0;
    }

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
        player_img.src = "./img/player_happy_r.png"
        for(layer of layers_arr){
             layer.update(-1);
        }
        for (i of obj_arr){
            i.x -= hori_speed;
        }
    }
    if(left){
        player_img.src = "./img/player_happy_l.png"
        for(layer of layers_arr){
            layer.update(1);
        }
        for (i of obj_arr){
            i.x += hori_speed;
        }
    }
    for(i of obj_arr){
        if(collision(i, player)){ // returns 1 if player does not collide with 'i'
            //player.y = i.y + player.h;
            player.vy = 0;
            grounded = 1;
        }
        i.draw();
        wave.draw();
    }
    player.draw();
}

if(play){
    setInterval(update,1000/30); 
}
