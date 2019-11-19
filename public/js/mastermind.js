'use strict'


/* 
/* ============================MAIN LOOP================================ */
// function loop(){
//     if(attempt < 10)
//     draw();
//     else{
//         ctx.fillStyle = "black";
//         ctx.fillRect(0,0, cw,ch);
//         start();
//     }
    

//     if(!win)
//     requestAnimationFrame(loop);
//     else
//     start();
    


// }

// start();

function git(x,y,w,h,c){

    let backgroundTips = new Frame(
        x, y, w, h, c
    )

    return backgroundTips;

}

// new loop
switch(state){

    case 0: 
        // start
        //start();
        let a = git(40,50,100,60,"yellow");
        let b = git(40,150,100,60,"green");
        let c = git(40,250,100,60,"blue");
        let d = git(40,50,10,40,"gray");
        setInterval(function(){

            a.color = allColors[Math.floor(Math.random()*8)];
            a.x += 10;
            a.draw();
            
        },1000);
        //a.draw();
        a.makeEvent();
        b.draw();
        b.makeEvent();
        c.draw();
        c.makeEvent();
        d.draw();
        d.makeEvent();

        break;
    case 1: 
        // load
    
        break;
    case 2: 
        // game

        break;
    case 3: 
        // update

        break;
    case 4: 
        // win

        break;
    case 5: 
        // lose


        break;
    default: 
        // default is 0;
        state = 0;
        break;

}