module.exports = function karmaConfig( config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    singleRun: true,
    files: [
      // globbing pattern for searching src directory and any sub for any js
      'src/js/*.js',
      'node_modules/fetch-mock/es5/client-browserified.js',
      'test/specs/**/*.js'
    ]
  });
};
