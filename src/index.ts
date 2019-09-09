import EdgeBetaBrowser from './channels/EdgeBeta';
import EdgeCanaryBrowser from './channels/EdgeCanary';
import EdgeDevBrowser from './channels/EdgeDev';

module.exports = {
  'launcher:EdgeDev': ['type', EdgeDevBrowser],
  'launcher:EdgeCanary': ['type', EdgeCanaryBrowser],
  'launcher:EdgeBeta': ['type', EdgeBetaBrowser]
  // Headless - not supported yet
  //'launcher:EdgeDevHeadless': ['type', EdgeDevHeadlessBrowser],
  //'launcher:EdgeCanaryHeadless': ['type', EdgeCanaryHeadlessBrowser]
};
