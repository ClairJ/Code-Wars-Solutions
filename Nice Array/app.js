function isNice(arr){
  if ( arr.length === 0) {
    return false;
  }
  for (var i=0;i<arr.length;i++) {
    console.log(arr)
    if (!arr.includes(arr[i] + 1) && !arr.includes(arr[i] - 1)) {
      console.log('false')
      return false;
    }
  }
  return true;
}
