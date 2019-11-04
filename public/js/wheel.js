

// class Wheel
function Wheel(){

    // properties
    const colors =  ["red", "blue", "green", "yellow"];

    this.x;
    this.y;
    this.radius;
    this.color = "white";
    this.isActive = false;

    // methods
    this.getColor = getColor;
    this.setColor = setColor;

    this.getPosX = getPosX;
    this.setPosX = setPosX;

    this.getPosY = getPosY;
    this.setPosY = setPosY;

    this.getRadius = getRadius;
    this.setRadius = setRadius;

    this.getColors = getColors;
    this.changeColor = changeColor;
    this.draw = draw;
    this.randColor = randColor;
   

    // get current color
    function getColor(){
        return this.color;
    }

    // set a color
    function setColor(color){
        return this.color = color;
    }

    // get set posx
    function setPosX(posx){
        this.x = posx;
    }

    function getPosX(){
        return this.x;
    }

    // get set posy
    function setPosY(posy){
        this.y = posy;
    }

    function getPosY(){
        return this.y;
    }


    // get radius
    function getRadius(){
        return this.radius;
    }

    // set radius
    function setRadius(radius){
        this.radius = radius;
    }

    // get colors
    function getColors(){
        return colors;
    }

    // changing to the next color
    function changeColor(){

        let currentColor = this.color;
        if(currentColor === "white"){
            this.setColor(colors[0]);
        }else{
            for(var i = 0; i < colors.length; i++){
                if(currentColor === colors[i]){
                    
                    if(i+1 >= colors.length){
                        this.setColor(colors[0]);
                        //console.log("first color");
                    }else{
                        this.setColor(colors[i+1]);
                        //console.log("next color");
                    }
                    
                    //console.log("current color is: " + colors[i+1]);
                    break;
                }
            }
        }

        

    }

    // draw
    function draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.fill();
        ctx.stroke();
    }

    // rand a color
    function randColor(){
        return colors[Math.floor(Math.random()*4)];
    }

}