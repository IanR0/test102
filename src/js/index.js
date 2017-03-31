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

window.removeDuplicates = function (arrayOfThings) {
    var outputArray = [];
    for(var j = 0; j < arrayOfThings.length; j++) {
        var currentElement = arrayOfThings[j] * 1;
        if (isNaN(currentElement)) {
            continue;
        }
        var hasDuplciate = false;
            for(var h = 0; h < outputArray.length; h++) {
                var testedElement = outputArray[h];
                if(currentElement == testedElement) {
                    hasDuplciate = true;
                }
            }
            if(!hasDuplciate) {
                outputArray.push(currentElement);
            }
    }
    return outputArray;
};