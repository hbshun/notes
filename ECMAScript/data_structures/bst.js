// BST, Binary Search Tree

class Node{
  constructor(data) {
    this.data = data;
    this.count = 1;
    this.left = null;
    this.right = null;
  }
  value() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    if (this.root === null) {
      this.root = new Node(data);
      return;
    }
    let flag = this.root;
    while(true) {
      if (flag.value() === data) {
        flag.count++; break;
      } else if (data > flag.value()) {
        if (flag.right === null) {
          flag.right = new Node(data); break;
        } else {
          flag = flag.right; continue;
        }
      } else {
        if (flag.left === null) {
          flag.left = new Node(data); break;
        } else {
          flag = flag.left; continue;
        }
      }
    }
  }
  remove(data) {
    let exist = this._search(data);
    if (!exist) return false;
    if (exist.isRoot) {
      let flag = this.root;
      if (flag.right === null && flag.left === null) {
        this.root === null;
      } else if (flag.right !== null && flag.left !== null) {
        // get largest value from left subtree
        let rst = BST.getLargetNodeFromleftSubtree(flag);
        if (rst.node.left) {
          rst.father.right = rst.node.left;
        }
        let newRoot = rst.node;
        let originRoot = this.root;
        this.root = newRoot;
        newRoot.left = originRoot.left;
        newRoot.right = originRoot.right;
      } else if (flag.right !== null) {
        this.root = flag.right;
      } else {
        this.root = flag.left;
      }
      return true;
    } else {
      let flag = exist.father;

      // 父节点的left 或 right 设为null
      if (data.right === null && data.left === null) {
        flag === null;
        // 父节点的left 或 right 设为null
      } else if (flag.right !== null && flag.left !== null) {
         // get largest value from left subtree
         let rst = BST.getLargetNodeFromleftSubtree(flag);
         if (rst.node.left) {
           rst.father.right = rst.node.left;
         }
         let newNode = rst.node;
         let originNode = exist.father[exist.point];
         exist.father[exist.point] = newNode;
         newNode.left = originNode.left;
         newNode.right = originNode.right;
      } else if (flag.right !== null) {
        this.root = flag.right;
      } else {
        this.root = flag.left;
      }
    }
  }
  static getLargetNodeFromleftSubtree(node) {
    if (!node) return null;
    if (!node.left) return null;
    let father = node;
    let point = null;
    let flag = node.left;
    while(true) {
      if (flag.right) {
        father = flag;
        point = 'right';
        flag = flag.right;
      } else {
        break;
      }
    }
    return {
      node: flag,
      father,
      point
    };
  }
  _search(data) {
    let father = this.root;
    let point = null;
    let flag = this.root;
    let foundit = false;
    while(!foundit) {
      if (flag) {
        if(flag.value() === data) {
          foundit = true; break;
        } else if (data < flag.value()) {
          father = flag;
          point = 'left';
          flag = flag.left; continue;
        } else {
          father = flag;
          point = 'right';
          flag = flag.right; continue;
        }
      } else {
        break;
      }
    }
    if (!foundit) return false;
    if (flag === this.root) return {isRoot: true};
    return {father, point};
  }
  search(data) {
    let flag = this.root;
    while(true) {
      if (flag) {
        if(flag.value() === data) {
          return true;
        } else if (data < flag.value()) {
          flag = flag.left; continue;
        } else {
          flag = flag.right; continue;
        }
      } else {
        return false;
      }
    }
  }
  preOrder() {
    const root = this.root;
    function _order(node) {
      if (node !== null) {
        console.log(`value:${node.data}, count:${node.count}`);
        _order(node.left);
        _order(node.right);
      }
    }
    _order(root);
  }
  inOrder() {
    const root = this.root;
    function _order(node) {
      if (node !== null) {
        _order(node.left);
        console.log(`value:${node.data}, count:${node.count}`);
        _order(node.right);
      }
    }
    _order(root);
  }
  postOrder() {
    const root = this.root;
    function _order(node) {
      if (node !== null) {
        _order(node.left);
        _order(node.right);
        console.log(`value:${node.data}, count:${node.count}`);
      }
    }
    _order(root);
  }
}

let bst = new BST();

function random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

// let arr = [...Array(20).keys()].reduce((result, item) => {
//   result.push(random(5, 15));
//   return result;
// }, []);
let arr = [ 10, 5, 15, 15, 10, 12, 6, 12, 9, 8, 6, 14, 8, 5, 8, 13, 8, 10, 10, 14 ];
arr.forEach(num => {bst.insert(num)});
console.log(bst);
console.log('-----preOrder:-----');
bst.preOrder();
console.log('-----inOrder:-----');
bst.inOrder();
console.log('-----postOrder:-----');
bst.postOrder();
console.log('----------');
console.log(bst._search(10));
bst.remove(10);
console.log(bst);