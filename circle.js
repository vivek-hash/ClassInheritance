const Shape =require("./shape")

class Circle extends Shape{
  super(radius){
    this.radius= radius;
  }

     calculateArea(){
    console.log('Area');
     }
  }
    
 module.exports = Circle;
