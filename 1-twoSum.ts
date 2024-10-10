function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>()
  for(let i = 0; i < nums.length; ++i) {
    if(map.has(target - nums[i]))
      return [map.get(target - nums[i]) as number, i]
    map.set(nums[i], i)
  }
  return []
  
  // for(let i = 0; i < nums.length; ++i) {
  //   for(let j = i + 1; j < nums.length; ++j)
  //     if(nums[i] + nums[j] === target)
  //       return [i, j]
  // }
  // return []
};