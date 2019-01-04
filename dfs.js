const tree = {
  name: 1,
  children: [{
      children: [{
        children: [],
        name: 5,
      }],
      name: 6,
    },
    {
      children: [{
        children: [{
          children: [],
          name: 7,
        }, ],
        name: 4,
      }],
      name: 3,
    },
  ]
}


const loopDfs = (node, nodeList = []) => {
  if (node) {
    nodeList.push(node.name);
    var children = node.children;
    for (var i = 0; i < children.length; i++) {
      loopDfs(children[i], nodeList);
    }
  }
  return nodeList;
}

const dfs = () => {
  console.log(loopDfs(tree, []));
  
}

dfs()