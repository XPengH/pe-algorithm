const initArrays = (n) => {
  let chessBoard = new Array(n);
  for (let i = 0; i < n; i++) {
    chessBoard[i] = new Array(n).fill('.');
  }
  return chessBoard
}
let endArray = [];

// 递归找出皇后的位置
const loopQueens = (chessBoard = [], x = 0, y = 0) => {
  let chessBoardIn = chessBoard
  const arrayLength = chessBoardIn.length;
  if (x >= arrayLength || y >= arrayLength) return;
  // 一，每个位置判断横竖线也就是（x,i）(i,y)是否有值，有值的话如果横线有值就y+1,如果竖线有值就x+1
  for (let i = 0; i < arrayLength; i++) {
    if (chessBoardIn[x][i]==="Q") {
      loopQueens(chessBoardIn, x + 1, 0);
      return;
    } else if (chessBoardIn[i][y]==="Q") {
      loopQueens(chessBoardIn, x, y + 1)
      return;
    }
    // 二，对角线是否有值，只需要判断所有的已标记的点，有没有与其相差x,y差值相同的，如果有，就x+1 || y + 1
    for (let j = 0; j < arrayLength; j++) {
      if (x !== i && y !== j && chessBoardIn[i][j]==="Q" && (((x - i) === (y - j)) || ((x - i) === (j-y)))) {
        loopQueens(chessBoardIn, x, y + 1);
        return;
      }
    }
  }
  chessBoardIn[x][y] = "Q";
  

  let flag = 0;
  for(let m=0; m<arrayLength;m++){
    for(let n=0; n<arrayLength;n++) {
      if(chessBoardIn[m][n] === "Q"){
        flag+=1;
      }
    }
  }
  if(flag=== arrayLength) {
    endArray.push(chessBoardIn)
    return;
  }
  const newChessBord = JSON.parse(JSON.stringify(chessBoardIn));
  newChessBord[x][y] = ".";
  loopQueens(newChessBord, x, y+1);
  loopQueens(chessBoardIn, x+1, 0);
}

const solveNQueens = (n) => {
   endArray= []
  if (n===1) {
      return [['Q']]
  } else {
      // 先生成二维数组
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          let chessBoard = initArrays(n);
          chessBoard[i][j] = "Q";
          loopQueens(chessBoard, 0, 0)
        }
      }
      const seen = new Map()
      const result = endArray.filter((a) => !seen.has(JSON.stringify(a)) && seen.set(JSON.stringify(a), 1))
      if(result.length > 0) {
         for (let m = 0; m < result.length; m++) {
            for (let k = 0; k < n; k++) {
                if(Array.isArray(result[m][k])){
                    result[m][k] = result[m][k].join("")
                }
            }
         } 
      }
      return result
      
  }
 
};