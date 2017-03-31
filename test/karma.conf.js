module.exports = function (config, specificOptions) {
  "use strict";

  config.set({
    frameworks: ['mocha', 'chai'],
    // http://karma-runner.github.io/0.8/config/files.html
    basePath: '..',
    files: [
      {pattern: 'src/js/**/*.js', watched: true, included: true, served: true},
      {pattern: 'test/js/**/*.js', watched: true, included: true, served: true}
    ],
    logLevel: config.LOG_INFO,
    logColors: true,
    browsers: ['PhantomJS']
  });
};