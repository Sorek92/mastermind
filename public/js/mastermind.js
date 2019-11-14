'use strict'


/* 
/* ============================MAIN LOOP================================ */
function loop(){
    draw();
    requestAnimationFrame(loop);
}

start();
events();
