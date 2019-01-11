// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const crew = require('serenity-js/lib/stage_crew');
const basePath = __dirname;

console.log(__dirname);

exports.config = {
  allScriptsTimeout: 11000,

  capabilities: {
    'browserName': 'chrome'
  },

  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  // Framework definition - tells Protractor to use Serenity/JS
  framework: 'custom',
  // frameworkPath: require.resolve('serenity-js'),
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    './e2e/features/**/*.feature'
  ],

  cucumberOpts: {
    // require: ['./e2e/steps/**/*.ts'], // loads step definitions
    require: [
      'dist/out-tsc/e2e/steps/**/*.steps.js'
    ], // loads step definitions
    format: [
      'pretty'
    ],
    dryRun: false,
    compiler: []
    //compiler: 'ts:ts-node/register' // interpret step definitions as TypeScript
  },

  serenity: {
    crew: [
      crew.serenityBDDReporter(),
      crew.photographer()
    ],
    dialect: 'cucumber',
    stageCueTimeout: 30 * 1000 // up to 30 seconds by default
  },

  onPrepare: function () {
    global.ngApimock = require('./.tmp/ngApimock/protractor.mock.js');
  },

  ngApimockOpts: {
    angularVersion: 7,
    hybrid: false
  }

};
