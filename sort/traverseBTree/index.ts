const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

function traverse(array, fn){
  const t = (tree, i) => {
    if (tree[i] === undefined) return
    t(tree, i*2+1)
    fn(tree[i])
    t(tree, i*2+2)
  }
  t(array, 0)
}

const result = []
traverse(array, item => result.push(item))
console.log(result)