exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/navigate_to_compare_fund*.js'],
  capabilities: {
    'browserName': 'chrome',
    'binary': '/usr/bin/google-chrome'
  }
}

