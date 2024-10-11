function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>()
  for (const str of strs) {
    const str_sorted = str.split('').sort().join('')
    if(map.has(str_sorted)) 
      map.get(str_sorted)?.push(str)
    else
      map.set(str_sorted, [str])
  }  
  return Array.from(map.values())
};