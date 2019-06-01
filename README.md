# karma-chromiumedge-launcher

> Launcher for Chromium Edge Dev and Chromium Edge Canary for Windows and Mac OS

## Installation

Clone/download the package

```bash
# Run in clonned directory
npm run package  # Generates package in tgz format

# Run in angular project
# Provide path to tgz file generated in earlier step
npm install -g <path/to/tgz>
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['EdgeDev']
  });
};
```

The project is based on [karma-chrome-launcher
](https://github.com/karma-runner/karma-chrome-launcher) as most of flags/configs for Chromium Edge are similar to Chrome browser

---

For more information on Karma see the [homepage].

[homepage]: http://karma-runner.github.com
