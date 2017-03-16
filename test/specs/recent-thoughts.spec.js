(function() {
  'use strict';
  //this is where i created the 3 thoughts
  let expect = window.chai.expect;
  let hi = {};
  hi.content = 'hi';
  hi.createTime = new Date();
  hi.id = 'xxxx';
  let bye = {};
  bye.content = 'bye';
  bye.createTime = new Date();
  bye.id = 'yyyy';
  let hibye = {};
  hibye.content = 'hibye';
  hibye.createTime = new Date();
  hibye.id = 'zzzz';

  describe('recent-thoughts.js', function() {
    //describes recent-thoughts.js file
    it('should know that the nameSpace exists', function(){
      //name spaces are an object so we want it to be an object
      expect(window.thoughter).to.be.a('object');
    });

    describe('showRecent function', function() {
      //describes first function im testing
      //which is .showRecent
      //going to need a fixture for this test suite
      //create an element with a class of recent
      beforeEach(function() {
        //everything im doing in my before and after is not connected
        //to the recent-thoughts.js
        //but im getting the info from recent-thoughts.js
        //and im trying to recreate what it's trying to do
        let mainTag = document.createElement('main');
        //before i run this test making sure there is an
        //existing element with a class of recent
        //when i run my test line 20 will work because i created
        //the element with the class of recent
        mainTag.classList.add('recent');
        //document.createElement('body');
        document.querySelector('body').appendChild(mainTag);
      });
    //now im removing it -idempoden
    //if i dont remove it as i go to my other tests having that
    //fixture there might cause failures
      afterEach(function() {
        let mainTag = document.querySelector('main');
        mainTag.parentNode.removeChild(mainTag);
        //after each test assertion in this describe i find
        //a main element and remove it
      });
      //keep on same cus its not imbeded in fn
      it('should create a new article element for every thought', function(){
        window.thoughter.showRecent([hi, bye, hibye]);//3 thoughts
        //create a variable so i dont have to type doc.querselect everytime
        let recentElement = document.querySelector('.recent');
        //testing that the recent element has children and that it has more
        //then one
        expect(recentElement.childNodes.length).to.equal(3);
        //selected recent element dug into child nodes got length of child node_modules
        //and tested if the length was equal to the amount of thoughts i gave the fn
        //console.log(window.thoughter.showRecent);
        //want to test that articles are being created
        //console.info(document.querySelector('.recent'));
      });

    });
  });
}());
