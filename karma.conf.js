// Karma configuration
// Generated on Mon Jun 30 2014 09:09:19 GMT+0400 (MSK)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'http://localhost:4567/javascripts/all.js', watched: true, included: true, served: true },
      { pattern: 'source/javascripts/**/*', watched: true, included: false, served: false },
      { pattern: 'source/tz/**/*', watched: true, included: false, served: true },
      { pattern: 'source/cldr/**/*', watched: true, included: false, served: true },
      { pattern: 'spec/fixtures/*.json', watched: true, included: false, served: true },
      "bower_components/jasmine-jquery/lib/jasmine-jquery.js",
      { pattern: 'spec/javascripts/tests/*.coffee', watched: true, included: true, served: true }
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.coffee': ['coffee']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
