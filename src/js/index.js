window.average = function (arrayOfThings) {
  var sum = 0;

  for(i = 0; i < arrayOfThings.length; i++) {
      var a = arrayOfThings[i] * 1;
      if (a) {
          sum += a;
      }
  }
  return sum;
};