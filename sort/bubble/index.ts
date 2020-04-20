function bubbleSort(array) {
  const { length } = array
  for (let i = 0; i < length - 1; i++){
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

console.log(bubbleSort([3, 2, 1]))
// [1, 2, 3]
console.log(bubbleSort([1, 1, 1]))
// [1, 1, 1]