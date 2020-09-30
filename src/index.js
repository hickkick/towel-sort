
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
    if((i+2)%2 === 1) {
      matrix[i].reverse()
      for(let k = 0; k < matrix[i].length; k++) {
        result.push(matrix[i][k])
      }
    } else {
      for(let k = 0; k < matrix[i].length; k++) {
        result.push(matrix[i][k])
      }
    }
  }
  return result;
}
