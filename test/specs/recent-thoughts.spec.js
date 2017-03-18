  (function() {
  'use strict';
  //this is where i created the 3 thoughts
  let expect = window.chai.expect;
  //because lazy
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
        //a main/tag element and remove it
      });
      //keep on same cus its not imbeded in fn
      it('should create a new article element for every thought', function(){
        window.thoughter.showRecent([hi, bye, hibye]);//3 thoughts
        //create a variable so i dont have to type doc.querselect everytime
        let recentElement = document.querySelector('.recent');
        //testing that the recent element has children and that it has more
        //then one
        expect(recentElement.childNodes.length).to.equal(3);
        //selected recent element dug into child nodes got length of child nodes
        //and tested if the length was equal to the amount of thoughts i gave the fn
        //console.log(window.thoughter.showRecent);
        //want to test that articles are being created
        //console.info(document.querySelector('.recent'));
        //expect(recentElement.childNodes[1].id).to.equal('thought-yyyy');
        //console.log(recentElement.childNodes[1]);
        //tapping into first article
      });
      it('should pass an array with 1obj', function(){
        let recentElement = document.querySelector('main.recent');
        window.thoughter.showRecent([hi]);
        expect(recentElement.childNodes.length).to.equal(1);
      });
      it('should pass in an empty array', function(){
        let article = document.querySelector('main.recent');
        window.thoughter.showRecent([]);
        expect(article.length).to.equal();
      });
    });
    //where new describe begins - 3rd one
    //every function has its own describe
    describe('get recent', function(){
      let server;

            beforeEach(function(){
                server = sinon.fakeServer.create();
                server.autoRespond = true;
                server.respondWith(
                    'GET',
                    'http://thoughter.herokuapp.com/api/Thoughts?filter={"order":"createTime DESC","limit":3}',
                    [
                        200,
                        { 'Content-Type': 'application/json' },
                        //moching out what the fetch returns in its response
                        '["hi", "bye", "hibye"]'
                    ]
                    //the function that im testing fetches at a specific url so to test that fetch
                    //setting up a fake server connected to that specific url so that the real
                    //function hits server and not the API
                    //
                );
            });

            afterEach(function() {
                server.restore();
            });
            it('should return data back from server', function(){
              let result = window.thoughter.getRecent();
                  // expect( result ).to.be.an('object');
                  expect(result.then).to.be.a('function');
                  expect(result.catch).to.be.a('function');

                  result
                      .then(function(data) {
                          expect(data).to.be.an('array');
                          expect(data.length).to.equal(3);
                          //expect data and we know data is an
                          //array and has a length of 3
                          //expect the first index in the data array
                          //to equal hi and it should equal hi because
                          //thats what i told  my moc server to type
                          expect(data[0]).to.equal('hi');
                          tellMochaWeAreDone();
                      })
                      .catch(function(err) {
                          tellMochaWeAreDone(err);
                      });
              });
            });

    });
  }());
