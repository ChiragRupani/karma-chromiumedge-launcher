# Karma-Chromium-Edge-Launcher

[![npm (scoped)](https://img.shields.io/npm/v/@chiragrupani/karma-chromium-edge-launcher.svg?style=flat-square)](https://www.npmjs.com/package/@chiragrupani/karma-chromium-edge-launcher) [![npm](https://img.shields.io/npm/dt/@chiragrupani/karma-chromium-edge-launcher.svg?style=flat-square)](https://www.npmjs.com/package/@chiragrupani/karma-chromium-edge-launcher)

[![Build Status](https://dev.azure.com/chiragrupani/chromium-edge-launcher/_apis/build/status/ChiragRupani.karma-chromiumedge-launcher?branchName=master)](https://github.com/ChiragRupani/karma-chromiumedge-launcher)

> Launcher for Chromium Edge Canary, Dev, Beta and Stable channels for Windows OS, Mac OS and Linux OS

Available in [NPM Registry](https://www.npmjs.com/package/@chiragrupani/karma-chromium-edge-launcher)

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

If you want to explicity specify the path for browser installation, set environment variable from this list, corresponding to release channel:

```bash
EDGE_BIN, EDGE_BETA_BIN, EDGE_DEV_BIN, EDGE_CANARY_BIN
```

Example:

```bash
# Add at top of karma.conf.js
process.env.EDGE_DEV_BIN =
  "C:\\Program Files (x86)\\Microsoft\\Edge Dev\\Application\\msedge.exe";

```

That's all is required to use Karma with Chromium Edge browser.

The browser can also be specified with `npm test` commmand like below:

```bash
 "coverage": "ng t --no-watch --code-coverage --reporters=junit,coverage-istanbul --browsers=EdgeHeadless --progress=false"
```

## Build from Source

In case if you want to build package from github source

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
