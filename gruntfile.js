module.exports = function configureGrunt(gruntConfig){
  gruntConfig.initConfig({
    clean: [ 'build/' ],

           copy: {  // task name (defined by the plugin)

               copythehtml: { // target name (I make it up)
                   // the configuration for THIS target, in THIS task is below
                   files: [
                       {
                           cwd: 'src/',//to get into source
                           src: [ '*.html' ],//anything that has a html at end
                           dest: 'build/',//copy file and put that copy in this build dir
                           expand: true
                       }
                   ]
               },
               copythejs: {
                  files: [
                    {
                          cwd: 'src/js/',
                          src: ['*.js'],
                          dest: 'build/js/', // slash at the end means i want you to find the js and go in it and thats where i want you to put the files
                          expand: true
                    }
                  ]
               }
           },

           sass: {//within the sass what we're creating is a task that looks for
           //all our sass/css and then compiling all of it into one pile called
           //style.css and putting our style.css file in our build directory
           //style.css will only ever be in the build
               all: {//
                   //
                   files: {
                       //dest/source
                       //dest - where were gunna put whatever we say is our source into
                       //> creates a new file called style.css and puts in our main.scss
                       //and everything that exports into it
                       'build/style.css' : 'src/sass/main.scss'
                   }
               }

           },

           jshint: {

               appjs: {
                   options: {
                       jshintrc: '.jshintrc'
                   },
                   files: {
                       src: [ 'src/**/*.js' ]
                   }
               }

           },

           karma: {

               all: {
                   options: {
                       // These came from my karma configuration file...
                       // they are the SAME options!
                       // IF you use grunt to run karma (tests), then we
                       // do NOT also need a app.conf.js file for karma separately
                       frameworks: [ 'mocha', 'chai' ],
                       browsers: [ 'Chrome' ],
                       singleRun: true,
                       files: [
                           'src/**/*.js',
                           'node_modules/sinon/pkg/sinon-2.0.0.js',
                           'test/specs/**/*.js'
                       ]
                   }
               }

           }

  });
  require('load-grunt-tasks')(gruntConfig);
  //whenever i run grunt build in  my terminal do these things in this order
  //out of convention building our build directory
  //we dont want to put anything in our build directory thats broken
  //thats why first jshint to make sure theres no syntax errors and then why
  //i test my files next to make sure nothing breaks and then if those two pass
  //i know i have good code so i can copy those files and put into build directory
  gruntConfig.registerTask( 'build', [ 'jshint', 'karma', 'copy', 'sass' ] );
};
