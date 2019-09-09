import EdgeBetaBrowser from './src/EdgeBeta';
import EdgeCanaryBrowser from './src/EdgeCanary';
import EdgeDevBrowser from './src/EdgeDev';

module.exports = {
  'launcher:EdgeDev': ['type', EdgeDevBrowser],
  'launcher:EdgeCanary': ['type', EdgeCanaryBrowser],
  'launcher:EdgeBeta': ['type', EdgeBetaBrowser]
  // Headless - not supported yet
  //'launcher:EdgeDevHeadless': ['type', EdgeDevHeadlessBrowser],
  //'launcher:EdgeCanaryHeadless': ['type', EdgeCanaryHeadlessBrowser]
};
