
// Pseudocode below:
/* 
 FUNCTION REVERSE(original)
  INIT a new stack
  FOR each character in original
    CALL stack.push WITH character
  END FOR
  INIT reversed to empty string
  WHILE stack is not empty
    CALL stack.pop RETURNING character
    APPEND character to reversed
  END WHILE
  RETURN reversed
END FUNCTION
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    var newNode = new Node(value);

    newNode.next = this.top;

    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      return '';
    }

    var temp = this.top;

    this.top = this.top.next;

    return temp.value;
  }

  print() {
    while (this.top !== null) {
      console.log(this.pop());
    }
  }
}

function reverseString(string) {
  reverseStack = new Stack();

  for(let i = 0; i < string.length; i++) {
    reverseStack.push(string[i]);
  }

  let reverse = '';
  while (reverseStack !== null) {
    reverse = reverse + reverseStack.pop();
  }

  return reverse;

}