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
      return null;
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