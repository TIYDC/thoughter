module.exports = function configureGrunt(gruntConfig){
  gruntConfig.initConfig({
    clean: [ 'build/' ],//cleaning

           copy: {

               copythehtml: {
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
               },
               copythejquery: {//copying dependency files into js build folder so my app has proper linkage
                  files: [
                    {
                          cwd: 'node_modules/jquery/dist/',
                          src: ['jquery.js'],//jquery is js
                          dest: 'build/js/vendor/',//so now we know the jquery file will be copied into our build/js/vendor folder//then when you run it you can see its created on right
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

           jshint: {//linting

               appjs: {
                   options: {
                       jshintrc: '.jshintrc'
                   },
                   files: {
                       src: [ 'src/**/*.js' ]
                   }
               }

           },

           karma: {//testing
                   //configuring karma with grunt letting grunt know that karma works
                   //with mocha and chai frame works and to launch testing within karma browser
               all: {
                   options: {
                       frameworks: [ 'mocha', 'chai' ],
                       browsers: [ 'Chrome' ],
                       singleRun: true,
                       files: [//test all of the files that end in extension .js
                         //when i use my sinnon server find node modules file with that code
                         //and test code is written my test/specs folder with any file that has
                         //a .js extention
                           'src/**/*.js',
                           'node_modules/sinon/pkg/sinon-2.0.0.js',
                           'test/specs/**/*.js'
                       ],
                       preprocessors: {//what files we want to be pre processed
                            'src/**/*.js': ['coverage'],//all the files were testing
                            //want coverage plug in to watch during those tests
                            //then generate a summary
                            //coverage is the plug in and dots is part of how they report
                            //back
                       },
                       reporters: ['dots', 'coverage'],//in that summary i want
                       //dots which shows me the number of tests and a color
                       //indication of whether or not they passed
                       coverageReporter: {
                         type: 'text-summary'//so it doesnt come out looking all codey
                         //makes it look clean in terminal
                       }
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
  //the clean task deletes the whole build directory and is the first task that runs
  //build = running all of these tasks. you can name it whatever
  gruntConfig.registerTask( 'build', [ 'clean', 'jshint', 'karma', 'copy', 'sass' ] );
  //gruntConfig.registerTask( 'watch', ['build']);
};
