import EdgeDevBrowser from "../src/channels/EdgeDev";
import EdgeAnyHeadlessBrowser from "../src/headlessChannels/EdgeAnyHeadless";
import EdgeDevHeadlessBrowser from "../src/headlessChannels/EdgeDevHeadless";
import { assertContains, assertNotContains } from "./TestUtils";

interface Launcher {
  _getOptions: (url: string) => string[];
}

describe("Verify options are returned", function () {
  it("Verify options for Edge Dev", function () {
    let launcher: Launcher = {
      _getOptions: (url) => [],
    };
    const dataDirectory =
      "C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020";

    var browser = EdgeDevBrowser.call(launcher, function () {}, {
      edgeDataDir: dataDirectory,
    });

    var options = launcher._getOptions("https://localhost:4200");
    assertContains(options, "--enable-automation");
    assertContains(options, `--user-data-dir=${dataDirectory}`);
  });

  it("Verify options for Edge Dev Headless", function () {
    let launcher: Launcher = {
      _getOptions: (url) => [],
    };

    var browser = EdgeDevHeadlessBrowser.call(launcher, function () {}, {});

    var options = launcher._getOptions("https://localhost:4200");

    assertContains(options, "--enable-automation");
    assertContains(options, "--headless");
  });

  it("Verify options for Edge Dev Headless with custom flags", function () {
    let launcher: Launcher = {
      _getOptions: (url) => [],
    };

    var browser = EdgeDevHeadlessBrowser.call(launcher, function () {}, {
      edgeDataDir: "C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020",
      flags: ['--js-flags="--trace-opt --trace-deopt --trace-bailout"'],
    });

    var options = launcher._getOptions("https://localhost:4200");

    assertContains(options, "--enable-automation");
    assertContains(options, "--headless");
    assertContains(
      options,
      "--js-flags=--trace-opt --trace-deopt --trace-bailout"
    );
  });

  it("Verify options for Edge Any Headless with new headless flag", function () {
    let launcher: Launcher = {
      _getOptions: (url) => [],
    };

    var browser = EdgeAnyHeadlessBrowser.call(launcher, function () {}, {
      edgeDataDir: "C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020",
      flags: ["--headless=new"],
    });

    var options = launcher._getOptions("https://localhost:4200");

    assertContains(options, "--enable-automation");
    assertContains(options, "--headless=new");
    assertNotContains(options, "--headless");
  });
});
