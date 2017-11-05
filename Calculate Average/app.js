function find_average(array) {
  var avg = 0;
  for(i=0;i<array.length;i++) {
    avg = array[i] + avg;
  }
  return avg/array.length;
}
