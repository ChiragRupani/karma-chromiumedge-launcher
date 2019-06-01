import BaseBrowser from './BaseBrowser';
import Utilities from './Utilities';

const EdgeDevHeadlessBrowser = function(baseBrowserDecorator, args) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getHeadlessOptions;
};

EdgeDevHeadlessBrowser.$inject = ['baseBrowserDecorator', 'args'];

EdgeDevHeadlessBrowser.prototype = {
  name: 'Edge Dev Headless',

  DEFAULT_CMD: {
    linux: null,
    // Chromium Edge only available in Canary Channel
    darwin: null,
    // Utilities.GetEdgeDarwin( '/Applications/Microsoft Edge Dev.app/Contents/MacOS/Microsoft Edge Dev'),
    win32: Utilities.GetEdgeExe('Edge Dev')
  },

  ENV_CMD: 'EDGE_DEV_BIN'
};

export default EdgeDevHeadlessBrowser;
