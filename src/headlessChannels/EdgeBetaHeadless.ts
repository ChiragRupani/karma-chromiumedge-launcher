import BaseBrowser from '../BaseBrowser';
import Utilities from '../Utilities';

const EdgeBetaHeadlessBrowser = function(baseBrowserDecorator, args) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getHeadlessOptions;
};

EdgeBetaHeadlessBrowser.$inject = ['baseBrowserDecorator', 'args'];

EdgeBetaHeadlessBrowser.prototype = {
  name: 'Edge Beta Headless',

  DEFAULT_CMD: {
    linux: null,
    darwin: Utilities.GetEdgeDarwin(
      '/Applications/Microsoft Edge Beta.app/Contents/MacOS/Microsoft Edge Beta'
    ),
    win32: Utilities.GetEdgeExe('Edge Beta')
  },

  ENV_CMD: 'EDGE_Beta_BIN'
};

export default EdgeBetaHeadlessBrowser;
