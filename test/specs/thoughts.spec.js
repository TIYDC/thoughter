(function() {
  'use strict';
  let expect =chai.expect;

  beforeEach(function(){
    let articleTag = document.createElement('main');
    articleTag.classList.add('recent');
    document.querySelector('body').appendChild( articleTag );
  });

  afterEach(function(){
    let articleTag = document.querySelector('article');
    articleTag.parentNode.removeChild(articleTag);
  });

  it('is article present', function(){
    window.thoughter.showRecent([{content: 'Steven', createTime: 1983, id: 'human/big-foot'}]);
    let article = document.querySelectorAll('article');
    expect(article.length).to.equal(1);
  });

  it('content on article should be a string', function(){
    window.thoughter.showRecent([{content: 'Steven', createTime: 1983, id: 'human/big-foot'}]);
    let pTag = document.querySelectorAll('p');
    console.info(pTag, 'im here, here!  Look at me!');
    console.info(pTag.innerText, 'hello there 1');
    console.info(pTag.innerHTML, 'hello there 2');
    console.info(pTag.textContent, 'hello there 3');
    console.info(pTag[0], 'hello there 4');
    expect(pTag[0]).to.equal('Steven')

  });

  xit('content on article should be a string', function(){
    window.thoughter.showRecent([{content: 'Steven', createTime: 1983, id: 'human/big-foot'}]);
    let pTag = document.querySelectorAll('p');
    console.info(pTag, 'im here, here!  Look at me!');
    console.info(pTag[0].innerText, 'hello there 1');
    console.info(pTag.innerHTML, 'hello there 2');
    console.info(pTag.textContent, 'hello there 3');
    console.info(pTag[0], 'hello there 4');
    expect(pTag[0]).to.equal('Steven');

  });


  xit('should display number of articles', function(){
    let result = window.thoughter.sum([3]);
    expect(result).to.be.a('number');
    expect(result).to.equal(3);

  });

}());
