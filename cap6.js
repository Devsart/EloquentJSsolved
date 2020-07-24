function Vector(x,y){
    this.x = x;
    this.y = y;
    Vector.prototype.plus = function(vec){
        var x = vec.x + this.x;
        var y = vec.y + this.y;
        var vector = new Vector(x,y);
        return vector;
    };
    Vector.prototype.minus = function(vec){
        var x = this.x - vec.x;
        var y = this.y + vec.y;
        var vector = new Vector(x,y);
        return vector;
    };
};
Object.defineProperty(Vector.prototype,'length',{ get: function(){ return Math.hypot(this.x,this.y) } })


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);