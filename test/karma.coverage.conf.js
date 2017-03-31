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
    browsers: ['PhantomJS'],

    // https://github.com/karma-runner/karma-coverage
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/js/**/*.js': ['coverage']
    },
    junitReporter: {
      outputDir: '../reports/js-unit',
      outputFile: null,
      suite: ''
    },
    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'cobertura', subdir: '.', file: 'cobertura.xml'}
      ],
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    }
  });
};