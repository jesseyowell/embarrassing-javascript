function bubbleSort(thisArray) {
  
  // We set this true so we can start the while loop initially
  let swapped = true;
  
  // While swapped is true, let's perform the main swapping functionality
  while(swapped) {
    
    // We set swapped to false as we haven't performed any swapping yet
    swapped = false;
    
    for(i = 0; i < thisArray.length; i++) {
    
       // If the first element in the array is larger than the next, let's set assign a couple variables to perform the actual swap
       if (thisArray[i] > thisArray[i+1]) {
    
          let first = thisArray[i];
          let next = thisArray[i+1];
          thisArray[i] = next;
          thisArray[i+1] = first; 
   
          // This is to indicate we've run once through the loop. Once all numbers are swapped, the if statement condition won't be true, and this won't be set.
          swapped = true;
          
       }
      
    }
  }
  return thisArray;
}  
  