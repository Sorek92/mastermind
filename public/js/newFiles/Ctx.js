'use strict'

// Class ctx
const cw = 600;
const ch = 800;

export default class Ctx { 

    constructor(){
        // get element canvas from html
        this.canvas = document.querySelector('canvas');
        this.canvas.width = cw;
        this.canvas.height = ch;

        // take all methods and properties from canvas
        this.ctx = this.canvas.getContext('2d');
    }

    get ctxElement(){
        return this.ctx;
    }



}