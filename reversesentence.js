function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];
    for (const word of words) {
      const reversedWord = reverseWord(word);
      reversedWords.push(reversedWord);
    }
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
  
  function reverseWord(word) {
    const reversed = word.split('').reverse().join('');
    return reversed;
  }
  
  const inputSentence = "Hi Good Mornings";
  const reversedSentence = reverseWords(inputSentence);
  
  console.log(reversedSentence); 
  

  
