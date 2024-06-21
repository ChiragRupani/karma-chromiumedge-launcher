import assert from "node:assert/strict";
import BaseBrowser from "../src/BaseBrowser";
import Utilities from "../src/Utilities";
import { assertContains } from "./TestUtils";

describe("isJSFlags()", function () {
  var isJSFlags = Utilities.isJSFlags;

  it("should return true if flag begins with --js-flags=", function () {
    assert.equal(isJSFlags("--js-flags=--expose-gc"), true);
    assert.equal(isJSFlags('--js-flags="--expose-gc"'), true);
    assert.equal(isJSFlags("--js-flags='--expose-gc'"), true);
  });

  it("should return false if flag does not begin with --js-flags=", function () {
    assert.equal(isJSFlags(" --js-flags=--expose-gc"), false);
    assert.equal(isJSFlags('--js-flags"--expose-gc"'), false);
    assert.equal(isJSFlags('--jsflags="--expose-gc"'), false);
  });
});

describe("sanitizeJSFlags()", function () {
  var sanitizeJSFlags = Utilities.sanitizeJSFlags;

  it("should do nothing if flags are not contained in quotes", function () {
    assert.equal(
      sanitizeJSFlags("--js-flags=--expose-gc"),
      "--js-flags=--expose-gc"
    );
  });

  it("should symmetrically remove single or double quote if wraps all flags", function () {
    assert.equal(
      sanitizeJSFlags("--js-flags='--expose-gc'"),
      "--js-flags=--expose-gc"
    );
    assert.equal(
      sanitizeJSFlags('--js-flags="--expose-gc"'),
      "--js-flags=--expose-gc"
    );
  });

  it("should NOT remove anything if the flags are not contained within quote", function () {
    assert.equal(
      sanitizeJSFlags('--js-flags=--expose-gc="true"'),
      '--js-flags=--expose-gc="true"'
    );
    assert.equal(
      sanitizeJSFlags("--js-flags=--expose-gc='true'"),
      "--js-flags=--expose-gc='true'"
    );
  });
});

describe("headlessGetOptions", function () {
  var url = "http://localhost:9876";

  it("should return the headless flags", function () {
    var flags = ["-incognito"];

    var expectedOptions = [
      "-incognito",
      "--headless",
      "--remote-debugging-port=9222",
    ];

    var headlessOptions = new BaseBrowser(flags, "")._getHeadlessOptions(url);
    expectedOptions.map((x) => assertContains(headlessOptions, x));
  });

  it("should not overwrite custom remote-debugging-port", function () {
    var flags = ["-incognito", "--remote-debugging-port=9333"];
    var headlessOptions = new BaseBrowser(flags, "")._getHeadlessOptions(url);
    const expectedOptions = [
      "-incognito",
      "--remote-debugging-port=9333",
      "--headless",
    ];
    expectedOptions.map((x) => assertContains(headlessOptions, x));
  });
});
