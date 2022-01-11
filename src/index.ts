import EdgeAnyBrowser from './channels/EdgeAny';
import EdgeBetaBrowser from './channels/EdgeBeta';
import EdgeCanaryBrowser from './channels/EdgeCanary';
import EdgeDevBrowser from './channels/EdgeDev';
import EdgeBrowser from './channels/EdgeStable';
import EdgeAnyHeadlessBrowser from './headlessChannels/EdgeAnyHeadless';
import EdgeBetaHeadlessBrowser from './headlessChannels/EdgeBetaHeadless';
import EdgeCanaryHeadlessBrowser from './headlessChannels/EdgeCanaryHeadless';
import EdgeDevHeadlessBrowser from './headlessChannels/EdgeDevHeadless';
import EdgeHeadlessBrowser from './headlessChannels/EdgeStableHeadless';

module.exports = {
  'launcher:EdgeDev': ['type', EdgeDevBrowser],
  'launcher:EdgeCanary': ['type', EdgeCanaryBrowser],
  'launcher:EdgeBeta': ['type', EdgeBetaBrowser],
  'launcher:Edge': ['type', EdgeBrowser],
  'launcher:EdgeAny': ['type', EdgeAnyBrowser],

  // Headless
  'launcher:EdgeHeadless': ['type', EdgeHeadlessBrowser],
  'launcher:EdgeDevHeadless': ['type', EdgeDevHeadlessBrowser],
  'launcher:EdgeBetaHeadless': ['type', EdgeBetaHeadlessBrowser],
  'launcher:EdgeCanaryHeadless': ['type', EdgeCanaryHeadlessBrowser],
  'launcher:EdgeAnyHeadless': ['type', EdgeAnyHeadlessBrowser],
};
