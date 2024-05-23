import BaseBrowser from "../BaseBrowser";
import {
  DarwinConstants,
  LinuxConstants,
  WindowsConstants,
} from "../Constants";
import Utilities from "../Utilities";

const EdgeDevHeadlessBrowser = function (
  baseBrowserDecorator: (arg0: any) => void,
  args: { flags?: string[]; edgeDataDir?: string }
) {
  baseBrowserDecorator(this);
  var flags = args.flags || [];
  var userDataDir = args.edgeDataDir || this._tempDir;
  var browser = new BaseBrowser(flags, userDataDir);
  this._getOptions = browser._getHeadlessOptions;
};

EdgeDevHeadlessBrowser.$inject = ["baseBrowserDecorator", "args"];

EdgeDevHeadlessBrowser.prototype = {
  name: "Edge Dev Headless",

  DEFAULT_CMD: {
    linux: Utilities.GetLinuxBin(LinuxConstants.EdgeDev),
    darwin: Utilities.GetEdgeDarwin(
      `/Applications/${DarwinConstants.EdgeDev}.app/Contents/MacOS/${DarwinConstants.EdgeDev}`
    ),
    win32: Utilities.GetEdgeExe(WindowsConstants.EdgeDev),
  },

  ENV_CMD: "EDGE_DEV_BIN",
};

export default EdgeDevHeadlessBrowser;
