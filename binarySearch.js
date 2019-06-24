const dict = ['Aardvark','Albatross','Beans','Creature','Donkey','Fork','Garbage','Juice','Water'];

function binarySearch(dictionary, word) {
  let low = 0;
  let high = dictionary.length-1;

  while (low <= high) {
  	let mid = Math.round( (low + high) / 2 );
  	
    if(dictionary[mid] > word) {
  		high = mid - 1;		
  	}
  	else if(dictionary[mid] < word) {
  		low = mid + 1;
  	}
  	else return `found at position ${mid}!`;
  }
  return 'not found!';
 }