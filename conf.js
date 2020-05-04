var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  params: {
    appUrl: "https://www.vanguardinvestments.com.au",
    appCompareHostUrl:"https://tool.vanguardinvestments.com.au"
  },

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*.js'],
  capabilities: {
    'browserName': 'chrome',
    'binary': '/usr/bin/google-chrome'
  },
  onPrepare: function () {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp/screenshots'
    }).getJasmine2Reporter());
  }
}

