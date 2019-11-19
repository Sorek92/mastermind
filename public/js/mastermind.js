'use strict'


/* 
/* ============================MAIN LOOP================================ */
function loop(){
    if(attempt < 10)
    draw();
    else{
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, cw,ch);
        start();
    }
    

    if(!win)
    requestAnimationFrame(loop);
    else
    start();
    


}

start();


