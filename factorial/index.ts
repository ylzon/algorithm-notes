function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1)
}

function factorialLoop(n) {
  let result = 1
  for (let i = 1; i<= n; i ++) {
    result = result * i
  }
  return  result
}

function factorialIterate(n) {
  const iterate = (i, n, result) => {
    return i === n
      ? result
      : iterate(i + 1, n, result * (i + 1))
  }
  return iterate(1, n, 1)
}

console.time('递归用时:')
console.log('12的阶乘是(递归)：', factorial(12))
console.timeEnd('递归用时:')

console.time('循环用时:')
console.log('12的阶乘是(循环)：', factorialLoop(12))
console.timeEnd('循环用时:')

console.time('迭代用时:')
console.log('12的阶乘是(迭代)：', factorialIterate(12))
console.timeEnd('迭代用时:')
