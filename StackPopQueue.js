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
   
   if(this.top === null) {
     this.top = '';
     this.next = ''; 
   }
   else {
    this.next = this.top;
   }
 
   if(this.next === null) {
     return null;
   }

   var temp = this.top;
   
   if (this.top !== undefined && temp.value !== undefined) {
     this.top = this.top.next;
     return temp.value;
   }
   
   else return '';
   
  }

  print() {
    while (this.top !== null) {
      console.log(this.pop());
    }
  }
}