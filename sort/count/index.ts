function countSort(array) {
  if (array.length <= 1) return array
  let hashTable = {}
  let max = array[0]
  for (let i=0; i<array.length; i++) {
    const n = array[i]
    hashTable[n] = hashTable[n] === undefined ? 1 : hashTable[n] + 1
    if ( n > max ) max = n
  }
  const result = []
  for (let j=1; j <= max; j++) {
    if (hashTable[j] !== undefined) {
      for (let k = 0; k < hashTable[j]; k++) {
        result.push(j)
      }
    }
  }
  return result
}

console.log(countSort([3, 2, 1]))
// [1, 2, 3]
console.log(countSort([1, 1, 1]))
// [1, 1, 1]
