module.exports = function configureGrunt(gruntConfig){

  gruntConfig.initConfig({
    clean: ['build/'],

    copy: {
      htmlcopy: {

        files: [ {
          src: 'src/*.html',
          dest: 'build/',
          expand: true
         }
        ]
      }
    },
    copythejquery: {
       files: [
         {
           cwd: 'node_modules/jquery/dist',
           src: ['jquery.js'],
           dest: 'build/js/vendor/',
           expand: true
         }
       ]

     },

     copythejs:{
       files: [
         {
           cwd: 'src/',
           src: ['**/*.js'],
           dest: 'build/',
           expand: true
         }
       ]
     },

    sass: {
      all: {
        files: {
          'build/style.csss':'src/sass/main.scss'
        }
      }
    },
   jshint: {
      appjs: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: ['src/**/*.js']
        }
      }
    },
    karma: {
      all: {

        options:{
          //if Im using grunt to run karma (tests), then we DON'T need a app.conf.js
          //file for karma separatelly
          //Same options from Conf.js file
          frameworks: ['mocha', 'chai'],
          browsers: ['Chrome'],
          singleRun: true,
          files: [
            'src/**/*.js',
            'tests/specs/**/*.js'
          ]
        }
      }
    }

  });
  require('load-grunt-tasks')(gruntConfig);

  //create a task called "alias" to run multiple OTHER tasks
  //can create more aliases!
  gruntConfig.registerTask('build',['jshint','karma','clean','copy','sass']);
};
