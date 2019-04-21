## Things I'm doing from start to finish

* Styled components library add on
* Card component -> ES6 vs ES5 / constructor functions in backend
* Conditionally rendering components and styled-components method
* Figuring out media queries and sass-styles https://jsramblings.com/2018/02/04/styled-components-media-queries.html
* Defining routes (top level folder)
* Seperate logic for recursively running commands (put it in a function that is triggered by an event button, so it calls another command)
* Building an end condition to quizes using state
* Defining things in as small components as possible
* Templating all the major routes
* Folder organization, one folder = one route. For instance `/decks`. Any files within these, are additional forked routes. Such as `decks/:deckid/addCard`.
* Applying CRUD functionality to `cards` and `decks` required a backend hooked up, unless props are passed down to the other subroutes
* Route wouldn't load, had `component` misspelled in router as `components` which sent the wrong prop. David told you could add `$ npm i @types/react-router -D` and `// @ts-check` at the top of `app.js` to catch the error
* Initial state populated through redux, but I couldn't understand where initial state started anywhere. It was from reducers firing once a store is created.
  * I wrote a post on stackoverflow covering it https://stackoverflow.com/questions/55774622/different-ways-of-initializing-a-react-redux-stores-initial-global-state
* On my windows PC, some strange reason `proxy` works on package.json in `client` folder, but my macOS doesn't work
  * This is commit `"User can register"` after redux reducers added on
  * I tried to search solutions on `create-react-app proxy fetch axios github issues` not working as intended.
  * At first, I thought it was an axios issue, but really axios is just using fetch API, in turn the proxy is watched by webpack
  * Tried every solution, `killall node`, changed port numbers, set proxy to an object, ejected react tried different browsers (which failed as redux tools not enabled)
  * But went back, tried a request with `login` route and it worked
  * This narrowed issue down to not being related to proxy
  * Error log kept stating POST request went to `localhost:3000` when it should have been `localhost:5000`
  * Upon further inspection, I didn't send the `password2` in the expected backend POST response
  * I still don't know why the console gave me such a misleading error though.
  * I think it's because the error assumes it's `port:3000`, but webpack masks the proxy behind the scenes
  * Takeaway - if it says POST request failed at port 3000, assume the incorrect response was sent to backend