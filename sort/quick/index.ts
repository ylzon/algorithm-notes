function quickSort(arr) {
  const [pivot, ...rest] = arr
  return arr.length <= 1 ? arr :
    [
      ...quickSort(rest.filter(n => n < pivot)),
      pivot,
      ...quickSort(rest.filter(n => n >= pivot)),
    ]
}

console.log(quickSort([1,2,9,4,10,20,12]))
// [1, 2, 4, 9, 10, 12, 20]
console.log(quickSort([11,2,39,24,1,2,9]))
//  [1, 2, 2, 9, 11, 24, 39]
console.log(quickSort([]))
// []
console.log(quickSort([1,1,1,1,1]))
// [1, 1, 1, 1, 1]