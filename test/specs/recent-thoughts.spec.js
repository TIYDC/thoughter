(function() {
  'use strict';

  let expect = window.chai.expect;

  describe('recent-thoughts.js', function() {
    //describes recent-thoughts.js filet()
    it('should know that the nameSpace exists', function(){
      //name spaces are an object so we want it to be an object
      expect(window.thoughter).to.be.a('object');
    });

    describe('addStuff function', function() {
      //describes first function im testing
      //which is .showRecent
    });
  });
}());
