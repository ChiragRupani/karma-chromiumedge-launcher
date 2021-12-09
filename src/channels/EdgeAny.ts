import BaseBrowser from '../BaseBrowser';
import Utilities from '../Utilities';

const EdgeAnyBrowser = function (baseBrowserDecorator, args) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getOptions;
};

EdgeAnyBrowser.$inject = ['baseBrowserDecorator', 'args'];

EdgeAnyBrowser.prototype = {
  name: 'Edge Any',

  DEFAULT_CMD: {
    linux: Utilities.GetEdgeAnyLinux(),
    darwin: Utilities.GetEdgeAnyDarwin(),
    win32: Utilities.GetAnyEdgeWindows(),
  },

  ENV_CMD: 'EDGE_ANY_BIN',
};

export default EdgeAnyBrowser;
