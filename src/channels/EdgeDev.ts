import BaseBrowser from '../BaseBrowser';
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
    linux: Utilities.GetLinuxBin('microsoft-edge-dev'),
    darwin: Utilities.GetEdgeDarwin(
      '/Applications/Microsoft Edge Dev.app/Contents/MacOS/Microsoft Edge Dev'
    ),
    win32: Utilities.GetEdgeExe('Edge Dev'),
  },

  ENV_CMD: 'EDGE_DEV_BIN',
};

export default EdgeDevBrowser;
