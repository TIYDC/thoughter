module.exports = function configureGrunt(gruntConfiguration) {

  gruntConfiguration.initConfig({

    clean: [ 'build/' ],

    copy: {

      htmlCopy:{
        files: [
          {
            cwd: 'src/',
            src: [ '*html' ],
            dest: 'build/',
            expand: true
          }
        ]
      },

//enter sass
//enter jshint
//enter karma

    }
  });

  require('load-grunt-tasks')(gruntConfiguration);

  // gruntConfiguration.registerTask( 'build', ['jshint', 'karma', 'clean', 'copy', 'sass' ] );
  gruntConfiguration.registerTask( 'build', ['clean', 'copy' ] );


};
