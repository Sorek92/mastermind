'use strict'

import Frame from "./Frame.js";
import Button from "./Button.js";

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

export class Game extends Frame{

    constructor(){
        super();
        this.state = 0;

        this.bgFrames = this.loadFrames();
        this.bgButtons = this.loadButtons();
    }

    loadFrames() {

        let bgFrames = {
            screen: new Frame(0,0, cw_bg, ch_bg,"brown",false),
            title: new Frame(
                cw_bg / 2 - title_bg_width / 2, 
                margin_top - title_bg_height / 2, 
                title_bg_width, 
                tip_bg_height, 
                "lightgray"
            ),
            random: new Frame(
                margin_left, 
                2 * padding + tip_bg_height, 
                random_bg_width, 
                random_bg_height, 
                "blue"
            ),
            attempts: new Frame(
                margin_left, 
                3 * padding + title_bg_height + random_bg_height, 
                chooses_bg_width, 
                chooses_bg_height, 
                "white"
            ),
            attempt: new Frame(
                margin_left, 
                3 * padding + title_bg_height + random_bg_height, 
                chooses_bg_width, 
                chooses_bg_height / 10, 
                "yellow"
            ),
            tips: new Frame(
                margin_left + chooses_bg_width + 2 * padding, 
                3 * padding + title_bg_height + random_bg_height, 
                tips_bg_width, 
                tips_bg_height, 
                "white"
            ),
            tip: new Frame(
                margin_left + random_bg_width + 2 * padding, 
                3 * padding + title_bg_height + random_bg_height, 
                tips_bg_width, 
                tips_bg_height / 10, 
                "green"
           )
    
        }
    
        return bgFrames;
    
    }
    
    loadButtons(){
        let bgButtons = {
    
            play: new Button(
                cw_bg / 2 - play_width / 2,
                ch_bg / 2 - play_height / 2,
                play_width,
                play_height,
                "blue",
                1
            ),
            check: new Button(
                cw_bg / 2 - check_width / 2, 
                ch_bg - check_height, 
                check_width, 
                check_height, 
                "purple",
                2
            ),
            check2: new Button(
                200, 
                750, 
                200, 
                50, 
                "grey"
            )
        }
    
        return bgButtons;
    }

}