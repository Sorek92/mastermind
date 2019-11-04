'use strict'

// get element canvas from html
const canvas = document.querySelector('canvas');

// take all methods and properties from canvas
const ctx = canvas.getContext('2d');

// size of canvas
canvas.width = cw;
canvas.height = ch;

// background of canvas 
let backgroundCanvas = new Frame(0, 0, cw, ch, "gray")

// background title
let backgroundTitle = new Frame(
    cw / 2 - titleBackgroundWith / 2, 
    marginTop - titleBackgroundHeight / 2, 
    titleBackgroundWith, 
    titleBackgroundHeight, 
    "lightgray"
)

// background random colors
let backgroundRandomColors = new Frame(
    marginLeft, 
    2 * padding + titleBackgroundHeight, 
    drawnColorsBackgroundWidth, 
    drawnColorsBackgroundHeight, 
    "lightblue"
)

// background chooses colors
let backgroundChoosesColors = new Frame(
    marginLeft, 
    3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight, 
    choosesColorsBackgroundWidth, 
    choosesColorsBackgroundHeight, 
    "white"
)

// background tips
let backgroundTips = new Frame(
    marginLeft + choosesColorsBackgroundWidth + 2 * padding, 
    3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight, 
    tipsBackgroundWidth, 
    tipsBackgroundHeight, 
    "white"
)

// background attempt
let backgroundAttempt = new Frame(
    marginLeft, 
    3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight, 
    choosesColorsBackgroundWidth, 
    50, 
    "yellow"
)

// random colors
let randomColors = [];

// attempts
let attempt = 0;
let attemptsColors = [];


/* ===============================SCENES================================== */
// start scene
function start(){
    
    randomColors = [];
    attempt = 0;
    attemptsColors = [];

    // button play
    let buttonPlay = new Frame(
        200,
        375,
        200,
        50,
        "blue"
    )
    
    // button start 
    buttonPlay.draw();
    
    // text on button
    ctx.fillStyle = "green";
    ctx.font = '32px serif';
    ctx.fillText("Start", cw / 2 - 25, 410, 50);

    
    canvas.addEventListener("click", function(e){
        
        if(buttonPlay){
            if((e.offsetX >= buttonPlay.x && e.offsetX <= buttonPlay.x + buttonPlay.w) 
            && (e.offsetY >= buttonPlay.y && e.offsetY <= buttonPlay.y + buttonPlay.h)){
                console.log("Button Play : " + e.offsetX + " -- " + e.offsetY);
                buttonPlay = undefined;
                attempt = 1;
                stats = 1;
            }
        }
        
  
    })
}

// main scene
function main(){


    // draw main background 
    backgroundCanvas.draw();

    // draw background of title and title of game
    backgroundTitle.draw();
    ctx.fillStyle = "gray";
    ctx.font = '32px serif';
    ctx.fillText("Mastermind", cw / 2 - titleBackgroundWith / 2 + titleBackgroundHeight / 2, titleBackgroundHeight, titleBackgroundWith - titleBackgroundHeight);

    // draw background of random colors and text above
    backgroundRandomColors.draw();
    ctx.fillStyle = "lightblue";
    ctx.font = '16px serif';
    ctx.fillText("Znajdź kolory poniżej", marginLeft, padding + titleBackgroundHeight, titleBackgroundWith - titleBackgroundHeight);
    
    // draw background of chooses colors
    backgroundChoosesColors.draw();

    // draw background of tips
    backgroundTips.draw();

    // rand colors
    randomColors =  drawColors();

    // paint random colors
    randomColors[0].draw();
    randomColors[1].draw();
    randomColors[2].draw();
    randomColors[3].draw();

    stats = 2;
    
}

// attempts
function attempts(){
    console.log("jestme" + attempt);
    ctx.fillStyle = "black";
    ctx.font = '32px serif';
    ctx.fillText(attempt, 20, backgroundAttempt.y + 32 + ((attempt-1)*50));

    backgroundAttempt.y += ((attempt-1)*50);
    backgroundAttempt.draw();

    let tempColor = [];
    let posx = marginLeft + bigCircleRadius + marginCircle + 15;
    let posy = backgroundAttempt.y + 25;

    for( var i=0; i<4;i++){

        tempColor[i] = new Wheel();
        
        tempColor[i].setPosX(posx);
        tempColor[i].setPosY(posy);
        tempColor[i].setRadius(20);
        tempColor[i].draw();
        posx += 50;
         
    }


    attemptsColors = tempColor;
   

    function isIntersect(point, circle) {
        return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
      }

    canvas.addEventListener("click", function(e){
        const pos = {
            x: e.offsetX,
            y: e.offsetY
        }

        for( var i=0; i< 4; i++){
            if (isIntersect(pos, attemptsColors[i])) {
                attemptsColors[i].changeColor();
                //stats =2;
                //break;
                console.log(attemptsColors[i].color);
            }
        }
    })
    stats = 3;
}

// win scene
function win(){
    console.log("win");
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,600,800);

    // text win
    ctx.fillStyle = "green";
    ctx.font = '96px serif';
    ctx.fillText("YOU WON", cw / 2 - 25, 200, 150);

    // button play again
    let buttonPlay = new Frame(
        200,
        375,
        200,
        50,
        "blue"
    )
    
    // button play again 
    buttonPlay.draw();
    
    // text on button
    ctx.fillStyle = "green";
    ctx.font = '32px serif';
    ctx.fillText("Start", cw / 2 - 25, 410, 50);

    
    canvas.addEventListener("click", function(e){
        
        if((e.offsetX >= buttonPlay.x && e.offsetX <= buttonPlay.x + buttonPlay.w) 
        && (e.offsetY >= buttonPlay.y && e.offsetY <= buttonPlay.y + buttonPlay.h)){
            console.log("Button Play again : " + e.offsetX + " -- " + e.offsetY);
            randomColors = [];
            attemptsColors = null;
            attempt = 1;
            stats = 1;
        }
  
    })
}

/* ================================Functions============================= */
// rand a colors
function drawColors(){
    
    let colors = [];
    let posx = marginLeft + bigCircleRadius + marginCircle + 15;
    let posy = 2 * padding + titleBackgroundHeight + bigCircleRadius + marginCircle;

    for( let i = 0; i < 4; i++){
        colors[i] = new Wheel();
        colors[i].setColor(colors[i].randColor());

        // set radius
        colors[i].setRadius(20);

        // set position
        colors[i].setPosX(posx);
        colors[i].setPosY(posy);
        posx += 50;

    }

    return colors;

}


function checkAttempt(){
    
    let tempColors = attemptsColors;
    
    //console.log("check");
    // check button
    let buttonCheck = new Frame(
        250,
        770,
        200,
        50,
        "red"
    )
    
    // button start 
    buttonCheck.draw();
    
    // text on button
    // ctx.fillStyle = "green";
    // ctx.font = '32px serif';
    // ctx.fillText("Check", cw / 2 - 25, 410, 50);
    var parzystosc = 0;
    
    canvas.addEventListener("click", function(e){
        
        if((e.offsetX >= buttonCheck.x && e.offsetX <= buttonCheck.x + buttonCheck.w) 
        && (e.offsetY >= buttonCheck.y && e.offsetY <= buttonCheck.y + buttonCheck.h)){
            
            for( var i=0; i<4; i++){
                if(tempColors[i].color === randomColors[i].color){
                    parzystosc++;
                }
            }
            switch(parzystosc){
                case 0: {
                    console.log("brak podpowiedzi");
                    parzystosc = 0;
                    attempt +=1;
                    stats = 2; break;
                }
                case 1: {
                    console.log("jeden trafiony");
                    parzystosc = 0;
                    attempt +=1;
                    stats = 2; break;
                } 
                case 2: {
                    console.log("dwa trafione");
                    parzystosc = 0;
                    attempt +=1;
                    stats = 2; break;
                }
                case 3: {
                    console.log("trzy trafione"); 
                    parzystosc = 0;
                    attempt +=1;
                    stats = 2; break;
                }
                case 4:{
                    stats = 4;
                    console.log("you win");
                    win();
                    break;
                } 
                    

            }
                
            
        } 
    })
    //console.log(parzystosc);
}


/* ============================MAIN LOOP================================ */
//setInterval(loop, 1000);

//drawAttempt(7);
function loop(){
    
    switch(stats){
        case 0: {
            start();
            break;
        }
        case 1: {
            main();
            break;
        }
        case 2: {
            attempts();
            break;
        }
        case 3: {
            checkAttempt();
            break;
        }
        case 4: {
            win();
            break;
        }
        case 5: {
            console.log("lose");
            break;
        }
    }
    requestAnimationFrame(loop);
}

loop();