function selectSort(array) {
  if (array.length <= 1) return array
  for (let i=0; i<array.length-1; i++){
    let minIndex = i
    for (let j=i+1; j < array.length; j++) {
      if (array[j] < array[i]) {
        minIndex = j
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}

console.log(selectSort([3, 2, 1]))
// [1, 2, 3]
console.log(selectSort([1, 1, 1]))
// [1, 1, 1]
