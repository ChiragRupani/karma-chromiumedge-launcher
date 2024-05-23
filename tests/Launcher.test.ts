import { expect } from "chai";
import EdgeDevBrowser from "../src/channels/EdgeDev";
import EdgeAnyHeadlessBrowser from "../src/headlessChannels/EdgeAnyHeadless";
import EdgeDevHeadlessBrowser from "../src/headlessChannels/EdgeDevHeadless";

describe("Verify options are returned", function () {
  it("Verify options for Edge Dev", function () {
    var launcher = {
      _getOptions: (url) => {},
    };

    const dataDirectory =
      "C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020";

    var browser = EdgeDevBrowser.call(launcher, function () {}, {
      edgeDataDir: dataDirectory,
    });

    var options = launcher._getOptions("https://localhost:4200");
    expect(options).contains("--enable-automation");
    expect(options).contains(`--user-data-dir=${dataDirectory}`);
  });

  it("Verify options for Edge Dev Headless", function () {
    var launcher = {
      _getOptions: (url) => {},
    };

    var browser = EdgeDevHeadlessBrowser.call(launcher, function () {}, {});

    var options = launcher._getOptions("https://localhost:4200");

    expect(options).contains("--enable-automation");
    expect(options).contains("--headless");
  });

  it("Verify options for Edge Dev Headless with custom flags", function () {
    var launcher = {
      _getOptions: (url) => {},
    };

    var browser = EdgeDevHeadlessBrowser.call(launcher, function () {}, {
      edgeDataDir: "C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020",
      flags: ['--js-flags="--trace-opt --trace-deopt --trace-bailout"'],
    });

    var options = launcher._getOptions("https://localhost:4200");

    expect(options).contains("--enable-automation");
    expect(options).contains("--headless");
    expect(options).contains(
      "--js-flags=--trace-opt --trace-deopt --trace-bailout"
    );
  });

  it("Verify options for Edge Any Headless with new headless flag", function () {
    var launcher = {
      _getOptions: (url) => {},
    };

    var browser = EdgeAnyHeadlessBrowser.call(launcher, function () {}, {
      edgeDataDir: "C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020",
      flags: ["--headless=new"],
    });

    var options = launcher._getOptions("https://localhost:4200");

    expect(options).contains("--enable-automation");
    expect(options).contains("--headless=new");
    expect(options).not.contains("--headless");
  });
});
