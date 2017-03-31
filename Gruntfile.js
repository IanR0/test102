var grunt = require('grunt');

grunt.loadNpmTasks('grunt-karma');

grunt.initConfig({
    karma: {
      unit: {
        configFile: "test/karma.conf.js"
      },
      "coverage-report": {
        configFile: "test/karma.coverage.conf.js"
      }
    }
  }
);