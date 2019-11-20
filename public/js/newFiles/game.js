import Frame from "./Frame.js";
import Circle from "./Circle.js";

import {
    cw,
    ch,
    buttPlayFrameWidth,
    buttPlayFrameHeight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    titleBackgroundWith,
    titleBackgroundHeight,
    drawnColorsBackgroundWidth,
    drawnColorsBackgroundHeight,
    marginCircle,
    bigCircleRadius,
    smallCircleRadius,
    choosesColorsBackgroundWidth,
    choosesColorsBackgroundHeight,
    tipsBackgroundWidth,
    tipsBackgroundHeight,
    tipsLineBackgoundWidth,
    tipsLineBackgoundHeight,
    marginTips
} from "./variables.js";

'use strict'

// initial state of game
let state = 0;

let obj = {};
loop();

function loop(){
    
    switch(state){

        case 0: 
            // load
            
            obj = load();
            obj.canvas.paintFrame();
            obj.title.paintFrame();
            
            obj.random.paintFrame();
            state = 1;
            break;
        case 1: 
            // start
            
            obj.canvas.paintFrame();
            obj.title.paintFrame();
            
            obj.random.paintFrame();
            
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

    requestAnimationFrame(loop);

}

function load() {

    let bg = {
        canvas : new Frame(0,0, 600, 800,"black",false),
        title: new Frame(
            cw / 2 - titleBackgroundWith / 2, 
            marginTop - titleBackgroundHeight / 2, 
            titleBackgroundWith, 
            titleBackgroundHeight, 
            "lightgray",
            true
        ),
        random: new Frame(
            marginLeft, 
            2 * padding + titleBackgroundHeight, 
            drawnColorsBackgroundWidth, 
            drawnColorsBackgroundHeight, 
            "blue",
            false
        )
    }

    return bg;

}