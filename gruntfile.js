module.exports = function configureGrunt(gruntConfiguration) {

  gruntConfiguration.initConfig({

    clean: [ 'build/' ],

    copy: {

    copyjs:{
          files: [
            {
              cwd: 'src/js/',
              src: [ '*.js' ],
              dest: 'build/js',
              expand: true
            }
          ]
        },

    htmlcopy:{
      files: [
        {
          cwd: 'src/',
          src: [ '*.html' ],
          dest: 'build/',
          expand: true
        }
      ]
    },


  copyjquery:{
          files: [
            {
              cwd: 'node_modules/jquery/dist',
              src: [ 'jquery.js' ],
              dest: 'build/js/vendor',
              expand: true
            }
          ]
        }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files:  {
        src: [ 'src/**/*.js' ]  // look any sub directory of src that includes a .js file
      }
    },


    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'main.css': 'src/sass/main.scss'       // 'destination': 'source'

        }
      }
    },

    karma: {
      unit: {
        configFile: 'config.js'
      }
    }


  });

  require('load-grunt-tasks')(gruntConfiguration);

  gruntConfiguration.registerTask( 'build', ['clean', 'copy', 'jshint', 'karma', 'sass' ] );


};
