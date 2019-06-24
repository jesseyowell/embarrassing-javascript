// Given a multi-dimensional collection (such as an array) where the number of dimensions is unknown, 
// write a recursive algorithm to count the number of items in the entire collection.


function countArray(array) {

  let count = 0;
  
  for(let i = 0; i < array.length; i++) {
  	if(typeof(array[i]) === 'object') {
  	  count = count + countArray(array[i]);
  	}
  	else count++;
  }
  return count;
}
 

let myArray = [[1,2,3],[4,5],6,7,[8,9,10]];

