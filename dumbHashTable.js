class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class HashTable {

	constructor() {
		this.list = [];
		this.size = 3;
		this.head = null;
	}

	hashFunction(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % this.size;
	}

	set(customerData) {
     
       
       let index = this.hashFunction(customerData.phoneNumber);
       let newNode = new Node(customerData);
       
       if (this.list[index] === undefined) {
         this.list[index] = newNode;
         console.log(this.list[index]);
       }

       else {     	 
       	 
       	 let current = this.list[index];

       	 while(current.next !== null && current.value.phoneNumber !== customerData.phoneNumber) {       	 	
           current = current.next;
       	 }
         
         if(current.value.phoneNumber === customerData.phoneNumber) {
           current.value = customerData;
         }
         
       	 else current.next = newNode;
       }
      
    }
	
	get(myPhone) {

      let indexPhone = this.hashFunction(myPhone);
      var current = this.list[indexPhone];
      
      while (current !== null && current !== undefined) {
      
        if (current.value.phoneNumber !== myPhone) {
      	  current = current.next;
        }

        else return (current.value);

      }
      return ('number not found'); 
    }  
}

let newTable = new HashTable();

// let's add in some objects to our array! the last one should be a collision, handled by a 'dumb simple chaining method'

newTable.set({name: 'goatman', address: 'ham blvd.', phoneNumber: '703-344-9898' });
newTable.set({name: 'dogman', address: 'cheetos st.', phoneNumber: '888-888-8888' });
newTable.set({name: 'catman', address: 'pelican st.', phoneNumber: '888-888-2222' });

// how do we deal with duplicates? go ahead and add a duplicate key (phoneNumber) from above to overwrite!
