module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: ['sample.test.js'],
    exclude: [],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['EdgeAnyHeadless'],
    singleRun: true,
    plugins: [require.resolve('../dist'), 'karma-mocha'],
  });
};
