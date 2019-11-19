'use strict'

// state game default 0

let state = 0;

const scala = 1;


// rozmiar tła
const cw = 600 * scala;
const ch = 800 * scala;


// button play frame
const buttPlayFrameWidth = 200 * scala;
const buttPlayFrameHeight = 50 * scala;

// marginesy
const marginTop = 50 * scala;
const marginBottom = 50 * scala;
const marginLeft = 50 * scala;
const marginRight = 50 * scala;

// padding
const padding = 20 * scala;

// rozmiar tła tytułu
const titleBackgroundWith = 200 * scala;
const titleBackgroundHeight = 60 * scala;

// rozmiar tła wyslosowanych kolorów , takie same do wybieranych kolorow
const drawnColorsBackgroundWidth = 230 * scala;
const drawnColorsBackgroundHeight = 50 * scala;

// margines kolek
const marginCircle = 5 * scala;
const bigCircleRadius = 20 * scala;
const smallCircleRadius = 10 * scala;

// romiar tła wybieranych kolorów
const choosesColorsBackgroundWidth = 230 * scala;
const choosesColorsBackgroundHeight = 500 * scala;

// rozmiar tła podpowiedzi
const tipsBackgroundWidth = 230 * scala;
const tipsBackgroundHeight = 500 * scala;

// rozmiar pojedynczych linii podpowiedzi
const tipsLineBackgoundWidth = 230 * scala;
const tipsLineBackgoundHeight = 30 * scala;
const marginTips = 15 * scala;

// random colors all objects
let randomColors = [];

// attempts all objects
let attempt = 0;
let attemptsColors = [];

// tips all objects
let tipsColors = [];

// tablica 
let tab = [];
let tab2 = [];

// when win
let win=false;


/* New Variables */

// all colors in game
let allColors = ["green", "blue", "red", "yellow", "purple", "pink", "gray", "orange"];

// quantity of colors ( how many colors are )
let quantityColors = 4;

// randoms colors (only text)
let randomTextColors = [];

// attempt colors (text only)
let attemptTextColors = [];

let tipsText = [];

