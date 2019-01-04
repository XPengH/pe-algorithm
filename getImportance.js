const data = [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]]

const getImportance = (id) => {
  let importance = 0; // 重要度初始值
  let users = []; // 所有员工id的数组
  users.push(id);
  do {
    while (users.length !==0) {
      let userid = users.shift();
      for(let i =0; i< data.length; i++) {
        if(data[i][0] === userid) {
          // 找到了这个员工
          // 添加重要性
          importance += data[i][1];
          // 添加子员工数组
          users = users.concat(data[i][2])
          
        }
      }
    }
  } while (users.length !== 0)
  return importance
}

console.log(getImportance(1))