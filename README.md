# karma-chromiumedge-launcher

> Launcher for Chromium Edge Canary, Dev, Beta and Stable for Windows and Mac OS

## Installation

Clone/download the package

```bash
# Run in clonned directory to install dependencies
npm install

# Run in clonned directory
npm run package  # Generates package in tgz format

# Run in angular project
# Provide path to tgz file generated in earlier step
npm install -g <path/to/tgz>
```

## Configuration

```js
// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['EdgeDev'],
    plugins: [
      require('karma-jasmine'),
      require('@chiragrupani/karma-chromium-edge-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
  });
};
```

For Headless

```js
// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['EdgeDevHeadless'],
    plugins: [
      require('karma-jasmine'),
      require('@chiragrupani/karma-chromium-edge-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
  });
};
```

The project is based on [karma-chrome-launcher
](https://github.com/karma-runner/karma-chrome-launcher) as most of flags/configs for Chromium Edge are similar to Chrome browser

---

For more information on Karma see the [homepage].

[homepage]: http://karma-runner.github.com
