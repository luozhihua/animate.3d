'use strict';

var fs = require('fs');

module.exports = function (grunt) {

  // Count run times
  require('time-grunt')(grunt);

  // Load grunt tasks automaticly
  require('load-grunt-tasks')(grunt);

  // read some options from package.json
  var pkg = require('./package.json');

  var gruntTasks = {

    pkg: pkg,

    // Watch file's changes
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      sass: {
        files: ['scss/**/*.{scss,sass}'],
        tasks: ['sass:dist', 'autoprefixer', 'copy']
      }, livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/**/*.*',
          'dist/**/*.*'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,

        // change hostname to “0.0.0.0” to allow remote connections.
        hostname: 'localhost',
        middleware: function(connect, options/*, middlewares*/) {
          return [
            mock.enableRest(config.src, options)
          ];
        }
      },
      livereload: {
        options: {
          middleware: function(connect, options/*, middlewares*/) {
            return [
              connect.static('./app'),
              connect.static('/css', connect.static('./dist')),
            ];
          }
        }
      }
    },

    // check syntax of javascript code
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        './**/*.js'
      ]
    },


    wiredep: {
      app: {
        ignorePath: /^\/|\.\.\//,
        cwd: './',
        src: ['app/index.html'],
        exclude: []
      },
      sass: {
        src: ['scss/**/*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}<%= config.bower %>\//
      }
    },

    // compile scss to css.
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'scss/',
          src: ['**/*.{scss,sass}'],
          dest: 'dist/',
          ext: '.3d.css'
        }]
      }
    },

    // Generate SCSS documation.
    sassdoc: {
      'default': {
        src: 'scss/',
        options: {
          dest: 'docs/',
          display: {
            access: ['public', 'private'],
            alias: true,
            watermark: true,
          },
          groups: {
            slug: 'Title',
            helpers: 'Helpers',
            hacks: 'Dirty Hacks & Fixes',
            'undefined': 'Ungrouped',
          },
          basePath: 'https://github.com/luozhihua/animate.3d',
        },
      },
    },

    commands: {
        options: {force: false},
        scss2stylus: {
            cmd: 'cd ./scss/ && sass2stylus **/*.scss ../stylus',
        }
    },

    // Convert scss to less (Generate less code automaticly).
    scss2less: {
      convert: {
        options: {
          paths: ['./']
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: '**/*.scss',
          dest: 'less',
          ext: '.less',
          rename: function(dest, src) { return dest + '/' + src.replace('_','');}
        }]
      }
    },

    // Auto add css prefix like -webkit-*, -moz-*
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 5 versions', 'Firefox ESR', 'Opera 10.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: 'animate.3d.css',
          dest: 'dist/'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care
    // of minification. These next options are pre-configured if you do not
    // wish to use the Usemin blocks.
    cssmin: {
      options: {
        sourceMap: true,
        sourceMapName: function(filename) { return filename.replace(/\.css$/, '.map'); },
        banner: '/**! \n' +
                ' * -------------------------------------------------------------\n' +
                ' * Copyright (c) 2015 Colin, All rights reserved. \n' +
                ' * http://www.luozhihua.com/ \n' +
                ' *  \n' +
                ' * @name: <%= pkg.name %> \n' +
                ' * @version: <%= pkg.version%> \n' +
                ' * @description: <%= pkg.description%> \n' +
                ' * @createTime: Monday, January 26, 2015 17:16:24 \n' +
                ' * @repository: https://github.com/luozhihua/<%= pkg.name%>.git\n' +
                ' * @doc: https://github.com/luozhihua/<%= pkg.name%>.git\n' +
                ' * @author: <%= pkg.author%> \n' +
                ' \n' +
                ' \n' +
                ' * - LAST BUILD:\n\n' +
                ' * @buildByUser: <%= pkg.author || "-" %> \n' +
                ' * @buildTime: <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> \n' +
                ' * ------------------------------------------------------------- \n' +
                ' */ \n\n'
      },
      dist: {
        'files': {
          'dist/animate.3d-min.css': [
            'dist/animate.3d.css'
          ]
        }
      }
    },

    // Copy css files to demo directory
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: './dist/',
          dest: 'app/css/',
          src: '*.*'
        }]
      }
    },

    // notify tasks result/status on the desktop.
    'notify_hooks': {
      options: {
        enabled: true,
        title: 'Animate.3d Grunt',
        'max_jshint_notifications': 5
      }
    },

    notify: {
      watch: {
        options: {
          title: 'File changed.',  // optionail
          message: 'File changed and has rebuild.' // required
        }
      }
    }
  };

  grunt.initConfig(gruntTasks);

  // random preview server's port
  grunt.registerTask('setServerPort', function() {
    var eport = require('eport');
    var times = 0;
    var async = this.async();

    function done() {
      if (times === 2) {
        async();
      }
    }

    // preview server port
    eport(function(err, port) {
      grunt.config.set('connect.options.port', port);
      times += 1;
      done();
    });

    // livereload port
    eport(function(err, port) {
      grunt.config.set('connect.options.livereload', port);
      times += 1;
      done();
    });
  });

  // regist a task "serve"
  grunt.registerTask('serve',
                    'preview server started, you can use this option to allow remote connect.：--allow-remote',
    function () {

    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }

    grunt.task.run([
      'setServerPort',
      'default',
      'connect:livereload',
      'watch'
    ]);
  });


  grunt.registerTask('scssdoc', ['sassdoc']);
  grunt.registerTask('doc', ['sassdoc']);

  grunt.registerTask('default', [
    'wiredep',
    'sass',
    'autoprefixer',
    'copy',
    'scss2less',
    'commands:scss2stylus',
    'cssmin'
  ]);
};