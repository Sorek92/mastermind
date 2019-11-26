'use strict'

import Text from "./Text.js";
import Frame from "./Frame.js";

// Class Rectngle Button
export default class RectButton{

    // create simple button
    constructor(name, x, y, w, h, colorB, colorT, text){
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._name = name;
        
        this._form = new Frame(x, y, w, h, colorB);
        this._text = new Text(x, y, h, w, colorT, "32px Arial", text);

        this.isClick = false;
        this.paintMe = this.paintMe;
        this.clicking = 0;
        
    }

    // paint button
    paintMe(){
        this._form.paintFrame();
        this._text.paintText();
    }

    // is click inside 
    insideMe(d, game){

        return function a(e){
            let pos = {
                x: e.offsetX,
                y: e.offsetY
            }


            if((pos.x >= d._x  && pos.x <= d._x + d._w) && (pos.y >= d._y && pos.y <= d._y + d._h)){
               
                game.canvas.removeEventListener('click', a)
                d.chooseAction(d._name, game);
            }
        }

    }

    // choose action after click
    chooseAction(action, game){
        console.log(action)
        switch(action){
            case 'PLAY': 
                console.log('play in game');
                console.log("change status : 1 " );
                game.state = 1;
                break;
            case 'CHECK':
                console.log('checking');
                console.log("change status : 2 " );
                game.state = 2;
                break;
        }
    }

    // return all element from this class
    takeAll(){
        return this;
    }




}
