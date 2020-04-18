function max(array): number {
  if (!array && array.length === 0) {
    throw new Error("当前传入的参数不是数组");
  }

  if (array.every((item) => typeof item !== "number")) {
    throw new Error("当前传入的元素中有非数字");
  }

  if (array.length === 1) return array[0];

  let currentMax: number = array[0];

  for (let i = 1; i < array.length; i++) {
    // 如果有重复的直接跳过
    if (currentMax === array[i]) break;

    // 常规比较，返回最大值
    if (currentMax < array[i]) {
      currentMax = array[i];
    }
  }

  return currentMax;
}

console.log("获取最大值：", max([23, '123', 17, 28, 84]));
console.log("数组长度为1直接返回：", max([1]));
console.log("重复元素避免比较，直接返回：", max([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
