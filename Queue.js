class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  push(value) {
    var newNode = new Node(value);
    if (this.front === null) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  pop() {
    if (this.front === null) {
      return null;
    }

    var temp = this.front;

    this.front = this.front.next;

    return temp.value;
  }

  enqueue(value) {
    var newNode = new Node(value);
    if(this.back !== null) {
      this.back.next = newNode;
    }
  }

  dequeue() {
       
    var temp = this.front;
    
    this.front = this.front.next;

    return temp;
   

  }

  print() {
    while (this.front !== null) {
      console.log(this.pop());
    }
  }
}
