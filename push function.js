//index.js file
//Create Custom Hindi Array functions

//Array Connstructor function

let a1 = new Array("x", "y", "z");
function myArray() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false, //dont count this property
  });

  this.length = arguments.length;

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
}

let a2 = new myArray("x", "y", "z");

myArray.prototype.पुश = function (value) {
  let index = this.length;
  this[index] = value;
  this.length++;
};

a2.पुश("a");
a2.पुश("b");
console.log("a2:", Object.values(a2));
