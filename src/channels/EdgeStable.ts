import BaseBrowser from '../BaseBrowser';
import {
  DarwinConstants,
  LinuxConstants,
  WindowsConstants,
} from '../Constants';
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
    linux: Utilities.GetLinuxBin(LinuxConstants.Edge),
    darwin: Utilities.GetEdgeDarwin(
      `/Applications/${DarwinConstants.Edge}.app/Contents/MacOS/${DarwinConstants.Edge}`
    ),
    win32: Utilities.GetEdgeExe(WindowsConstants.Edge),
  },

  ENV_CMD: 'EDGE_BIN',
};

export default EdgeStableBrowser;
