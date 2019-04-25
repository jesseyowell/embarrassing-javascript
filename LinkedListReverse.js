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

  reverseList() {
    var current = this.head;
    var previous;
    var temp;

    while(current) {
      
      temp = current.next;
      current.next = previous;

      previous = current;
      current = temp;

    }
  
    this.head = previous;

  }

  print() {
    var current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

var list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
