* [ ] Toggle switch for rendering front / back of flash card
  * [x] Designing MVP data structure locally
  * [x] 1st lifecycle and decoupling state
  * [x] Styled components to easily modified scss
  * [x] Spinner gif placeholder
  * [x] Toggle logic for front/back card
  * [x] Conditionally render classes

* [ ] Add Routing + Create Cards
  * [x] Add routing
  * [x] Add Nav Links and styling
  * [ ] Create new cards
  * [ ] Change routing to `decks/:id/review`, and `decks/:id/edit`

* [ ] Quiz functionality
  * [ ] Start
  * [ ] Transition cards until queue finished
  * [ ] End condition - route back to `decks/:id`
  

## Things learned along the way

* Styled components library add on
* Card component -> ES6 vs ES5 / constructor functions in backend
* Conditionally rendering components and styled-components method
* Figuring out media queries and sass-styles https://jsramblings.com/2018/02/04/styled-components-media-queries.html
* Defining routes (top level folder)
* Seperate logic for recursively running commands (put it in a function that is triggered by an event button, so it calls another command)
* Building an end condition to quizes using state


## Endpoints

See mocked up data sets currently being used under `data` folder. Not entirely secure (need to think about private routes)

`GET /cards` returns all cards

`GET /cards/card:id` return a specific cards content

`GET /decks` returns all decks

`GET /decks/deck:id` returns a specific deck

`POST /cards` generate a new card

`POST /decks` generate a new deck

`GET /user/user:id` Show profile of user

## Additional Routing structure and query params

Query parameters are mostly for things like "searching for data between X param and Y param". This would be the same way, except for the notetaking portion side.

Defining routing is important if a user wants to go directly to a specific page

`/decks/deck:id/edit` → edit your deck

`/decks/deck:id/review` → review your deck

`/cards/card:id/edit` > edit a specific card


## User Stories 

* Not signed in
  * /  -> I can browse cards and add to my collection.

* Signed in
  * /Stats - I see analytics, decks to refresh, etc
    * I can see what I typed in one day, 7 days, and last 30 days (by card type)
    * I can see a commit graph of sorts
  * /Decks - I can see my deck
    * I can add a card quickly here.
    * I can review my cards quickly
    * I can search records of my cards quickly
    * I can get card recommendation from others.
    * I can set my preferences, to indicate what cards I want to see
    * I can see what others tag with the same cards
  * /Notes - I can see my notes
    * Leftside shows a folder pane