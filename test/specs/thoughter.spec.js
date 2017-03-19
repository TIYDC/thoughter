(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  let expect = window.chai;
  let showRecent = window.thoughter.showRecent;

  describe('thoughterDisplayModule', function() {
    describe('recent thought function', function() {
      beforeEach(function () {
        let thoughtList = document.createElement('section');
        thoughtList.classList.add('recent');
      });

      afterEach(function() {
        Array.toArray(document.querySelectorAll('section.recent')).forEach(function (recentSection) {
          recentSection.parentNode().remove(section.recent);
        });
      });

      it('should be a function', function() {
        let result = typeof(showRecent);
        expect(result).to.be.a('function');
      });

      it('should not change the page if passed any non-array parameter', function() {
        showRecent('paramString');
        expect(result).to.be.a('string');
        result = showRecent();
        expect(result).to.be.a('string');
      });

      it('should not add anything to the page when passed an empty array', function() {
        showRecent([]);
        expect(document.querySelectorAll('article.panel').length).to.eq(0);
      });

      it('should display valid thoughts', function() {
        let thought = {'id': 'someNum', 'createTime': '9million o\'clock', 'content': "No thoughts were harmed in the making of this thought object"};
        showRecent([thought]);
        expect(document.querySelectorAll('article.panel').length).to.eq(1);
      });

      it('should not display invalid thoughts', function() {
        let thought = {'id': 'someNum', 'content': "My thought is in pain"};
        showRecent([thought]);
        expect(document.querySelectorAll('article.panel').length).to.eq(0);
      });

      it('should add a thought for only valid thought objects in the passed array parameter', function() {
        let thoughts = [{'id': 'someNum', 'createTime': '9million o\'clock', 'content': 'No thoughts were harmed in the making of this thought object'},
          {'id': 'someNum', 'createTime': '9million o\'clock', 'content': 'No thoughts were harmed in the making of this thought object'},
          {'id': 'someNum', 'content': 'This is an invalid thought. A thought was harmed in the making of this thought object'}];
        showRecent(thoughts);
        let thoughtPanel = document.querySelectorAll('article.panel');
        expect(thoughtPanel).length.to.eq(2);
      });
    });
  });
})();
