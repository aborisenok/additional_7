module.exports = function olveSudoku(matrix) {
  
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(matrix[i][j] === 0){
        matrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      }
    }
  }

  for(let i = 0; i < matrix.length; i++){
    compareRow(matrix, i);
  }

  for(let i = 0; i < matrix.length; i++){
    compareColumn(matrix, i);
  }
   for(let i = 1; i <= 9; i++){
    compareSquare(matrix, i);
  }

  return matrix;
}


function compareRow(matrix, column){
  for(let i = 0; i < matrix.length; i++){
    if(typeof matrix[column][i] != "object"){
        let elem = matrix[column][i];
        for(let j = 0; j < matrix.length; j++){
          if(typeof matrix[column][j] == "object"){
            const index = matrix[column][j].indexOf(elem);
            if(index != -1){
              matrix[column][j].splice(index, 1);
            }
            if(matrix[column][j].length == 1){
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
        let elem = matrix[i][row];
        for(let j = 0; j < matrix.length; j++){
          if(typeof matrix[j][row] == "object"){
            const index = matrix[j][row].indexOf(elem);
            if(index != -1){
              matrix[j][row].splice(index, 1);
            }
            if(matrix[j][row].length == 1){
              matrix[j][row] = matrix[j][row][0];
            }
          }
        }
    }
  }
  return matrix; 
}

function compareSquare(matrix, sqrNumber){
  let sqrCoord = {1: [0, 0], 2: [0, 3], 3: [0, 6], 
                  4: [3, 0], 5: [3, 3], 6: [3, 6],
                  7: [6, 0], 8: [6, 6], 9: [6, 6]
                 };
  const coord = sqrCoord[sqrNumber];
  const definedValues = [];
  for(let i = coord[0]; i < coord[0] + 3; i++){
    for(let j = coord[1]; j < coord[1] + 3; j++){
      if(typeof matrix[i][j] != "object"){
        definedValues.push(matrix[i][j]);
      }
    }
  }
  for(let i = coord[0]; i < coord[0] + 3; i++){
    for(let j = coord[1]; j < coord[1] + 3; j++){
      if(typeof matrix[i][j] == "object"){
        definedValues.forEach((item) => {
          const index = matrix[i][j].indexOf(item);
          if(index != -1){
            matrix[i][j].splice(index, 1);
          }
        });
        if(matrix[i][j].length == 1){
          matrix[i][j] = matrix[i][j][0];
        }
      }
    }
  }
  
  return matrix;
}