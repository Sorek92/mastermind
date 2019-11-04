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

// background tip
let backgroundAttemptTip = new Frame(
    marginLeft + choosesColorsBackgroundWidth + 2 * padding, 
    3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight, 
    tipsBackgroundWidth, 
    50, 
    "green"
)

// background attempt
let backgroundAttempt = new Frame(
    marginLeft, 
    3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight, 
    choosesColorsBackgroundWidth, 
    50, 
    "yellow"
)

// background button check
let buttonCheck = new Frame(
    200,
    700,
    200,
    50,
    "red"
)

// background button info
let buttonInfo = new Frame(
    550,
    0,
    50,
    50,
    "white"
)


// random colors
let randomColors = [];

// attempts
let attempt = 0;
let attemptsColors = [];

// tips
let tipsColors = [];

// tablica 
let tab = [];
let tab2 = [];

/* ============================FUNCTIONS================================ */
function start(){

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

    
    

    // rand colors
    randomColors =  drawColors();

    // 
    attemptsColors =  attempts();

    // tips 
    tipsColors = tips();

    // button play on the end
    canvas.addEventListener("click", function(e){
        
        if(buttonPlay){
            if((e.offsetX >= buttonPlay.x && e.offsetX <= buttonPlay.x + buttonPlay.w) 
            && (e.offsetY >= buttonPlay.y && e.offsetY <= buttonPlay.y + buttonPlay.h)){
                console.log("Button Play : " + e.offsetX + " -- " + e.offsetY);
                buttonPlay = undefined;
                loop();
            }
        }
        
  
    })
}

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

// attempt
function attempts(){

    let tempColor = [];
    let posx = marginLeft + bigCircleRadius + marginCircle + 15;
    let posy = backgroundAttempt.y + 25;

    for( var i=0; i<4;i++){

        tempColor[i] = new Wheel();
        
        tempColor[i].setPosX(posx);
        tempColor[i].setPosY(posy);
        tempColor[i].setRadius(20);
        posx += 50;
         
    }


    return tempColor;
}

// tips
function tips(){
    let tempTips = [];

    let posx = marginLeft + choosesColorsBackgroundWidth + 2 * padding + 40;
    let posy = 3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight + 25;

    for( var i=0; i<4;i++){

        tempTips[i] = new Wheel();
        
        tempTips[i].setPosX(posx);
        tempTips[i].setPosY(posy);
        tempTips[i].setRadius(10);
        posx += 50;
         
    }


    return tempTips;
}

function checkColorsNoEmpty(){
    let isEmpty = false;
    for( var x = 0; x < 4; x++){
        if(attemptsColors[x].color === "white"){
            alert("wypelnij");
            return true;
        }
    }
    
}

                            /* Collisions mouse */
// is in circle
function isInCircle(point, circle) {
    return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
}

// is in button
function isInButtonCheck(point, button) {
    return (point.x >= button.x && point.x <= button.x + button.w) && (point.y >= button.y && point.y <= button.y + button.h);
}

/* ============================MAIN FUNCTIONS================================ */
// main draw function
function draw(){

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

    // information
    //buttonInfo.draw();

    // paint random colors
    randomColors[0].draw();
    randomColors[1].draw();
    randomColors[2].draw();
    randomColors[3].draw();

    // attempt
    backgroundAttempt.draw();
    attemptsColors[0].draw();
    attemptsColors[1].draw();
    attemptsColors[2].draw();
    attemptsColors[3].draw();

    // tips
    backgroundAttemptTip.draw();
    tipsColors[0].draw();
    tipsColors[1].draw();
    tipsColors[2].draw();
    tipsColors[3].draw();

    tab.forEach(e => {
        //console.log(e);
        let x =  new Wheel();
        x.setPosX(e.x);
        x.setPosY(e.y);
        x.setColor(e.color);
        x.setRadius(20);
        x.draw();

    });

    //if(attempt>1)
    tab2.forEach(e => {
        //console.log(e);
        let x =  new Wheel();
        x.setPosX(e.x);
        x.setPosY(e.y);
        x.setColor(e.color);
        x.setRadius(10);
        x.draw();

    });
    
    
    // button check 
    buttonCheck.draw();



}

// main update function
function events(){

    canvas.addEventListener("click", function(e){

        const pos = {
            x: e.offsetX,
            y: e.offsetY
        }

        
        if(pos.y >= 700){
            
            if(!checkColorsNoEmpty())
            if(isInButtonCheck(pos, buttonCheck)) {
                var parzystosc = 0;
                var diffrentPlace = 0;
                var tt = [];
                for( var c = 0; c < 4; c++){
                    for( var dp = 0; dp < 4; dp++){
                        if(attemptsColors[c].color === randomColors[dp].color){
                            if(c === dp)
                                parzystosc++;
                            else{
                                if(!tt.includes(attemptsColors[c].color)){
                                    tt.push(attemptsColors[c].color);
                                    diffrentPlace++;
                                }
                            }
                                
                        }
                    }

                }
                attempt += 1;
                
                console.log(diffrentPlace);
                
                if(parzystosc < 4 && attempt < 10){

                    backgroundAttempt.y += 50;

                    let tempLine = {
                        x: 0,y: 0,color: ""
                    };

                    for( var tcl = 0; tcl < 4; tcl++){
                        tempLine.x = attemptsColors[tcl].x;
                        tempLine.y = attemptsColors[tcl].y;
                        tempLine.color = attemptsColors[tcl].color;
                        
                        pushColorA(tempLine);

                        attemptsColors[tcl].y += 50;
                        attemptsColors[tcl].color = "white";
                        
                    }

                    // 
                    let tempLineT = {
                        x: 0,y: 0,color: ""
                    };

                    for( var t = 0; t < 4; t++){
                        
                        if(t < parzystosc){
                            tipsColors[t].color = "red";
                            tempLineT.color = tipsColors[t].color;
                            tipsColors[t].color = "white";
                        }else if(t >= parzystosc && t < diffrentPlace){
                            tipsColors[t].color = "yellow";
                            tempLineT.color = tipsColors[t].color;
                            tipsColors[t].color = "white";
                        }else{
                            tipsColors[t].color = "white";
                            tempLineT.color = tipsColors[t].color;
                        }

                        tempLineT.x = tipsColors[t].x;
                        tempLineT.y = tipsColors[t].y;

                        

                        pushColorT(tempLineT);
                        tipsColors[t].y += 50;
                    }

                    backgroundAttemptTip.y += 50;
                }else if(attempt === 10){
                    console.log("wou lose")
                }else{
                    console.log("wou winn");
                }
            }
    
            
        }else {
            for( var i = 0; i < 4; i++){
                if (isInCircle(pos, attemptsColors[i])) {
                    attemptsColors[i].changeColor();
                }
            }
        }





    });



}

//

function pushColorA(c){
    tab.push({
        x:c.x,
        y: c.y,
        color: c.color
    });
}

function pushColorT(c){
    tab2.push({
        x: c.x,
        y: c.y,
        color: c.color
    });
    //console.log(c);
}
/* 
/* ============================MAIN LOOP================================ */
function loop(){
    draw();
    requestAnimationFrame(loop);
}

start();
events();
