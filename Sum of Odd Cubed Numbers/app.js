function cubeOdd(arr) {
var answers = [];
var odds = [];
var evens = [];
// insert code here >.<
  for(i=0;i<arr.length;i++) {
  if(isNaN(arr[i])) {
  console.log(arr[i], 'false')
  return undefined;
  } else {
  answers.push(Math.pow(arr[i], 3));
  }
  }
  console.log(answers)
  for(y=0;y<answers.length;y++) {
    if(Math.abs(answers[y])%2 === 1) {
    console.log(answers[y], 'odd')
    odds.push(answers[y]);
  } else{
    console.log(answers[y], 'even');
    }
  }

  if(odds.length > 1) {
  return odds.reduce(function(a, b) { return a + b; }, 0);
  } else if (odds.length === 0) {
  return 0;
  } else {
  return odds[0];
  }
  console.log(sum)
  return 0;
}
