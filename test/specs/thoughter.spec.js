(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  let expect = window.chai;

  describe('thoughterDisplayModule', function() {
    beforeEach(function () {
      let thoughtList = document.createElement('ul');
      thoughtList.classList.add('recent');
    });

    afterEach(function () {
      document.querySelectorAll('ul').forEach( function () {

      });
    });

    it('should be a function', function () {
      let result = typeof(window.thoughter.showRecent);
      expect(result).to.be.a('function');
    });
    it('should accept only an array as a parameter', function () {
      let result = window.thoughter.showRecent('lasfdjh');
      expect(result).to.be.a('string');
      result = window.thoughter.showRecent();
      expect(result).to.be.a('string');
      result = window.thoughter.showRecent([]);
      expect(result).to.be.undefined;
    });

  });


}());
