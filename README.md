# karma-chromiumedge-launcher

> Launcher for Chromium Edge Canary, Dev, Beta and Stable channels for Windows OS and Mac OS

Now available on [NPM Registry](https://www.npmjs.com/package/@chiragrupani/karma-chromium-edge-launcher) 🎉

## Installation

Install the package as dev-dependency

```bash
npm i -D @chiragrupani/karma-chromium-edge-launcher
```

# Configuration

Update `Karma.conf.js` replace or append to array of browsers and add require plugin as below:

```diff
// karma.conf.js
module.exports = function (config) {
  config.set({
-     browsers: ['Chrome'],
+     browsers: ['Edge'],
    plugins: [
-      require('karma-chrome-launcher'),
+      require('@chiragrupani/karma-chromium-edge-launcher'),
    ],
  });
};
```

Following browser channels are supported, add corresponding string in browsers:

- "Edge"
- "EdgeDev"
- "EdgeBeta"
- "EdgeCanary"

If you want to launch browser in headless mode, below is correspondling list:

- "EdgeHeadless"
- "EdgeDevHeadless"
- "EdgeBetaHeadless"
- "EdgeCanaryHeadless"

That's all is required to use Karma with Chromium Edge browser.

The browser can also be specified with `npm test` commmand like below:

```bash
 "coverage": "ng t --no-watch --code-coverage --reporters=junit,coverage-istanbul --browsers=EdgeHeadless --progress=false"
```

## Build from Source

In case you want to build package from github sources

```bash
# Clone/download the package

# Run in clonned directory to install dependencies
npm install

# Run in clonned directory
npm run package  # Generates package in tgz format

# Run in angular project
# Provide path to tgz file generated in earlier step
npm install -g <path/to/tgz>
```

The project is based on [karma-chrome-launcher
](https://github.com/karma-runner/karma-chrome-launcher) as most of flags/configs for Chromium Edge are similar to Chrome browser

---

For more information on Karma see the [homepage].

[homepage]: http://karma-runner.github.com
