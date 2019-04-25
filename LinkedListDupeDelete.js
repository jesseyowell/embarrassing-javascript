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

  deleteDupes() {
    var current = this.head;
    var compare = this.head;

    while(compare) {
       
       console.log(`This compare value is ${current.value}`);
       
       while(current && current.next) {
         if(compare.value === current.next.value) {
           console.log(`Duplicate found: ${compare.value}`);
           current.next = current.next.next;
         }
         else current = current.next;
       } 
       compare = compare.next;
       current = compare;  
    }
  }
}

var list = new LinkedList();
list.push(1);
list.push(1);
list.push(2);
list.push(2);
list.push(2);
list.push(3);
list.push(7);