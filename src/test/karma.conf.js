module.exports = function(config){
  config.set({

    basePath : '../../',

    files : [
      'lib/bower/angular/angular.js',
      'lib/bower/angular-route/angular-route.js',
      'lib/bower/angular-mocks/angular-mocks.js',
      'src/app/components/**/*.js',
      'src/app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
