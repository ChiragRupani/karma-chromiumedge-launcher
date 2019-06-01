import BaseBrowser from './BaseBrowser';
import Utilities from './Utilities';

const EdgeCanaryBrowser = function(baseBrowserDecorator, args) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getOptions;
};

EdgeCanaryBrowser.$inject = ['baseBrowserDecorator', 'args'];

EdgeCanaryBrowser.prototype = {
  name: 'Edge Canary',

  DEFAULT_CMD: {
    linux: null,
    darwin: Utilities.GetEdgeDarwin(
      '/Applications/Microsoft Edge Canary.app/Contents/MacOS/Microsoft Edge Canary'
    ),
    win32: Utilities.GetEdgeExe('Edge SxS')
  },

  ENV_CMD: 'EDGE_CANARY_BIN'
};

export default EdgeCanaryBrowser;
