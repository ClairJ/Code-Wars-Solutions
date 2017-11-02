function findUniq(arr) {
  // do magic
  var yeet = [];
  console.log(arr)
  for (i=0;i<arr.length;i++) {
    if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1] || arr[i] === arr[i + 2]) {
      } else {
      return arr[i]
    }
  }
  console.log(yeet)
}
