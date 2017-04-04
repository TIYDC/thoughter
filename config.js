module.exports = function karmaConfig( config ) {
 config.set({
   //minimum config set that we need
   //Karma will inject the mocha and js files into its test runner HTML file for us
   frameworks: ['chai', 'mocha'],
   browsers: [ 'Chrome' ],
   singleRun: true, //this is going to launch Chrome, if it was false, it would run the test inside of the browser and then leave it there
   files: [
     //the script tags that you want to put in the fake html tag
     'src/**/*.js',
     'node_modules/sinon/pkg/sinon-2.0.0.js',
     'test/specs/**/*.js'

   ]
 });
};
