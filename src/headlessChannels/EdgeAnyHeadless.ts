import BaseBrowser from "../BaseBrowser";
import Utilities from "../Utilities";

const EdgeAnyHeadlessBrowser = function (
  baseBrowserDecorator: (arg0: any) => void,
  args: { flags?: string[]; edgeDataDir?: string }
) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getHeadlessOptions;
};

EdgeAnyHeadlessBrowser.$inject = ["baseBrowserDecorator", "args"];

EdgeAnyHeadlessBrowser.prototype = {
  name: "Edge Any Headless",

  DEFAULT_CMD: {
    linux: Utilities.GetEdgeAnyLinux(),
    darwin: Utilities.GetEdgeAnyDarwin(),
    win32: Utilities.GetAnyEdgeWindows(),
  },

  ENV_CMD: "EDGE_ANY_BIN",
};

export default EdgeAnyHeadlessBrowser;
