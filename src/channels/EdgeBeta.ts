import BaseBrowser from '../BaseBrowser';
import {
  DarwinConstants,
  LinuxConstants,
  WindowsConstants,
} from '../Constants';
import Utilities from '../Utilities';

const EdgeBetaBrowser = function (baseBrowserDecorator, args) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getOptions;
};

EdgeBetaBrowser.$inject = ['baseBrowserDecorator', 'args'];

EdgeBetaBrowser.prototype = {
  name: 'Edge Beta',

  DEFAULT_CMD: {
    linux: Utilities.GetLinuxBin(LinuxConstants.EdgeBeta),
    darwin: Utilities.GetEdgeDarwin(
      `/Applications/${DarwinConstants.EdgeBeta}.app/Contents/MacOS/${DarwinConstants.EdgeBeta}`
    ),
    win32: Utilities.GetEdgeExe(WindowsConstants.EdgeBeta),
  },

  ENV_CMD: 'EDGE_BETA_BIN',
};

export default EdgeBetaBrowser;
