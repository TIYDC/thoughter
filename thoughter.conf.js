module.exports = function karmaConfig( config ){
  config.set({
    // Karma will inject the mocha and chai JS files into its test runner HTMl

    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    singleRun: true,
    files: [
      'src/**/*.js',
      //globbing pattern - look an the src/ directory and ANY subdirectory
      //for ANY file that ends in .js
      'node_modules/sinon/pkg/sinon-2.0.0.js',
      'tests/specs/**/*.js'
    ]
  });
};
