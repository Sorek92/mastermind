'use strict'

import Ctx from "./Ctx.js";

// Class Circle

export default class Circle extends Ctx{

    // 
    constructor(x, y, radius, color, handle){

        super(handle);
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
    }

    paintCircle() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this._color;
        this.ctx.arc( this._x, this._y, this._radius, 0, Math.PI*2, true);
        this.ctx.fill();
        this.ctx.stroke();
    }

}
