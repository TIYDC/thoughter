(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    /**
     * Shows the provided thought data on the page in the `.recent` element
     *
     * @param  {Array}  thoughts The array of thought objects to display
     * @return {void}
     */
    window.thoughter.showRecent = function showRecent(thoughts = []) {
      // this is creating a function (showRecent)which takes an arg (thought = [])
        if (!Array.isArray(thoughts)) {
          //if (thoughts) is not an array return nothing,
            return;
        }

        let recent = document.querySelector('.recent');
        //selecting an element with the class name of recent and defining recent
        thoughts.forEach(function showThought(thoughts) {
          //for each object  in the array called  thoughts
            if (!thought.content || !thought.createTime || !thought.id) {
              //if the thought has no content or createTime or an id we don't want it, so we return
                return;
            }

            let thoughtUI = document.createElement('article');
            //creating an element (article)  while setting it to a variable
            thoughtUI.classList.add('panel');
            //adding the class panel to the article 'thoughtUI'
            thoughtUI.classList.add('panel-info');
            //adding class panel-info to the article 'thoughtUI'
            thoughtUI.setAttribute('id', 'thought-' + thought.id);
            //setting an id to thoughtUI
            thoughtUI.innerHTML = `<header class='panel-heading'>Posted ${thoughts.createTime}</header>
                <main class='panel-body'>
                    <p>${thought.content}</p>
                </main>`;
                //adding HTML to the article
            recent.appendChild(thoughtUI);
            //adding the recent class to the article thoughtUI
        });
    };

    // /**
    //  * Retrieves the most recent thoughts, using the provided count as the limit
    //  *
    //  * @param  {Number} count  How many thoughts to limit to, must be a positive number (defaults to 10)
    //  * @return {Promise}       The resolved promise will have the data array as the argument
    //  */
    // window.thoughter.getRecent = function getRecent(count = 10) {
    //     if (typeof(count) !== 'number' || count < 1) {
    //         return Promise.reject('Sorry, but the count must be a positive number');
    //     }
    //
    //     return fetch(
    //         'http://thoughter.herokuapp.com/api/Thoughts?filter={"order":"createTime DESC","limit":' + count + '}'
    //     )
    //     .then(function handleResponse(res) {
    //         if (res.status > 299) {
    //             console.error('Looks like a bad status code:', res.status);
    //             return Promise.reject('Sorry, but there was a problem with your request.');
    //         } else {
    //             return res.json();
    //         }
    //     });
    // };

})();
