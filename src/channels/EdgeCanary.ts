import BaseBrowser from "../BaseBrowser";
import {
  DarwinConstants,
  LinuxConstants,
  WindowsConstants,
} from "../Constants";
import Utilities from "../Utilities";

const EdgeCanaryBrowser = function (
  baseBrowserDecorator: (arg0: any) => void,
  args: { flags?: string[]; edgeDataDir?: string }
) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getOptions;
};

EdgeCanaryBrowser.$inject = ["baseBrowserDecorator", "args"];

EdgeCanaryBrowser.prototype = {
  name: "Edge Canary",

  DEFAULT_CMD: {
    linux: Utilities.GetLinuxBin(LinuxConstants.EdgeCanary),
    darwin: Utilities.GetEdgeDarwin(
      `/Applications/${DarwinConstants.EdgeCanary}.app/Contents/MacOS/${DarwinConstants.EdgeCanary}`
    ),
    win32: Utilities.GetEdgeExe(WindowsConstants.EdgeCanary),
  },

  ENV_CMD: "EDGE_CANARY_BIN",
};

export default EdgeCanaryBrowser;
