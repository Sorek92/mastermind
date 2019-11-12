// for start only from this array : ['R','B','G','Y','W','B']
let basicColors = ['R','B','G','Y','W','B'];
let randBalls = [];

let colorsLength = 4;

for(var i=0; i< colorsLength; i++){
    let color = basicColors[Math.floor(Math.random()*6)];
    randBalls.push(color);

}
let checkBalls = [];

for(var i=0; i< colorsLength; i++){
    let color = basicColors[Math.floor(Math.random()*6)];
    checkBalls.push(color);

}


let rb = randBalls.slice();
let cb = checkBalls.slice();


let textCheck = [];

for(var r = 0; r < colorsLength; r++){
    if(cb[r] === rb[r] && rb[r] !== 'X' && rb[r] !== 'X'){
        cb[r] = 'X';
        rb[r] = 'X';
        textCheck.push("X");
    }
}

for(var c = 0; c < colorsLength; c++){
    for(var r = 0; r< colorsLength; r++){
        
        if(cb[r] === rb[c] && cb[r] !== 'X' && rb[c] !== 'X' && cb[r] !== 'O' && rb[c] !== 'O'){
            rb[c] = "O"
            cb[r] = "O";
            textCheck.push("O")
        }
    }
}
console.log("main random array :");
console.log(randBalls)
console.log("main checking array");
console.log(checkBalls)

console.log("random array :");
console.log(rb)
console.log("checking array");
console.log(cb)

console.log("checking text")
console.log(textCheck)