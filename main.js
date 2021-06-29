var c1=new fabric.Canvas("myCanvas");
var playery= 10;
var playerx = 10;
var blockwidth= 30;
var blockheight= 30;
var playerimg= "";
var blockimg= "";
function playerupdate(){
fabric.Image.fromURL("player.png", function(Img){
playerimg=Img;
playerimg.scaleToHeight(100);
playerimg.scaleToWidth(100);
playerimg.set({
top:playery,left:playerx
});
c1.add(playerimg);
}
);
}
function newimage(get_image){
fabric.Image.fromURL(get_image, function (Img){
blockimg=Img;
blockimg.scaleToHeight(blockheight);
blockimg.scaleToWidth(blockwidth);
blockimg.set({
top:playery,left:playerx
});
c1.add(blockimg);
}
    );
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keyCode;
if (keypress=='38'){
up();
console.log("up key pressed");
}
if (keypress=='40'){
down();
console.log("Down key pressed");    
}
if (keypress=='37'){
left();
console.log("Left key pressed");
}
if (keypress=='39'){
right();
console.log("right key pressed")
}
if (keypress== '87'){
newimage("wall.jpg");
console.log("Wall image 'w'");
}
if (keypress== '71'){
newimage("ground.jpg");
console.log("Ground image 'g'");
}
if (keypress== '76'){
newimage("light_green.png");
console.log("Greenlight image 'l'");
}
if (keypress== '84'){
    newimage("trunk.jpg");
    console.log("Trunk image 't'");
    }
if (keypress== '82'){
    newimage("roof.jpg");
    console.log("roof image 'r'");
    }
if (keypress== '89'){
    newimage("yellow_wall.jpg");
    console.log("yellow wall image 'y'");
    }
if (keypress== '68'){
    newimage("dark_green.png");
    console.log("dark grass image 'd'");
    }
if (keypress== '85'){
    newimage("unique.png");
    console.log("Unique image 'u'");
    }
if (keypress== '67'){
    newimage("cloud.jpg");
    console.log("cloud image 'c'");
    }
}
function up(){
if (playery>=0){
playery=playery-10;
c1.remove(playerimg);
playerupdate();
}
}
function down(){
if(playery<=500){
playery=playery+10;
c1.remove(playerimg);
playerupdate();
}
}
function right(){
if (playerx<=900){
playerx=playerx+10;
c1.remove(playerimg);
playerupdate();
}
}
function left(){
if (playerx>=0){
playerx=playerx-10;
c1.remove(playerimg);
playerupdate();
}
}