var assert = chai.assert;

describe.only('removeDuplicates', function () {
  var testsData = [
    {
      title: '[1,2,3] == [1,2,3]',
      input: [1,2,3],
      expected: [1,2,3]
    },
      {
          title: '[1,2,2] == [1,2]',
          input: [1,2,2],
          expected: [1,2]
      }
      ,
      {
          title: "['1','2', 'NOT A NUMBER'] == [1,2]",
          input: ['1','2', 'NOT A NUMBER'],
          expected: [1,2]
      }
  ];

  for(var a =0; a < testsData.length; a++) {
    (function () {
      var testData = testsData[a];
      it(testData.title, function () {
        // Given
        var input = testData.input;
        var expected = testData.expected;

        // When
        var output = window.removeDuplicates(input);

        // Then
        assert.deepEqual(output, expected);
      });
    })();
  }
});

//
//var isRunningInPhantom = (navigator.userAgent.indexOf('PhantomJS') !== -1);
//
//if(!isRunningInPhantom) {
//  window.__karma__.loaded = function() {};
//  var origKarmaResult = window.__karma__.result;
//  $('body').append('<div><h1>Zappers Test Results <span class="karma-tester-overview"></span></h1><ul class="error-karma-tester-container"></ul><ul class="success-karma-tester-container"></ul></div>');
//  var $overview = $('.karma-tester-overview');
//  var overview = {
//    success: 0,
//    error: 0,
//    skip: 0
//  };
//  window.__karma__.result = function (result) {
//    var $successKarmaTesterContainer = $('.success-karma-tester-container');
//    var $errorKarmaTesterContainer = $('.error-karma-tester-container');
//    var testName = result.suite.join(' > ') + ' - ' + result.description;
//    if(result.skipped) {
//      $successKarmaTesterContainer.append('<li style="color: #969696;">'+testName+'</li>');
//      overview.skip++;
//    } else if(result.success){
//      $successKarmaTesterContainer.append('<li style="color: #0eb106;">'+testName+'</li>');
//      overview.success++;
//    } else {
//      $errorKarmaTesterContainer.append('<li style="color: #b1000f;">'+testName+'</li>');
//      overview.error++;
//      for (var i = 0; i < result.log.length; i++) {
//        $errorKarmaTesterContainer.append('<li style="color: #b1000f;">---->'+result.log[i]+'</li>');
//      }
//    }
//    $overview.text('success:'+overview.success+' error:'+overview.error+' skipped:'+overview.skip);
//    origKarmaResult(result);
//  };
//  // we have to kickoff jasmine, as it is asynchronous
//  window.__karma__.start();
//}
//