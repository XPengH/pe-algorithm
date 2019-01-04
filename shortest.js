let all = [[0,1,0],[0,0,0],[0,0,1]]
let distance = 0
let array
let islandA = []
let islandB = []
var gteIsland = function(i, j, row, col, flag) {
  if(i<0 || i>=row || j>=col || j<0){
      return;
  }
  if(array[i][j]!== 1){
      return;
  }
  array[i][j]= '0' + flag;
  if (array[i][j] === '01') {
    islandA.push([i, j])
  }
  if (array[i][j] === '02') {
    islandB.push([i, j])
  }
  gteIsland(i+1, j, row, col, flag);
  gteIsland(i-1, j, row, col, flag);
  gteIsland(i, j+1, row, col, flag);
  gteIsland(i, j-1, row, col, flag);
};
const loopRoad = () => {
  for (let i=0 ;i<islandA.length;i++) {
    for (let j=0; j<islandB.length; j++) {
      let pointA = islandA[i]
      let pointB = islandB[j]
      let xx = Math.abs(pointA[0] - pointB[0])
      let yy = Math.abs(pointA[1] - pointB[1])
     
      let length =  xx + yy  -1
      if (distance === 0) {
        distance = length
      } else if (distance > length) {
        distance = length
      }
      
    }
  }
}
const shortestBridge = (A) => {
    let count = 0;
    array = A
    distance = 0
    islandA = []
    islandB = []
    for(let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if(array[i][j] === 1) {
                count++;
                gteIsland(i, j, A.length, A[0].length, count);
            }
        }
    }
    loopRoad()
    return distance
}