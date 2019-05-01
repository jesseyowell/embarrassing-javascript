
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

  findNodeDistance(nodeOne, nodeTwo) {
 
  	let nodeCount = 0;
  	let temp = this.root;

  	const dataCounter = function(node) {
  	  while(temp.data !== node) {
  	    if(node > temp.data && temp.right !== null) {
          temp = temp.right;
          nodeCount++;
        }  
        else if (node < temp.data && temp.left !== null) {
      	  temp = temp.left;
          nodeCount++;
  	    }
        else `these numbers aren't found!`
  	   }   
       return nodeCount; 
     }
     
     return ( dataCounter(nodeOne) + dataCounter(nodeTwo) ); 
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


# Example of the finding the oldest  

FUNCTION findTheOldest(root)
  SET temp to root
  WHILE temp.right exists
    SET temp.right to temp
  END WHILE
  RETURN temp
END FUNCTION



function findMyNumber(number) {

   let temp = this.root;

   while (temp.value !=== number) {
     if(number > temp.value && temp.right) {
     	temp = temp.right;
     }
     else if (number < temp.value && temp.left) {
     	temp = temp.left;
     }
     else return ('number not found!')
   }
   return `${number} exists!`;
}

