
'use strict'

import Circle from "./Circle.js";

// Class Circle Button
export default class CircleButton{

    // create simple button
    constructor(x, y, radius, color){
        this._x = x;
        this._y = y;
        this._radius = radius;
        
        this._form = new Circle(x, y, radius, color);
    }

    // paint button
    paintMe(){
        this._form.paintCircle();;
    }

    // is click inside 
    insideMe(d, game){

        return function a(e){
            let pos = {
                x: e.offsetX,
                y: e.offsetY
            }

            
            if(Math.sqrt((pos.x-this._x) ** 2 + (pos.y - this._y) ** 2) < this._radius){
               
                game.canvas.removeEventListener('click', a)
                chengeColor(d);
            }
        }

    }

    changeColor(d){
        d._color = "#"+ Math.floor(Math.random()*10) + ""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10);
    }

    // return all element from this class
    takeAll(){
        return this;
    }




}
