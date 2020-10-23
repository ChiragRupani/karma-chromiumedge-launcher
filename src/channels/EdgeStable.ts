import BaseBrowser from '../BaseBrowser';
import Utilities from '../Utilities';

const EdgeStableBrowser = function (baseBrowserDecorator, args) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getOptions;
};

EdgeStableBrowser.$inject = ['baseBrowserDecorator', 'args'];

EdgeStableBrowser.prototype = {
  name: 'Edge',

  DEFAULT_CMD: {
    linux: Utilities.GetLinuxBin('microsoft-edge'),
    darwin: Utilities.GetEdgeDarwin(
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
    ),
    win32: Utilities.GetEdgeExe('Edge'),
  },

  ENV_CMD: 'EDGE_BIN',
};

export default EdgeStableBrowser;
