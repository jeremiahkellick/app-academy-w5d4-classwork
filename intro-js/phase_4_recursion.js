const range = function(start, end) {
  if (start === end) return [start];
  return [start].concat(range(start + 1, end));
};

const sumRec = function(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumRec(arr.slice(1));
};

const exponent = function(base, exp) {
  if (exp === 0) return 1;
  if (exp < 0) return 1 / exponent(base, -exp);
  return base * exponent(base, exp-1);
};

const fibbonaci = function(n) {
  if (n === 2) return [0,1];
  let temp = fibbonaci(n-1);
  temp.push(temp[temp.length-1] + temp[temp.length-2]);
  return temp;
};

var getType = function (elem) {
  return Object.prototype.toString.call(elem);
};

const deepDup = function(arr) {
  let result = [];
  arr.forEach(function(el) {
    if (getType(el) === "[object Array]") {
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  });
  return result;
};

const bsearch = function(arr, target) {
  if (arr.length === 0) return null;
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    let result = bsearch(arr.slice(mid + 1), target);
    return result === null ? null : mid + 1 + result;
  }
};

const mergesort = function(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0,mid));
  let right = mergesort(arr.slice(mid));
  return merge(left,right);
};

const merge = function(left, right) {
  let arr = [];
  while (!(left.length === 0 || right.length === 0 )) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr.concat(left.concat(right));
};

const subsets = function(arr) {
  if (arr.length === 0) return [[]];
  let prevSubs = subsets(arr.slice(1));
  let result = prevSubs.slice(0, prevSubs.length);
  prevSubs.forEach(function(sub) {
    result.push([arr[0]].concat(sub));
  });
  return result;
};