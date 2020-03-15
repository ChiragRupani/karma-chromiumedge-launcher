import Utilities from './Utilities';

export default class BaseBrowser {
  private flags: string[];
  private userDataDir: string;

  constructor(flags: string[], userDataDir: string) {
    this.flags = flags;
    this.userDataDir = userDataDir;
    this._getOptions = this._getOptions.bind(this);
    this._getHeadlessOptions = this._getHeadlessOptions.bind(this);
  }

  _getOptions(url: string): string[] {
    // Chrome CLI options - http://peter.sh/experiments/chromium-command-line-switches/

    this.flags.forEach((flag: string, i: number) => {
      if (Utilities.isJSFlags(flag)) {
        this.flags[i] = Utilities.sanitizeJSFlags(flag);
      }
    });

    var allflags = [
      '--user-data-dir=' + this.userDataDir,
      // https://github.com/GoogleChrome/chrome-launcher/blob/master/docs/chrome-flags-for-tools.md#--enable-automation
      '--enable-automation',
      '--no-default-browser-check',
      '--no-first-run',
      '--disable-default-apps',
      '--disable-popup-blocking',
      '--disable-translate',
      '--disable-background-timer-throttling',
      // on macOS, disable-background-timer-throttling is not enough
      // and we need disable-renderer-backgrounding too
      // see https://github.com/karma-runner/karma-chrome-launcher/issues/123
      '--disable-renderer-backgrounding',
      '--disable-device-discovery-notifications'
    ].concat(this.flags, [url]);

    return allflags;
  }

  _getHeadlessOptions(url: string): string[] {
    var mergedArgs = this._getOptions(url).concat([
      // Headless not working on NodeJS
      // '--headless',
      '--no-proxy-server'
      // '--disable-gpu'
    ]);

    var args: string[];

    if (mergedArgs.some(f => f.indexOf('--remote-debugging-port=') !== -1)) {
      args = mergedArgs;
    } else {
      args = mergedArgs.concat(['--remote-debugging-port=9222']);
    }
    return args;
  }
}
