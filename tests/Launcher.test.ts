import { expect } from 'chai';
import EdgeDevBrowser from '../src/channels/EdgeDev';
import EdgeDevHeadlessBrowser from '../src/headlessChannels/EdgeDevHeadless';

describe('Verify options are returned', function () {
  it('Verify options for Edge Dev', function () {
    var launcher = {
      _getOptions: (url) => {},
    };

    var browser = EdgeDevBrowser.call(
      launcher,
      function () {},
      'C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020'
    );

    var options = launcher._getOptions('https://localhost:4200');
    expect(options).contains('--enable-automation');
  });

  it('Verify options for Edge Dev Headless', function () {
    var launcher = {
      _getOptions: (url) => {},
    };

    var browser = EdgeDevHeadlessBrowser.call(launcher, function () {}, {});

    var options = launcher._getOptions('https://localhost:4200');

    expect(options).contains('--enable-automation');
    expect(options).contains('--headless');
  });

  it('Verify options for Edge Dev Headless with custom flags', function () {
    var launcher = {
      _getOptions: (url) => {},
    };

    var browser = EdgeDevHeadlessBrowser.call(launcher, function () {}, {
      edgeDataDir: 'C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020',
      flags: ['--js-flags="--trace-opt --trace-deopt --trace-bailout"'],
    });

    var options = launcher._getOptions('https://localhost:4200');

    expect(options).contains('--enable-automation');
    expect(options).contains('--headless');
    expect(options).contains(
      '--js-flags=--trace-opt --trace-deopt --trace-bailout'
    );
  });
});
