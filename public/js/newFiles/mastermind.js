'use strict'

import {Game} from "./Game.js";




let game = new Game();

// first inductions of loop
loop();

function loop(){
    
    
    switch(game.state){
        case 0: 

            // start page with button play
            game.createFrame('Screen');
            let playButton = game.createButton('Play');

            game._frames['Screen'].paintFrame();
            playButton.paintMe();

            // add event to button play
            game.canvas.addEventListener('click', playButton.insideMe(playButton, game));
            game.state = 11;
            break;

        case 11: 
            console.log('wait for play');
            break;

        case 1: 
            
            // waiting for click play
            if(game._buttons['Play'])
                game._buttons['Play'] = undefined;

            game.createFrame('Title');
            game.createFrame('Random');
            game.createFrame('Tips');
            game.createFrame('Tip');
            game.createFrame('Attempts');
            game.createFrame('Attempt');
            

            console.log('rysyj')

            game._frames['Screen'].paintFrame();
            game._frames['Title'].paintFrame();
            game._frames['Random'].paintFrame();

            game._frames['Attempts'].paintFrame();
            game._frames['Tips'].paintFrame();
            game._frames['Attempt'].paintFrame();
            game._frames['Tip'].paintFrame();
            

            
                
            game.state = 22;
            break;
        case 22: 
            // waiting for 
            console.log('narysowano')
            let checkButton = game.createButton('Check');
            checkButton.paintMe();
            game.canvas.addEventListener('click', checkButton.insideMe(checkButton, game));
            
            game.state = 3;
            break;
        case 2: 
            console.log('game')
            console.log('attempt' + game._attempt)
            break;

        case 3: 
            // 
            game._frames['Screen'].paintFrame();
            game._frames['Tips'].paintFrame();
            game._frames['Attempts'].paintFrame();
            game._frames['Attempt'].paintFrame();
            game.state = 2;
            break;
        case 4: 
            // win
            
            // console.log('update')
            // let attempts = game.createFrame('Attempts');
            // let attempt = game.createFrame('Attempt');
            // let tips = game.createFrame('Tips');
            // let tip = game.createFrame('Tip');
            // game._frames['Attempts'].paintFrame();
            break;
        case 5: 
            // lose


            break;
        default: 
            // default is 0;
            state = 0;
            break;

    }

    requestAnimationFrame(loop);

}