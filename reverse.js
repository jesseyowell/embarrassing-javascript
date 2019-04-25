function reverse(word) {
  
  let reversedWord = [];
  let j = 0;

  for(let i = word.length; i >= 0; i--,j++) {
  	 reversedWord[j] = word[i]; 

  }
  
  return reversedWord.join('');
}