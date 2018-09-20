Array.prototype.uniq = function() {
  let arr = [];
  this.forEach(function(el) {
    if (!arr.includes(el)) {
      arr.push(el);
    }
  });
  return arr;
};

Array.prototype.twoSum = function() {
  let arr = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
};

Array.prototype.transpose = function() {
  let arr = Array(this.length).fill(null).map(_ => []);
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      arr[j].push(this[i][j]);
      // arr[j][i] = this[i][j];
    }
  }
  return arr;
};
