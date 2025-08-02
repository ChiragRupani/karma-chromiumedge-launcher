import fs from "node:fs";
import path from "node:path";
import { DarwinConstants, LinuxConstants, WindowsConstants } from "./Constants";

export default class Utilities {
  static GetLinuxBin(command: string) {
    // Only run these checks on Linux
    if (process.platform !== "linux") {
      return null;
    }

    // Need to check if check for other paths is required
    const _paths = [
      "/usr/local/sbin",
      "/usr/local/bin",
      "/usr/sbin",
      "/usr/bin",
      "/sbin",
      "/bin",
    ];

    let edgeBIN: string = "/usr/bin/" + command;

    try {
      fs.accessSync(edgeBIN, fs.constants.X_OK);
      return command;
    } catch (e) {}

    return null;
  }

  static GetEdgeDarwin(defaultPath: string) {
    if (process.platform !== "darwin") {
      return null;
    }

    let darwinPaths = [
      path.join(process.env.HOME || "", defaultPath),
      defaultPath,
    ];

    for (let i = 0; i < darwinPaths.length; i++) {
      try {
        const darwinPath = darwinPaths[i];
        if (darwinPath) {
          fs.accessSync(darwinPath);
          return darwinPath;
        }
      } catch {}
    }

    return null;
  }

  // Return location of Edge.exe file for a given directory.
  static GetEdgeExe(edgeDirName: string) {
    // Only run these checks on win32
    if (process.platform !== "win32") {
      return null;
    }

    let suffix = "\\Microsoft\\" + edgeDirName + "\\Application\\msedge.exe";
    let prefixes = [
      process.env["PROGRAMFILES(X86)"],
      process.env.PROGRAMFILES,
      process.env.LOCALAPPDATA,
      process.env.ProgramW6432,
    ];

    let edgePath: string | null = null;
    for (let i = 0; i < prefixes.length; i++) {
      try {
        let windowsEdgeDirectory = path.join(prefixes[i] || "", suffix);
        fs.accessSync(windowsEdgeDirectory);
        edgePath = windowsEdgeDirectory;
        break;
      } catch (e) {}
    }
    return edgePath;
  }

  static isJSFlags(flag: string) {
    return flag.indexOf("--js-flags=") === 0;
  }

  static sanitizeJSFlags(flag: string) {
    let test = /--js-flags=(['"])/.exec(flag);
    if (!test) {
      return flag;
    }
    let escapeChar = test[1];
    let endExp = new RegExp(escapeChar + "$");
    let startExp = new RegExp("--js-flags=" + escapeChar);
    return flag.replace(startExp, "--js-flags=").replace(endExp, "");
  }

  static GetEdgeAnyLinux() {
    return (
      this.GetLinuxBin(LinuxConstants.EdgeCanary) ||
      this.GetLinuxBin(LinuxConstants.EdgeDev) ||
      this.GetLinuxBin(LinuxConstants.EdgeBeta) ||
      this.GetLinuxBin(LinuxConstants.Edge)
    );
  }

  static GetEdgeAnyDarwin() {
    return (
      this.GetEdgeDarwin(
        `/Applications/${DarwinConstants.EdgeCanary}.app/Contents/MacOS/${DarwinConstants.EdgeCanary}`
      ) ||
      this.GetEdgeDarwin(
        `/Applications/${DarwinConstants.EdgeDev}.app/Contents/MacOS/${DarwinConstants.EdgeDev}`
      ) ||
      this.GetEdgeDarwin(
        `/Applications/${DarwinConstants.EdgeBeta}.app/Contents/MacOS/${DarwinConstants.EdgeBeta}`
      ) ||
      this.GetEdgeDarwin(
        `/Applications/${DarwinConstants.Edge}.app/Contents/MacOS/${DarwinConstants.Edge}`
      )
    );
  }

  static GetAnyEdgeWindows() {
    return (
      this.GetEdgeExe(WindowsConstants.EdgeCanary) ||
      this.GetEdgeExe(WindowsConstants.EdgeDev) ||
      this.GetEdgeExe(WindowsConstants.EdgeBeta) ||
      this.GetEdgeExe(WindowsConstants.Edge)
    );
  }
}
