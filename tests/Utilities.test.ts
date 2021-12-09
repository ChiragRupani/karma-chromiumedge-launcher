import { expect } from 'chai';
import BaseBrowser from '../src/BaseBrowser';
import Utilities from '../src/Utilities';

describe('isJSFlags()', function () {
  var isJSFlags = Utilities.isJSFlags;

  it('should return true if flag begins with --js-flags=', function () {
    expect(isJSFlags('--js-flags=--expose-gc')).to.be.equal(true);
    expect(isJSFlags('--js-flags="--expose-gc"')).to.be.equal(true);
    expect(isJSFlags("--js-flags='--expose-gc'")).to.be.equal(true);
  });

  it('should return false if flag does not begin with --js-flags=', function () {
    expect(isJSFlags(' --js-flags=--expose-gc')).to.be.equal(false);
    expect(isJSFlags('--js-flags"--expose-gc"')).to.be.equal(false);
    expect(isJSFlags('--jsflags="--expose-gc"')).to.be.equal(false);
  });
});

describe('sanitizeJSFlags()', function () {
  var sanitizeJSFlags = Utilities.sanitizeJSFlags;

  it('should do nothing if flags are not contained in quotes', function () {
    expect(sanitizeJSFlags('--js-flags=--expose-gc')).to.be.equal(
      '--js-flags=--expose-gc'
    );
  });

  it('should symmetrically remove single or double quote if wraps all flags', function () {
    expect(sanitizeJSFlags("--js-flags='--expose-gc'")).to.be.equal(
      '--js-flags=--expose-gc'
    );
    expect(sanitizeJSFlags('--js-flags="--expose-gc"')).to.be.equal(
      '--js-flags=--expose-gc'
    );
  });

  it('should NOT remove anything if the flags are not contained within quote', function () {
    expect(sanitizeJSFlags('--js-flags=--expose-gc="true"')).to.be.equal(
      '--js-flags=--expose-gc="true"'
    );
    expect(sanitizeJSFlags("--js-flags=--expose-gc='true'")).to.be.equal(
      "--js-flags=--expose-gc='true'"
    );
  });
});

describe('headlessGetOptions', function () {
  var url = 'http://localhost:9876';

  it('should return the headless flags', function () {
    var flags = ['-incognito'];

    var expectedOptions = [
      '-incognito',
      '--headless',
      '--remote-debugging-port=9222',
    ];

    var headlessOptions = new BaseBrowser(flags, '')._getHeadlessOptions(url);
    expectedOptions.map((x) => expect(headlessOptions).to.include(x));
  });

  it('should not overwrite custom remote-debugging-port', function () {
    var flags = ['-incognito', '--remote-debugging-port=9333'];
    var headlessOptions = new BaseBrowser(flags, '')._getHeadlessOptions(url);
    const expectedOptions = [
      '-incognito',
      '--remote-debugging-port=9333',
      '--headless',
    ];
    expectedOptions.map((x) => expect(headlessOptions).to.include(x));
  });
});
