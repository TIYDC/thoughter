(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    //name space

    /**
     * Shows the provided thought data on the page in the `.recent` element
     *
     * @param  {Array}  thoughts The array of thought objects to display
     *this function takes an array as an arg and does a lot of dom manipulation
     *so what we're gunna test is whethere or not the corrext dom manip is happening
     * @return {void}
     */
    window.thoughter.showRecent = function showRecent(thoughts = []) {
        if (!Array.isArray(thoughts)) {
            return;
        }
        //element(ex section/main) with a class of recent
        //trying to find something with the class of recent
        let recent = document.querySelector('.recent');
        //when it finds something with the class of recent
        thoughts.forEach(function showThought(thought) {
        //for each thought do the stuff down here
        //if each thought does not have thought.content, thought.createTime
        //or a thought.id then return and dont do that stuff
            if (!thought.content || !thought.createTime || !thought.id) {
                return;//dont want to go down cus ill get an error
            }
            //it creates for each thought a new article element and then
            //appends it to the recent element
            let thoughtUI = document.createElement('article');
            thoughtUI.classList.add('panel');
            thoughtUI.classList.add('panel-info');
            thoughtUI.setAttribute('id', 'thought-' + thought.id);
            thoughtUI.innerHTML = `<header class='panel-heading'>Posted ${thoughts.createTime}</header>
                <main class='panel-body'>
                    <p>${thought.content}</p>
                </main>`;
            recent.appendChild(thoughtUI);
        });
    };

    /**
     * Retrieves the most recent thoughts, using the provided count as the limit
     *
     * @param  {Number} count  How many thoughts to limit to, must be a positive number (defaults to 10)
     * @return {Promise}       The resolved promise will have the data array as the argument
     */
    window.thoughter.getRecent = function getRecent(count = 10) {
        if (typeof(count) !== 'number' || count < 1) {
            return Promise.reject('Sorry, but the count must be a positive number');
        }

        return fetch(
            'http://thoughter.herokuapp.com/api/Thoughts?filter={"order":"createTime DESC","limit":' + count + '}'
        )
        .then(function handleResponse(res) {
            if (res.status > 299) {
                console.error('Looks like a bad status code:', res.status);
                return Promise.reject('Sorry, but there was a problem with your request.');
            } else {
                return res.json();
            }
        });
    };

})();
