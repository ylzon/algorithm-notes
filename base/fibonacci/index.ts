function memorize (fn) {
  const cache = {}
  return (first, ...args) => {
    if(!(first in cache)){
      cache[first] = fn(first, ...args)
    }
    return cache[first]
  }
}

function fibonacci(n: number) {
  return n === 0 ? 0 :
         n === 1 ? 1 :
         fibonacci(n - 1) + fibonacci(n - 2)
}

// 用记忆化函数优化递归，减少重复计算
const fib = memorize(fibonacci)

console.log(fib(48))
// 4807526976