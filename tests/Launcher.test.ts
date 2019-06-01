import { expect } from 'chai';
import EdgeDevBrowser from '../src/EdgeDev';

describe('Verify options are returned', function() {
  it('Verify options for Edge Dev', function() {
    var launcher = {
      _getOptions: url => {}
    };

    var browser = EdgeDevBrowser.call(
      launcher,
      function() {},
      'C:\\Users\\UserName\\AppData\\Local\\Temp\\karma-27597020'
    );

    var options = launcher._getOptions('https://localhost:4200');
    expect(options).contains('--enable-automation');
  });
});
