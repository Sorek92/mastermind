'use strict'

// Class ctx
import { cw, ch } from "./boot.js";

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