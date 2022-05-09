function Circle(hbi) {
  this.hbi = hbi;
  this.draw = function() {
     console.log('draw');
  }
}

const circle = new Circle(10);
console.log(circle
  );