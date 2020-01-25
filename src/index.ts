import EdgeBetaBrowser from './channels/EdgeBeta';
import EdgeCanaryBrowser from './channels/EdgeCanary';
import EdgeDevBrowser from './channels/EdgeDev';
import EdgeBrowser from './channels/EdgeStable';

module.exports = {
  'launcher:EdgeDev': ['type', EdgeDevBrowser],
  'launcher:EdgeCanary': ['type', EdgeCanaryBrowser],
  'launcher:EdgeBeta': ['type', EdgeBetaBrowser],
  'launcher:Edge': ['type', EdgeBrowser]
  // Headless - not supported yet
  //'launcher:EdgeDevHeadless': ['type', EdgeDevHeadlessBrowser],
  //'launcher:EdgeCanaryHeadless': ['type', EdgeCanaryHeadlessBrowser]
};
