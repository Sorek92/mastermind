'use strict'

import Frame from "./Frame.js";
import RectButton from "./RectButton.js";

// constans 

// backgrounds
const cw_bg = 600;
const ch_bg = 800;

const title_bg_width = 200;
const title_bg_height = 30;

const random_bg_width = 230;
const random_bg_height = 50;

const chooses_bg_width = 230;
const chooses_bg_height = 500;

const tips_bg_width = 230;
const tips_bg_height = 500;

const tip_bg_width = 230;
const tip_bg_height = 30;
const tip_margin = 15;

// buttons
const play_width = 200;
const play_height = 50;

const check_width = 200;
const check_height = 50;

// free space
const margin_top = 50;
const margin_bottom = 50;
const margin_left = 50;
const margin_right = 50;



const padding = 20

let jsonObjects = {

    Buttons: {
        Play: {
            name: "PLAY",
            x: cw_bg / 2 - play_width / 2,
            y: ch_bg / 2 - play_height / 2,
            w: play_width,
            h: play_height,
            colorB: "blue",
            colorT: "yellow", 
            text: "Play"
        },
        Check: {
            name: "CHECK",
            x: cw_bg / 2 - check_width / 2, 
            y: ch_bg - check_height, 
            w: check_width, 
            h: check_height, 
            colorB: "red",
            colorT: "purple", 
            text: "check"
        }
    },

    Frames: {
        "Screen": {
            x: 0,
            y: 0,
            w: cw_bg,
            h: ch_bg,
            color: "brown"
        },
        Title: {
            x: cw_bg / 2 - title_bg_width / 2, 
            y: margin_top - title_bg_height / 2, 
            w: title_bg_width, 
            h: tip_bg_height, 
            color: "lightgray"
        },
        Random: {
            x: margin_left, 
            y: 2 * padding + tip_bg_height, 
            w: random_bg_width, 
            h: random_bg_height, 
            color: "blue"
        },
        Attempts: {
            x: margin_left, 
            y: 3 * padding + title_bg_height + random_bg_height, 
            w: chooses_bg_width, 
            h: chooses_bg_height, 
            color: "white"
        },
        Attempt: {
            x: margin_left, 
            y: 3 * padding + title_bg_height + random_bg_height, 
            w: chooses_bg_width, 
            h: chooses_bg_height / 10, 
            color: "yellow"
        },
        Tips: {
            x: margin_left + chooses_bg_width + 2 * padding, 
            y: 3 * padding + title_bg_height + random_bg_height, 
            w: tips_bg_width, 
            h: tips_bg_height, 
            color: "white"
        },
        Tip: {
            x: margin_left + random_bg_width + 2 * padding, 
            y: 3 * padding + title_bg_height + random_bg_height, 
            w: tips_bg_width, 
            h: tips_bg_height / 10, 
            color: "green"
        }
    }



}


export class Game extends Frame{

    constructor(){
        super();
        this.state = 0;
        this._attempt = 1;

        this._buttons = [];
        this._frames = [];
        
    }

    // create button
    createButton(name){

        let B = jsonObjects.Buttons[name];

        // new button 
        let newButton = new RectButton(B.name, B.x, B.y, B.w, B.h, B.colorB, B.colorT, B.text);
        
        console.log(newButton)

        // save to _buttons
        this._buttons[name] = newButton;

        return newButton;
    }


    // create frame
    createFrame(name){

        let F = jsonObjects.Frames[name];

        // new bg frames
        let newFrame = new Frame(F.x, F.y, F.w, F.h, F.color);

        //console.log(newFrame)
        
        // save in _frames
        this._frames[name] = newFrame;
        
        return newFrame;

    } 


}