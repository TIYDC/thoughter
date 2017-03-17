(function() {
  'use strict';
  let expect = chai.expect;

  describe('test run', function(){
    it('should be true', function(){
      expect(true).to.be.true;
    });
    describe('recent module', function(){
      describe('show recent function', function(){
        beforeEach(function(){
          // I need to add an element with a class of recent
          let recentTag =  document.createElement('main');
          recentTag.className = 'recent';
          document.querySelector('body').appendChild(recentTag);
        });

        it('should be a function', function(){
          expect(window.thoughter.showRecent).to.be.a('function');

        });


      });


    });
  });
}());
