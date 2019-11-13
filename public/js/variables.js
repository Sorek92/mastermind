'use strict'

// rozmiar tła
const cw = 600;
const ch = 800;

// marginesy
const marginTop = 50;
const marginBottom = 50;
const marginLeft = 50;
const marginRight = 50;

// padding
const padding = 20;

// rozmiar tła tytułu
const titleBackgroundWith = 200;
const titleBackgroundHeight = 60;


// rozmiar tła wyslosowanych kolorów , takie same do wybieranych kolorow
const drawnColorsBackgroundWidth = 230;
const drawnColorsBackgroundHeight = 50;

// margines kolek
const marginCircle = 5;
const bigCircleRadius = 20;

// romiar tła wybieranych kolorów
const choosesColorsBackgroundWidth = 230;
const choosesColorsBackgroundHeight = 500;

// rozmiar tła podpowiedzi
const tipsBackgroundWidth = 230;
const tipsBackgroundHeight = 500;

// rozmiar pojedynczych linii podpowiedzi
const tipsLineBackgoundWidth = 230;
const tipsLineBackgoundHeight = 30;
const marginTips = 15;

// stats of game 
var stats = 0;

// random colors
let randomColors = [];

// attempts
let attempt = 0;
let attemptsColors = [];

// tips
let tipsColors = [];

// tablica 
let tab = [];
let tab2 = [];

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