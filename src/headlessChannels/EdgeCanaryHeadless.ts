import BaseBrowser from '../BaseBrowser';
import Utilities from '../Utilities';

const EdgeCanaryHeadlessBrowser = function (baseBrowserDecorator, args) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getHeadlessOptions;
};

EdgeCanaryHeadlessBrowser.$inject = ['baseBrowserDecorator', 'args'];

EdgeCanaryHeadlessBrowser.prototype = {
  name: 'Edge Canary Headless',

  DEFAULT_CMD: {
    linux: Utilities.GetLinuxBin('microsoft-edge-canary'),
    darwin: Utilities.GetEdgeDarwin(
      '/Applications/Microsoft Edge Canary.app/Contents/MacOS/Microsoft Edge Canary'
    ),
    win32: Utilities.GetEdgeExe('Edge SxS'),
  },

  ENV_CMD: 'EDGE_CANARY_BIN',
};

export default EdgeCanaryHeadlessBrowser;
