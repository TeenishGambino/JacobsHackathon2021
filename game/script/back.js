var canvas2 = document.getElementById('back');
var ctx2 = canvas.getContext('2d');

ctx2.canvas.height = window.innerHeight;
ctx2.canvas.width = window.innerWidth;

const back1 = new Image();
back1.src = "./img/front.png";

ctx2.fillStyle = 'green';
ctx2.fillRect(0,0,100,100);
// ctx2.drawImage(back1, 0 , 0);