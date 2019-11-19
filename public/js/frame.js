
// class Frame
function Frame( x, y, w, h, c){

    // properties
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = c;

    this.makeEvent = makeEvent;

    // methods
    this.get = get;
    this.draw = draw;

    // get all properies
    function get(){
        return this;
    }

    // draw this elemet
    function draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect( this.x, this.y, this.w, this.h);
    }

    function makeEvent(){

        canvas.addEventListener("click", allla);
    }

    function allla(e){

        const pos = {
            x: e.offsetX,
            y: e.offsetY
        }
        if((pos.x >= x  && pos.x <= x + w) && (pos.y >= y && pos.y <= y + h))
            console.log( " nacisnieto tu " + c);

    }
}