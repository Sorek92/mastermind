
// class Frame
function Frame( x, y, w, h, c){

    // properties
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = c;

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
}