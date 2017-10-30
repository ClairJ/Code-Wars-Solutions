function capitalize(s){
  var holder = [];
  var str ='';
  var str2 ='';

  function convert() {
    for(i=0;i<s.length;i++) {
      str += s[i].toUpperCase();
      if (i + 1 < s.length){
        str += s[i + 1];
      }
      i++
    }
    holder.push(str);
  }
  function convert2() {
    for(i=0;i<s.length;i++) {
      str2 += s[i];
      if (i + 1 < s.length){
        str2 += s[i + 1].toUpperCase();
      }
      i++
    }
    holder.push(str2);
  }
  convert();
  convert2();
  return holder;
}
