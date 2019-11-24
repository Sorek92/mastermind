'use strict'

import Ctx from "./Ctx.js";

// Class Button
export default class Button extends Ctx{

    // 
    constructor(x, y, w, h, color, f, state){

        super();

        //this.addEvent();
        
        this.isActive = true;
        this.isClick = false;
        this.state = state;
        this.func = this.handleFunction(f);


        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._color = color;
    }


    // paint button on vanvas
    paintButton() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this._color;
        this.ctx.fillRect(this._x, this._y, this._w, this._h, this._color);
        this.ctx.fill();
        
    }

    // return all element from this class
    takeAll(){
        return this;
    }

    // handle funtion to this object
    handleFunction(f){
        
        switch(f){
            case "play": 
                return this.play();
                //break;
            case "check": 
                return this.check(); 
                //break;
            default: 
                return 0;
        }
    };

    // change values
    changeFieldsValue(param){
        this.isClick = param;
        this.isActive = false;
    }

    // function play
    play(){
        let d = this.takeAll();

        this.canvas.addEventListener('click', d.playEvent(d));
        
    }

    // event for play
    playEvent(d){

        return function(e){
            e.preventDefault();
            e.stopPropagation();
            const pos = {
                x: e.offsetX,
                y: e.offsetY
            }
            if(d.isActive){
                if((pos.x >= d._x  && pos.x <= d._x + d._w) && (pos.y >= d._y && pos.y <= d._y + d._h))
                {
                    console.log("nacisnieto play")
                    d.changeFieldsValue(true);
                
                }
            }

        }
    }


    // event for check
    check(){
        let d = this.takeAll();
        this.canvas.addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            const pos = {
                x: e.offsetX,
                y: e.offsetY
            }
            if((pos.x >= d._x  && pos.x <= d._x + d._w) && (pos.y >= d._y && pos.y <= d._y + d._h))
            {
                d.isClick = true;
                if(d.isClick){
                    d._color = "black";
                }
                console.log("haha");
            }
        })

    }



}
