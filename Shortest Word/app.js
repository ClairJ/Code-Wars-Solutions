function findShort(s){
  var words = (s.split(' '));
  var wordsLength = [];
  for (i=0;i<words.length;i++) {
    wordsLength.push(words[i].length)
  }
  return (Math.min.apply(null, wordsLength));
}
