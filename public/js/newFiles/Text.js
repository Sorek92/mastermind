'use strict'

import Ctx from "./Ctx.js";

// Class Text
export default class Text extends Ctx{

    constructor(x, y, h, w, color, style, text){

        super();

        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._color = color;
        this._style = style;
        this._text = text;

        this._sizeFont = this._style.match(/(\d+)/)[0];

        this.centerMe();

    }

    // paint text
    paintText(){
        this.ctx.font = this._style;
        this.ctx.fillStyle = this._color;
        this.ctx.fillText(this._text, this._x, this._y, 1000);
    }

    // center text on some object
    centerMe(){

        console.log("x: " + this._x)
        console.log("y: " + this._y)
        console.log("w: " + this._w)
        console.log("h: " + this._h)
        let lengthString = this.ctx.measureText(this._text).width;
        let newX = this._x + this._w / 2 - (lengthString * this._sizeFont /10 / 2) ;
        this._x = newX;

        console.log(parseInt(this._h))

        let a =this._y + (this._h - parseInt(this._sizeFont, 10)) / 2 + parseInt(this._sizeFont, 10) - 4;
        this._y = a;
        console.log(this._y)

    }

}