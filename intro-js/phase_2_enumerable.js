Array.prototype.myEach = function(prc) {
  for (let i = 0; i < this.length; i++) {
    prc(this[i]);
  }  
};

Array.prototype.myMap = function(callback) {
  let arr = [];
  this.forEach(function(el) {
    arr.push(callback(el));
  });
  return arr;
};

Array.prototype.myReduce = function(callback, initialVal) {
  let acc;
  let arr = this;
  if (initialVal !== undefined) {
    acc = initialVal;
  } else {
    acc = this[0];
    arr = this.slice(1);
  }
  arr.myEach(function(el) {
    acc = callback(acc, el);
  });
  return acc;
};
