'use strict';

describe('Service: Bus', function () {

  // load the service's module
  beforeEach(module('introToAngularApp'));

  // instantiate service
  var Bus;
  beforeEach(inject(function (_Bus_) {
    Bus = _Bus_;
  }));

  it('should do something', function () {
    expect(!!Bus).toBe(true);
  });

});
