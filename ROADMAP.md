## Road map

* [ ] Toggle switch for rendering front / back of flash card
  * [x] Designing MVP data structure locally
  * [x] 1st lifecycle and decoupling state
  * [x] Styled components to easily modified scss
  * [x] Spinner gif placeholder
  * [x] Toggle logic for front/back card
  * [x] Conditionally render classes

* [ ] Add Routing
  * [x] Add routing
  * [x] Add Nav Links and styling
  * [x] Change routing to `/decks/:id/review`, and `decks/:id/edit`
  * [ ] Refactor Edit/Add card to `/cards/edit/?deckid=deckid` params because this could be done on `decks` or `deck` route. Use `history` to go back somehow, as user might modify query parameters for search (possibly cache this?)
  * [ ] Dashboard showcasing the data visualization of cards / notes written.

* [ ] Quiz functionality
  * [ ] Cards CRUD functionality
  * [ ] Decks CRUD functionality
  * [ ] Store score assigned to each card on review (store as a date)
  * [ ] Generate a space repetition algorithm for updating cards
  * [x] Transition cards until queue finished
  * [x] End condition - route back to `decks/:id`
  * [ ] additional late features - ability to set {cloze} card types, and other
  * [ ] Super memo 20 rules outline when adding new cards
  * [ ] `Position-absolute` on number of cards left in review queue with low opacity, until hovered.

* [ ] Notes functionality
  * [ ] Use WYSIWYG options to allow user to quickly add questions/answers

* [ ] Accessibility / IME / Language support
  * [ ] Add ARIA labels for NVDA screen-readers (voice recognize answer using google's speech to text)
  * [ ] Add i18 language support for multi language support

* [ ] Login / Register / Auth
  * [x] Placeholder for login/register

* [ ] Development Tools
  * [x] Using a base outline feature for debugging 3rd or 4th level styles

* [ ] Marketing
  * [ ] Make a nice frontend landing page
  * [ ] Create a design in Figma
  * [ ] Add Formspree (possibly just make a non-react homepage, AJAX call features cost money), formcarry, Airtable, or google firebase

