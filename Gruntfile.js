// Generated on 2014-10-27 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'src/test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'src/test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'src/app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    movWePlex: appConfig,

    vendordir: 'lib',
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner:
        '/**\n' +
        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' */\n\n'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= movWePlex.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['src/test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= movWePlex.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= movWePlex.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= movWePlex.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/lib/bower',
                connect.static('./lib/bower')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/lib/bower',
                connect.static('./lib/bower')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= movWePlex.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= movWePlex.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'src/test/.jshintrc'
        },
        src: ['src/test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= movWePlex.dist %>/{,*/}*',
            '!<%= movWePlex.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    tags: {
      buildJS: {
        options: {
          scriptTemplate: '<script src="{{ path }}" type="text/javascript"></script>',
          openTag: '<!-- start js tags -->',
          closeTag: '<!-- end js tags -->'
        },
        src: [
          'dist/scripts/**/*.js',
          '!dist/scripts/shim.js',
          '!dist/scripts/app.js',
          '!dist/scripts/src.js',
          '!dist/scripts/controllers/**/*.js',
        ],
        dest: 'dist/index.html'
      },
      buildAppJS: {
        options: {
          scriptTemplate: '<script src="{{ path }}" type="text/javascript"></script>',
          openTag: '<!-- start app js tags -->',
          closeTag: '<!-- end app js tags -->'
        },
        src: [
          'dist/scripts/app.js',
          'dist/scripts/src.js',
          'dist/scripts/controllers/**/*.js',
        ],
        dest: 'dist/index.html'
      },
      buildShim: {
        options: {
          scriptTemplate: '<script src="{{ path }}" type="text/javascript"></script>',
          openTag: '<!-- start shim js tags -->',
          closeTag: '<!-- end shim js tags -->'
        },
        src: [
          'dist/scripts/shim.js',
        ],
        dest: 'dist/index.html'
      },
      buildCSS: {
        options: {
          linkTemplate: '<link rel="stylesheet" href="{{ path }}"/>',
          openTag: '<!-- start css tags -->',
          closeTag: '<!-- end css tags -->'
        },
        src: [
          'dist/styles/**/*.css'
        ],
        dest: 'dist/index.html'
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= movWePlex.app %>/index.html'],
        options: {
          directory: 'lib/bower',
          ignorePath:  /\.\.\//
        }
      }
    },

    /*jshint camelcase: false */
    bower_concat: {
      lib: {
        dest: '.tmp/scripts/lib.js',
        cssDest: '.tmp/styles/lib.css',
        exclude: [
          'json3',
          'es5-shim'
        ]
      },
      shim: {
        dest: '.tmp/scripts/shim.js',
        include: [
          'json3',
          'es5-shim'
        ]
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= movWePlex.dist %>/scripts/{,*/}*.js',
          '<%= movWePlex.dist %>/styles/{,*/}*.css',
          '<%= movWePlex.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= movWePlex.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= movWePlex.app %>/index.html',
      options: {
        dest: '<%= movWePlex.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= movWePlex.dist %>/{,*/}*.html'],
      css: ['<%= movWePlex.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= movWePlex.dist %>','<%= movWePlex.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= movWePlex.dist %>/styles/src.css': [
            '.tmp/styles/src.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= movWePlex.dist %>/scripts/src.js': [
            '.tmp/scripts/src.js'
          ],
          '<%= movWePlex.dist %>/scripts/lib.js': [
            '.tmp/scripts/lib.js'
          ]
        }
      }
    },

    concat: {
      distJS: {
        options: {
          banner: '<%= meta.banner %>'
        },
        src: [
          '<%= movWePlex.app %>/scripts/{,*/}*.js'
        ],
        dest: '.tmp/scripts/src.js'
      },
      distCSS: {
        options: {
          banner: '<%= meta.banner %>'
        },
        src: [
          '<%= movWePlex.app %>/styles/{,*/}*.css'
        ],
        dest: '.tmp/styles/src.css'
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= movWePlex.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= movWePlex.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= movWePlex.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= movWePlex.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= movWePlex.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= movWePlex.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/scripts',
          src: ['*.js', '!shim.js'],
          dest: '.tmp/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= movWePlex.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= movWePlex.app %>',
          dest: '<%= movWePlex.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= movWePlex.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'lib/bower/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= movWePlex.dist %>'
        }]
      },
      jsNoMin: {
        files: [{
          expand: true,
          dot: true,
          cwd: '.tmp',
          dest: '<%= movWePlex.dist %>',
          src: 'scripts/{,*/}*.js'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= movWePlex.app %>',
          dest: '<%= movWePlex.dist %>',
          src: 'scripts/{,*/}*.js'
        }]
      },
      js: {
        expand: true,
        dot: true,
        cwd: '<%= movWePlex.app %>',
        dest: '<%= movWePlex.dist %>',
        src: 'scripts/{,*/}*.js'
      },
      styles: {
        expand: true,
        cwd: '<%= movWePlex.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      stylesDist: {
        expand: true,
        cwd: '.tmp/styles',
        dest: 'dist/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'src/test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'nomin',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    //'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    // 'wiredep',
    // 'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'bower_concat',
    'copy:dist',
    'copy:js',
    // 'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    // 'usemin',
    // 'htmlmin'
    'tags'
  ]);

  grunt.registerTask('buildNoMin', [
    'clean:dist',
    // 'wiredep',
    // 'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'ngAnnotate',
    'bower_concat',
    'copy:dist',
    'copy:jsNoMin',
    'copy:stylesDist',
    // 'cdnify'
    'tags'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('nomin', [
    'newer:jshint',
    'test',
    'buildNoMin'
  ]);
};
