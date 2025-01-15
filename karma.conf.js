module.exports = function (config) {
  config.set({
    // Base path for resolving files and excluding files
    basePath: '',
    
    // Testing frameworks
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    
    // Plugins to load
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    
    // Client-side configuration
    client: {
      clearContext: false // Leave Jasmine Spec Runner output visible in browser
    },
    
    // Coverage reporter configuration
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    
    // Specify reporters
    reporters: ['progress', 'kjhtml'],
    
    // Port number for the web server
    port: 9876,
    
    // Enable/disable colors in output
    colors: true,
    
    // Log level
    logLevel: config.LOG_INFO,
    
    // Automatically watch files and execute tests on changes
    autoWatch: false,
    
    // Specify browsers (use ChromeHeadless for CI)
    browsers: ['ChromeHeadless'],
    
    // Continuous Integration mode
    singleRun: true, // Set to true to exit after running tests
    
    // Timeouts to prevent hanging in CI environments
    browserDisconnectTimeout: 10000, // Time to wait before reconnecting
    browserDisconnectTolerance: 1,   // Max disconnects allowed
    browserNoActivityTimeout: 30000, // Time to wait for activity
    captureTimeout: 60000,           // Max time to wait for browser to start
    
    // Concurrency level (number of browsers to run simultaneously)
    concurrency: Infinity
  });
};
