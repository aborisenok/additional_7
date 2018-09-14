module.exports = function solveSudoku(matrix) {
  /*fill the empty place in matrix by possible values*/
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(matrix[i][j] === 0){
        var possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        matrix[i][j] = possibleValues;
      }
    }
  }
  
  /*in every row find known elementst and delite it from possible values*/
  for(let i = 0; i < matrix.length; i++){
    compareRow(matrix, i);
  }
  
   /*in every column find known elementst and delite it from possible values*/
  for(let i = 0; i < matrix.length; i++){
    compareColumn(matrix, i);
  }
  
  return matrix;
}


/*Готово для исп*/
function compareRow(matrix, column){
  for(let i = 0; i < matrix.length; i++){
    if(typeof matrix[column][i] != "object"){
        var elem = matrix[column][i];
        for(let j = 0; j < matrix.length; j++){
          if(typeof matrix[column][j] == "object"){
            var index = matrix[column][j].indexOf(elem);
            if(index != -1){
              matrix[column][j].splice(index, 1);
            }
            if(matrix[column][j].length == 0){
              matrix[column][j] = matrix[column][j][0];
            }
          }
        }
    }
  }
  return matrix;
}

function compareColumn(matrix, row){
  for(let i = 0; i < matrix.length; i++){
    if(typeof matrix[i][row] != "object"){
        var elem = matrix[i][row];
        for(let j = 0; j < matrix.length; j++){
          if(typeof matrix[j][row] == "object"){
            var index = matrix[j][row].indexOf(elem);
            if(index != -1){
              matrix[j][row].splice(index, 1);
            }
            if(matrix[j][row].length == 0){
              matrix[j][row] = matrix[j][row][0];
            }
          }
        }
    }
  }
  return matrix; 
}
