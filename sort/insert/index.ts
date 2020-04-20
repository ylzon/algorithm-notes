function insertSort(array) {
  if (array.length <= 1) return array
  for (let i = 1; i < array.length ; i ++) {
    const n = array[i]
    let j;
    for (j = i - 1; j >= 0; j-- ) {
      if (array[j] > n) {
        array[j + 1] = array[j]
      } else {
        break
      }
    }
    array[j+1] = n
  }
  return array
}


console.log(insertSort([3, 2, 1]))
// [1, 2, 3]
console.log(insertSort([1, 1, 1]))
// [1, 1, 1]