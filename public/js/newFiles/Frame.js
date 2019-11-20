'use strict'

import Ctx from "./Ctx.js";

// Class Frame

export default class Frame extends Ctx{

    // 
    constructor(x, y, w, h, color, button){

        super();
        this._button = button;
        if(this._button)
            this.addEvent();
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._color = color;
    }

    paintFrame() {
        this.ctx.fillStyle = this._color;
        this.ctx.fillRect(this._x, this._y, this._w, this._h, this._color)
    }
    takeAll(){
        return this;
    }
    addEvent(){
        //console.log(this._x + "---" + this._y)
        let d = this.takeAll()
        //console.log(d);
        this.canvas.addEventListener('click', function(e){
            const pos = {
                x: e.offsetX,
                y: e.offsetY
            }
            
            if((pos.x >= d._x  && pos.x <= d._x + d._w) && (pos.y >= d._y && pos.y <= d._y + d._h))
                {
                    console.log( " nacisnieto tu " );
                    d._color = "#"+ Math.floor(Math.random()*10) + ""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10);
                }
        })

        this._color = d._color;
    }

    
}
