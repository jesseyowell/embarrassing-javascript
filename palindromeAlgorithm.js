// A palindrome is a word or phrase whose spelling is the same either direction (e.g., racecar). 
// Write a recursive algorithm to determine if a given word or phrase is a palindrome.

function palindromeCheck(word) {

  word = word.replace(/\s/g, '');	
  
  if(word.length <= 1){
    return 'yes';
  }

  else if(word[0] === word[word.length-1]) {
    let newWord = word.slice(1,-1);
    return palindromeCheck(newWord);
  }
        
  else return 'no';

}

// we return 'yes' for a palindrome, and 'no' for not a palindrome.

palindromeCheck('racecar');
palindromeCheck('cheese');
palindromeCheck('osso');
palindromeCheck('a');
palindromeCheck('mr owl ate my metal worm');