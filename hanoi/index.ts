function hanoi(n, from, cache, to){
  const template = (from, to) => `${from}${to}`
  return n === 1
    ? template(from, to)
    : `${hanoi(n - 1, from, to, cache) }, ${template(from, to)}, ${hanoi(n-1, cache, from, to)}`
}

console.log(`4层汉诺塔的操作步骤:`, hanoi(4, 'A', 'B', 'C'))
// AB,AC,BC,AB,CA,CB,AB,AC,BC,BA,CA,BC,AB,AC,BC