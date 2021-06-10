var mouse_event="empty";
var last_x;
var last_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_line=1;
width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").width=new_height;
document.body.style.overflow="hidden";}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
color=document.getElementById("input").value;
width_line=document.getElementById("width").value;
mouse_event="mousedown";
}
canvas.addEventListener("touchmove",my_touchmove);
 function my_touchmove(e){
     current_x=e.touches[0].clientX-canvas.offsetLeft;
     current_y=e.touches [0].clientY-canvas.offsetTop;
     if(mouse_event=="touchstart"){
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width_line;
     
        console.log("last position of X and Y");
        console.log("X="+last_x+"Y="+last_y);
        ctx.moveTo(last_x,last_y);
        
        console.log("current position of X and Y");
        console.log("X="+current_x+"Y="+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();}
        last_x=current_x;
        last_y=current_y;
 }
 canvas.addEventListener("touchup",my_touchup);
function my_touchup(e){

mouse_event="touchUp";
}
canvas.addEventListener("touchleave",my_touchleave);
function my_touchleave(e){

mouse_event="touchLeave";
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}