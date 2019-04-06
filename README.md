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

Things learned along the way

* Styled components library add on
* Card component -> ES6 vs ES5 / constructor functions in backend
* Conditionally rendering components and styled-components method
* Figuring out media queries and sass-styles https://jsramblings.com/2018/02/04/styled-components-media-queries.html
* Defining routes (top level folder)

User Stories 

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