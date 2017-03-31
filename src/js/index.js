window.average = function (arrayOfThings) {
  var sum = 0;
  for(i = 0; i < arrayOfThings.length; i++) {
    sum += arrayOfThings[i];
  }
  return sum;
};