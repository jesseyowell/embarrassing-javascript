class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
// BST code below is compliments of https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0011
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
// below is original code (by me)
  findMyNumber(number) {
  	let temp = this.root;
  	while (temp.data !== number) {    
     if(number > temp.data && temp.right !== null) {
     	temp = temp.right;
     }
     else if (number < temp.data && temp.left !== null) {
     	temp = temp.left;
     }
     else return console.log('number not found!')
   }
   return console.log(`${number} exists!`);
  }

  findLCA(nodeOne, nodeTwo) {
  	let current = this.root;

  	while (current !== null) {    
     if(nodeOne > current.data && nodeTwo > current.data) {
     	current = current.right;
     }
     else if (nodeOne < current.data && nodeTwo < current.data) {
     	current = current.left;
     }
     else break;
   }
   return current.data;
  }	

  listPusher(node) {
    let current = this.root;
    let nodeList = [];
    
    while (current !== null) {
     if(node > current.data && current.right !== null) {
      current = current.right;
      nodeList.push(current.data);
     }   
     else if (node < current.data && current.left !== null) {
      current = current.left;
      nodeList.push(current.data);
     }
     else break;
     }
     return nodeList;
   }
 
  findNodeDistance(nodeOne, nodeTwo) {
  
   let nodeOneList = this.listPusher(nodeOne);
   console.log(nodeOneList);
   let nodeTwoList = this.listPusher(nodeTwo);
   console.log(nodeTwoList);
   let finalNodeList = [];
   
   // let's combine the two lists using our listPusher function below 

   let concatList = nodeOneList.concat(nodeTwoList);

   finalNodeList = concatList;

   // this code is for searching and removing both duplicates
   for(let i = 0; i < concatList.length; i++) {
     let currentItem = concatList[i];
     let foundCount = 0;
     for(let j = 0; j < concatList.length; j++) {
          if (concatList[i] == concatList[j])
            foundCount++;
       }
       // if we find a duplicate, let's remove it from our final list  
         if(foundCount > 1) {
           for(let h = 0; h < concatList.length; h++) {
             if(finalNodeList[h] == currentItem) {                
                finalNodeList.splice(h, 1);
                h--;
              }
           }            
        }
     }

     return finalNodeList.length;   
  }
}

let BST = new BinarySearchTree();
BST.add(8);
BST.add(3);
BST.add(10);
BST.add(1);
BST.add(6);
BST.add(14);
BST.add(4);
BST.add(7);
BST.add(13);


