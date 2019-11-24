'use strict'

import Ctx from "./Ctx.js";

// Class Frame
export default class Frame extends Ctx{

    // 
    constructor(x, y, w, h, color, bg = false){

        super();
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._color = color;
        this._bg = bg;
    }

    // paint frame
    paintFrame() {
        this.ctx.fillStyle = this._color;
        this.ctx.fillRect(this._x, this._y, this._w, this._h, this._color);
        
    }

    // random color
    randomColor(){
            this._color = "#"+ Math.floor(Math.random()*10) + ""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10);
    }
    
}
