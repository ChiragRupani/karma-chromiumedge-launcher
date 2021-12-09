import fs from 'fs';
import path from 'path';
import { DarwinConstants, LinuxConstants, WindowsConstants } from './Constants';

export default class Utilities {
  static GetLinuxBin(command: string) {
    // Only run these checks on Linux
    if (process.platform !== 'linux') {
      return null;
    }

    // Need to check if check for other paths is required
    const paths = [
      '/usr/local/sbin',
      '/usr/local/bin',
      '/usr/sbin',
      '/usr/bin',
      '/sbin',
      '/bin',
    ];

    var edgeBIN: string = '/usr/bin/' + command;

    try {
      fs.accessSync(edgeBIN, fs.constants.X_OK);
      return command;
    } catch (e) {}

    return null;
  }

  static GetEdgeDarwin(defaultPath: string) {
    if (process.platform !== 'darwin') {
      return null;
    }

    try {
      var homePath = path.join(process.env.HOME || '', defaultPath);
      fs.accessSync(homePath);
      return homePath;
    } catch (e) {
      return null;
    }
  }

  // Return location of Edge.exe file for a given directory.
  static GetEdgeExe(edgeDirName: string) {
    // Only run these checks on win32
    if (process.platform !== 'win32') {
      return null;
    }

    var suffix = '\\Microsoft\\' + edgeDirName + '\\Application\\msedge.exe';
    var prefixes = [
      process.env['PROGRAMFILES(X86)'],
      process.env.PROGRAMFILES,
      process.env.LOCALAPPDATA,
    ];

    var edgePath: string | null = null;
    for (let i = 0; i < prefixes.length; i++) {
      try {
        var windowsEdgeDirectory = path.join(prefixes[i] || '', suffix);
        fs.accessSync(windowsEdgeDirectory);
        edgePath = windowsEdgeDirectory;
        break;
      } catch (e) {}
    }
    return edgePath;
  }

  static isJSFlags(flag: string) {
    return flag.indexOf('--js-flags=') === 0;
  }

  static sanitizeJSFlags(flag: string) {
    var test = /--js-flags=(['"])/.exec(flag);
    if (!test) {
      return flag;
    }
    var escapeChar = test[1];
    var endExp = new RegExp(escapeChar + '$');
    var startExp = new RegExp('--js-flags=' + escapeChar);
    return flag.replace(startExp, '--js-flags=').replace(endExp, '');
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
