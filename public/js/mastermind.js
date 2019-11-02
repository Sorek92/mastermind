'use strict'

// pobranie elementu canvas 
const canvas = document.querySelector('canvas');

// pobranie wszystkich metod i właściwości elementu canvas 
const ctx = canvas.getContext('2d');

// rozmiar tła
canvas.width = 600;
canvas.height = 800;

// przypisanie rozmiaru tła do zmiennych
const cw = canvas.width;
const ch = canvas.height;

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
const choosesColorsBackgroundHeight = 600;

// rozmiar tła podpowiedzi
const tipsBackgroundWidth = 230;
const tipsBackgroundHeight = 600;

// rozmiar pojedynczych linii podpowiedzi
const tipsLineBackgoundWidth = 230;
const tipsLineBackgoundHeight = 30;
const marginTips = 15;

const colors = ["red", "blue", "green", "yellow"];


// wylosowane kolory
const drawnColors = [];

// obramowania 
function rysujObramowania( x, y, w, h, color){

    ctx.fillStyle = color;
    ctx.fillRect( x, y, w, h);
}

// pojedyncze kolko
function rysujKolko( x, y, radius, color){

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc( x, y, radius,0,Math.PI*2,true); // Outer circle

    ctx.fill();
    ctx.stroke();
}

// losowanie kolek
function wylosujKolka(){
    let color = "";
    for( let i = 1; i <= 4; i++){
        color = colors[Math.floor(Math.random()*4)];
        drawnColors.push(color);
    }
}

// pokazanie wylosowanych 
function pokazWylosowaneKolka(){
    let posx = marginLeft + bigCircleRadius + marginCircle + 15;
    let posy = 2 * padding + titleBackgroundHeight + bigCircleRadius + marginCircle; 

    for( let i = 1; i <= 4; i++){
        rysujKolko(posx, posy, 20, drawnColors[i]);
        posx += 50;
    }
}

// głowny szkielet
function szkielet(){

    // wypełnienie canvas
    ctx.fillStyle = "gray";
    ctx.fillRect( 0, 0, cw, ch);

    // tytuł
    rysujObramowania( cw / 2 - titleBackgroundWith / 2, marginTop - titleBackgroundHeight / 2, titleBackgroundWith, titleBackgroundHeight, "lightgray");
    ctx.fillStyle = "gray";
    ctx.font = '32px serif';
    ctx.fillText("Mastermind", cw / 2 - titleBackgroundWith / 2 + titleBackgroundHeight / 2, titleBackgroundHeight, titleBackgroundWith - titleBackgroundHeight);

    // napis nad wylosowanymi
    ctx.fillStyle = "lightblue";
    ctx.font = '16px serif';
    ctx.fillText("Znajdź kolory poniżej", marginLeft, padding + titleBackgroundHeight, titleBackgroundWith - titleBackgroundHeight);

    // okno z wylosowanymi kolorami
    rysujObramowania( marginLeft, 2 * padding + titleBackgroundHeight, drawnColorsBackgroundWidth, drawnColorsBackgroundHeight, "lightblue");

    // okno z wyborami kolorów
    rysujObramowania( marginLeft, 3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight, choosesColorsBackgroundWidth, choosesColorsBackgroundHeight, "white");

    // okno z podpowiedziami
    rysujObramowania( marginLeft + choosesColorsBackgroundWidth + 2 * padding, 3 * padding + titleBackgroundHeight + drawnColorsBackgroundHeight, tipsBackgroundWidth, tipsBackgroundHeight, "white");

    
    pokazWylosowaneKolka();

}

wylosujKolka();
setInterval(szkielet, 50);

