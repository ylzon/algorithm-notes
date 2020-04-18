const sort = (arr) => {
  let k = arr.length;
  if (!arr || k === 0) return arr;
  if (k === 1) return arr;

  let left = arr.slice(0, Math.floor(k / 2));
  let right = arr.slice(Math.floor(k / 2));
  return merge(sort(left), sort(right));
};
const merge = (a, b) => {
  return a.length === 0 ? b :
         b.length === 0 ? a :
           a[0] > b[0] ?
             [b[0]].concat(merge(a, b.slice(1))) :
             [a[0]].concat(merge(a.slice(1), b));
};

console.log(sort([]));
// []
console.log(sort([1]));
// [1]
console.log(sort([1, 2]));
// [1,2]
console.log(sort([1, 3, 2]));
// [1,2,3]
console.log(sort([2, 2, 2, 2, 1]));
// [1,2,2,2,2]
