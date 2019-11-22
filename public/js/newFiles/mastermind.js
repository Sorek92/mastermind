

import {Game} from "./Game.js";


let game = new Game();

// first inductions of loop
loop();

function loop(){
    
    switch(game.state){
        case 0: 
            // start page with button play
            game.bgButtons.play.paintButton();
            if(game.bgButtons.play._button.isClicked)
                {
                    game.state = game.bgButtons.play._button.state;
                    game.bgButtons.play = undefined;
                }
            break;

        case 1: 
            // load elements
            game.bgFrames.screen.paintFrame();
            game.bgFrames.title.paintFrame();
            game.bgFrames.random.paintFrame();
            game.bgFrames.attempts.paintFrame();
            game.bgFrames.tips.paintFrame();

            // random kombination 
            
        case 2: 
            // start

            game.bgButtons.check.paintButton();
            console.log(game.bgButtons.check._button.isClicked)
            if(game.bgButtons.check._button.isClicked)
                game.state = game.bgButtons.check._button.state;

            game.bgFrames.attempt.paintFrame();
            game.bgFrames.tip.paintFrame();

            
            
            break;
        case 3: 
            // update

            break;
        case 4: 
            // win

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