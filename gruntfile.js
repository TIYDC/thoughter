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
    }

  });
  require('load-grunt-tasks')(gruntConfig);

  //create a task called "alias" to run multiple OTHER tasks
  //can create more aliases!
  gruntConfig.registerTask('build',['clean','copy']);
};
