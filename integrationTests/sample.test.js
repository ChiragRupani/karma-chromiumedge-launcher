describe('BrowserLauncher', function () {
  it('Verify browser is launched', function () {
    if (!window?.navigator?.userAgent) {
      throw 'userAgent is undefined';
    }
    return true;
  });
});
