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

/* ============================FUNCTIONS================================ */
function start(){

    // button play
    let buttonPlay = new Frame(
        cw / 2 - buttPlayFrameWidth / 2,
        ch / 2 - buttPlayFrameHeight / 2,
        buttPlayFrameWidth,
        buttPlayFrameHeight,
        "blue"
    )
    
    // button start 
    buttonPlay.draw();
    
    // text on button
    ctx.fillStyle = "green";
    ctx.font = '32px serif';
    let startText = "Play";
    
    ctx.fillText(startText, 
        cw / 2 - ctx.measureText(startText).width / 2, 
        ch / 2 , 
        100
        );

    
    

    
    // button play on the end
    canvas.addEventListener("click", function(e){
        
        if(buttonPlay){
            if((e.offsetX >= buttonPlay.x && e.offsetX <= buttonPlay.x + buttonPlay.w) 
            && (e.offsetY >= buttonPlay.y && e.offsetY <= buttonPlay.y + buttonPlay.h)){
                console.log("Button Play : " + e.offsetX + " -- " + e.offsetY);

                // randoms colors  
                randomTextColors = randColors();
                //console.log(randomTextColors);

                //
                attemptTextColors = tempAcolors();

                // set randoms circle colors
                randomColors =  setRandomColors();

                // set colors for change 
                attemptsColors =  setAttemptCircles();

                // set tips 
                tipsColors = setTipsCircles();



                buttonPlay = undefined;
                events();
                loop();
            }
        }
        
  
    })
}

// random Text Colors - draw a random colors from all colors
function randColors(){
    let tempColors = [];
    for( var i = 0; i < quantityColors; i++){
        tempColors[i] = allColors[Math.floor(Math.random()*4)];
    }

    return tempColors;
}

// temporary colors of attemp circle
function tempAcolors(){
    let temp = [];
    for( var i = 0; i < quantityColors; i++){
        temp[i] = "white";
    }

    return temp;
}

// set random colors
function setRandomColors(){
    
    let colors = [];
    let posx = marginLeft + bigCircleRadius + marginCircle + 15;
    let posy = 2 * padding + titleBackgroundHeight + bigCircleRadius + marginCircle;

    for( let i = 0; i < quantityColors; i++){
        colors[i] = new Wheel();
        colors[i].setColor(randomTextColors[i]);

        // set radius
        colors[i].setRadius(20);

        // set position
        colors[i].setPosX(posx);
        colors[i].setPosY(posy);
        posx += 50;

    }

    return colors;
}

// set attempt colors
function setAttemptCircles(){

    let tempColor = [];
    let posx = marginLeft + bigCircleRadius + marginCircle + 15;
    let posy = backgroundAttempt.y + 25;

    for( var i = 0; i < quantityColors; i++){

        tempColor[i] = new Wheel();
        
        tempColor[i].setPosX(posx);
        tempColor[i].setPosY(posy);
        tempColor[i].setRadius(20);
        posx += 50;
         
    }


    return tempColor;
}

// set tips
function setTipsCircles(){
    let tempTips = [];

    let posx = marginLeft + choosesColorsBackgroundWidth + 2 * padding + 40;
    let posy = 3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight + 25;

    for( var i = 0; i < quantityColors; i++){

        tempTips[i] = new Wheel();
        
        tempTips[i].setPosX(posx);
        tempTips[i].setPosY(posy);
        tempTips[i].setRadius(10);
        posx += 50;
         
    }

    return tempTips;
}

//
function checkColorsNoEmpty(){
    for( var x = 0; x < 4; x++){
        if(attemptsColors[x].color === "white"){
            alert("wypelnij");
            return true;
        }
    }
    
}

// painting circles
function paintCircles(circles){

    for(var i = 0; i < circles.length; i++){
        circles[i].draw();
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
    //ctx.fillText("Znajdź kolory poniżej", marginLeft, padding + titleBackgroundHeight, titleBackgroundWith - titleBackgroundHeight);
    
    // draw background of chooses colors
    backgroundChoosesColors.draw();

    // draw background of tips
    backgroundTips.draw();

    // information
    //buttonInfo.draw();

    // paint random colors
    if(win){
        paintCircles(randomColors);
    }

    // attempt
    backgroundAttempt.draw();
    paintCircles(attemptsColors);

    // tips
    backgroundAttemptTip.draw();
    paintCircles(tipsColors);

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

// check circles 
function checkCircles(random, attempt){

    let textCheck = [];
    
    for(var r = 0; r < quantityColors; r++){
        if(attempt[r] === random[r] && random[r] !== 'X' && random[r] !== 'X'){
            attempt[r] = 'X';
            random[r] = 'X';
            textCheck.push("X");
        }
    }

    for(var c = 0; c < quantityColors; c++){
        for(var r = 0; r< quantityColors; r++){
            
            if(attempt[r] === random[c] && attempt[r] !== 'X' && random[c] !== 'X' && attempt[r] !== 'O' && random[c] !== 'O'){
                random[c] = "O"
                attempt[r] = "O";
                textCheck.push("O")
            }
        }
    }

    
console.log("random array :");
console.log(random)
console.log("checking array");
console.log(attempt)

console.log("checking text")
console.log(textCheck)

    return textCheck;

}


// update colors

function updateColors(){
    var temp = {
        x: 0,
        y: 0,
        color: ""
    }

    for( var i = 0; i < quantityColors; i++){

         temp.x = attemptsColors[i].x;
         temp.y = attemptsColors[i].y;
         temp.color = attemptsColors[i].color;

        pushColorA(temp)

        attemptsColors[i].y += 50;
        attemptsColors[i].color = "white";

        temp.x = tipsColors[i].x;
        temp.y = tipsColors[i].y;
        temp.color = tipsColors[i].color;
        console.log(temp);

        pushColorT(temp)

        tipsColors[i].y += 50;
        tipsColors[i].color = "white";

    }
    

}

function pushColorA(c) {
    tab.push({
        x: c.x,
        y: c.y,
        color: c.color
    })
}

function pushColorT(c) {
    tab2.push({
        x: c.x,
        y: c.y,
        color: c.color
    })  
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

                let r = randomTextColors.slice();
                let a = attemptTextColors.slice();

                tipsText = checkCircles(r,a);
                var w = 0;
                for( var i = 0; i < quantityColors; i++){
                    if(tipsText[i] === "X"){
                        tipsColors[i].setColor("black")
                        w++;
                    }
                        else
                    if(tipsText[i] === "O")
                        tipsColors[i].setColor("white")
                        else
                        tipsColors[i].setColor("gray")

                }

                 if(w === 4)
                 win = true;
                //console.log(randomTextColors);
                //console.log(attemptTextColors);

                updateColors();

                backgroundAttemptTip.y += 50;
                backgroundAttempt.y += 50;
                attempt++;
                
            }
    
            
        }else {
            for( var i = 0; i < quantityColors; i++){
                if (isInCircle(pos, attemptsColors[i])) {
                    attemptsColors[i].changeColor();
                    attemptTextColors[i] = attemptsColors[i].color;
                    //console.log(attemptTextColors[i]);
                }
            }
        }




    });



}