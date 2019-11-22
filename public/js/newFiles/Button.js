'use strict'

import Ctx from "./Ctx.js";

// Class Frame
export default class Button extends Ctx{

    // 
    constructor(x, y, w, h, color, state){

        super();
        this._button = {
            click: true,
            moveIn: false,
            moveOut: false,
            isClicked: false,
            state: state
        }

        this.addEvent();
        
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._color = color;
    }

    // paint frame
    paintButton() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.ctx.isPointInPath(this._x+100, this._y) ? "red" : "green";
        this.ctx.fillRect(this._x, this._y, this._w, this._h, this._color);
        this.ctx.fill();
        
    }

    // return all elements from class
    takeAll(){
        return this;
    }

    // add event click to frame
    addEvent(){
        
        let d = this.takeAll();

        // for click mouse in it
        if(this._button.click){

            this._button.isClicked = this.canvas.addEventListener('click', klik);
            if(this._button.isClicked){
                this._color = "black";
            }
        }
        function klik(e){

            e.preventDefault();
            e.stopPropagation();
            const pos = {
                x: e.offsetX,
                y: e.offsetY
            }

            let toReturn = false;


            if((pos.x >= d._x  && pos.x <= d._x + d._w) && (pos.y >= d._y && pos.y <= d._y + d._h))
            {
                toReturn = true;
                console.log("giut");
            }
            return true;
        }
    }


    

    // remove event click
    removeEvent(){

    }
}
