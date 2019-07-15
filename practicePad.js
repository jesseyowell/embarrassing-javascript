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
  
    let newNode = new Node(value);
  
    if (this.head === null) {
  	  this.head = newNode;
    }
    else {
    	let current = this.head;
    	while (current.next !== null) {
    		current = current.next;
    	}	
    	current.next = newNode;
    }
  }

  print() {
  	let current = this.head;

  	while(current !== null) {
  		console.log(current.value);
  		current = current.next;
  	}
  }

  pop() {
  	
  	if (!this.head.next) {
  		return null;
  	}

  	let previous = this.head;
  	let tail = this.head.next;

  	while(tail.next !== null) {
  		previous = tail;
  		tail = tail.next; 		
  	}
    
    previous.next = null;

    return this.head;

  }

}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.print();
list.pop();
list.print();
list.pop();
list.print();
