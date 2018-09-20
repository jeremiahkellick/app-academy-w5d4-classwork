Array.prototype.bubbleSort = function() {
  let modified = true;
  while (modified) {
    modified = false;
    for (let i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      if (this[j] < this[i]) {
        let temp = this[j];
        this[j] = this[i];
        this[i] = temp;
        modified = true;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      arr.push(this.substring(i, j + 1));
    }
  }
  return arr;
};
