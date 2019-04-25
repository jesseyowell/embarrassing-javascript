class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    var newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      var current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  print() {
    var current = this.head;
    while (current !== null ) {
      console.log(current.value);
      current = current.next;
   }
  }
}

var list = new LinkedList();
