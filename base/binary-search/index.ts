function bSearch(array, n, start: number, end: number) {
  if (end === start) return -1
  let mid = Math.floor(( start + end ) / 2)
  console.log('中间索引：', mid)
  return n === array[mid] ? array[mid] :
         n > array[mid] ? bSearch(array, n, mid + 1, end) :
         n < array[mid] ? bSearch(array, n , start, mid - 1) :
         undefined
}

console.log(bSearch([2, 2, 2, 4, 5, 6, 7], 7, 0, 7))