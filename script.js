function duplicates(array){
  array.sort((a,b) => a - b)
  let pairs = 0
  for (let i = 0; i < array.length-1; i++) {
    if (array[i] == array[i+1]) {
      pairs++
      i++
    }
  }
  return pairs
}
// CodeWars Daily June 6, 2022
// Sort numbers in order, if index = index+1, count++
// And i++ to avoid triplets
