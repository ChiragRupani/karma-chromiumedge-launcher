import BaseBrowser from '../BaseBrowser';
import {
  DarwinConstants,
  LinuxConstants,
  WindowsConstants,
} from '../Constants';
import Utilities from '../Utilities';

const EdgeDevBrowser = function (baseBrowserDecorator, args) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getOptions;
};

EdgeDevBrowser.$inject = ['baseBrowserDecorator', 'args'];

EdgeDevBrowser.prototype = {
  name: 'Edge Dev',

  DEFAULT_CMD: {
    linux: Utilities.GetLinuxBin(LinuxConstants.EdgeDev),
    darwin: Utilities.GetEdgeDarwin(
      `/Applications/${DarwinConstants.EdgeDev}.app/Contents/MacOS/${DarwinConstants.EdgeDev}`
    ),
    win32: Utilities.GetEdgeExe(WindowsConstants.EdgeDev),
  },

  ENV_CMD: 'EDGE_DEV_BIN',
};

export default EdgeDevBrowser;
