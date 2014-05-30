function Circle(radius) {
    this.radius=radius;
}

Circle.prototype.area = function() {
    return this.radius * this.radius * Math.PI;
}

var instance = new Circle(5);
conslole.log(instance.area(););

instance.constructor == Circle
instance.__proto__ = Circle.prototype
instance instanceof Circle == true