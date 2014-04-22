module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    requirejs: {
      options: {
        baseUrl: "js/app"
        
      },
      //Use targets for different tasks.
      applicationMain: {
        options: {
          optimize: "none",
          name: "applicationMain",
          mainConfigFile: "js/app/applicationMain.js",
          out: "js/output/applicationMain.js",
          done: function(done, output) {

            console.log('task is done');

            grunt.task.run('notifiers');
            done();
            
          }  
        }
      }
    },

    notify: {
      jsCompiled: {
        options: {
          
          title: "Task Complete",
          message: "requirejs has compiled"
        }
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          //outputStyle: 'compressed'
          outputStyle: 'expanded'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      applicationMain: {
        files: ["js/app/applicationMain.js"],
        tasks: ["requirejs:applicationMain"]  
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('notifiers', ['notify:jsCompiled']);

}