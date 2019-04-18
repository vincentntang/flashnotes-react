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
* Route wouldn't load, had `component` misspelled in router as `components` which sent the wrong prop. Was told you could add `$ npm i @types/react-router -D` and `// @ts-check` at the top of `app.js` to catch the error
