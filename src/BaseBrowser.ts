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

    let allflags = [
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
      '--disable-device-discovery-notifications',
    ].concat(this.flags, [url]);

    return allflags;
  }

  _getHeadlessOptions(url: string): string[] {
    let mergedArgs = this._getOptions(url);

    // Adding Headless flag
    // If there is arg with --headless=new or --headless=old, don't add --headless flag
    mergedArgs = mergedArgs.some((flag) => flag.indexOf('--headless=') !== -1)
      ? mergedArgs
      : mergedArgs.concat(['--headless']);

    // Add other flags to support headless mode
    mergedArgs = mergedArgs.concat([
      '--no-proxy-server',
      //'--no-sandbox',
      //'--disable-gpu',
    ]);

    // Add remote debugging port
    mergedArgs = mergedArgs.some(
      (flag) => flag.indexOf('--remote-debugging-port=') !== -1
    )
      ? mergedArgs
      : mergedArgs.concat(['--remote-debugging-port=9222']);

    return mergedArgs;
  }
}
