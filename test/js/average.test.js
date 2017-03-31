describe('average', function () {
  it('should work', function () {
    expect('foo').to.be.a('string')
  });
  it('should not work', function () {
    expect('foo').to.be.a('number')
  });
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
//}
//
//// we have to kickoff jasmine, as it is asynchronous
window.__karma__.start();