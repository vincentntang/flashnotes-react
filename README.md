## Flashnotes - Background

What is flashnotes?

Flashnotes = Flashcards + Notes

Learning is time consuming. There are specific methods of reducing the time it takes to learn a subject - one is called the space-repetition algorithm. Read more about it on [supermemo](https://www.supermemo.com/en/archives1990-2015/english/algsm11)

You see these used often when learning a language for the first time. You make flashcards,the front is the word in English, the back is in French let's say. You review your cards over time, and build a knowledge base to form sentences in French. Then you practice speaking in French.

Flashcards have other applications besides learning. Most notably in STEM, especially in the medical field when learning different parts in anatomy, or engineering formulas.

You can review flashcards one of two ways. Both have weaknesses:

1) Download someone else's premade deck
2) Make your own deck

The former let's you build a knowledge base quickly, but it doesn't give context as to why it's built, leading to poor long term retention.

The latter let's you build a stronger mental connection to that card. Allowing you to remember things better long term. However, it's time consuming writing flashcards by hand

There's always a tradeoff between retaining information long term, and the amount of effort you spend on it.

However, you can have the best of both worlds with FLASHNOTES

## Flashnotes - Why it's useful

Learning comes in a few predictable stages:

1) You learn the concept by breaking it down
2) You apply it
3) You remember how you applied it

Flashcards are mostly useful for (1) and (3). Between steps 1,2,3 you'll more than likely take notes along the way of things you learned.

FLASHNOTES let's you focus on what you think is most important, and in the background builds flashcards based off what you write.

This is for instance, how a pre-med student might use flashcards + notes traditionally for an exam

1) They outline course notes
2) They repeat what they wrote into flashcards

Traditionally, steps (1) and (2) are done in two seperate software solutions (anki and googledocs for instance). This leads to a lot of wasted time, and a lot of context switching.

FLASHNOTES merges these two steps together in a no-context switch fashion. It generates flashcards based off what you write, research, and what you tell it your intents in learning are.

Down the road it will use machine learning to fine tune your preferences.

TL-DR; If you have to learn and memorize lots of things, flashnotes saves you time through scientific proven space-reptition algorithm invented by Piotr Wozniack in 1995

## Road map

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
  * [x] Change routing to `decks/:id/review`, and `decks/:id/edit`

* [ ] Quiz functionality
  * [ ] Cards CRUD functionality
  * [ ] Decks CRUD functionality
  * [ ] Store score assigned to each card on review (store as a date)
  * [ ] Generate a space repetition algorithm for updating cards
  * [x] Transition cards until queue finished
  * [x] End condition - route back to `decks/:id`
  * [ ] additional late features - ability to set {cloze} card types, and other
  * [ ] Super memo 20 rules outline

* [ ] Notes functionality
  * [ ] Use WYSIWYG options to allow user to quickly add questions/answers

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

Defining routing is important if a user wants to go directly to a specific page. They mostly reflect the endpoints specified in backend, and tell the user's side.

* /decks
  * /stats
  * /:deckID
    * /edit
    * /review

## Data Modelling Schema

Data is designed to follow DRY principles (Don't Repeat Yourself). So if say the cards table has a one-to-many relationship to the decks table, the relationship is specified only on one table.

This enforces a source of truth on one end only.
The downside is you can only query in one direction unless you index the db.

For examples following a different pattern, see [hackernews API](https://github.com/HackerNews/API) - specifically the post/comments table

## Modelling the Space Repetition Algorithm

Memory based flashcard systems uses an algorithm created by Piotr Wozniack in 1995 called the "Space repetition algorithm".

The space-repetition algorithm (e.g. when flashcards need to be reviewed) will be defined under the `cards` table. Each card will have a rating from 1-10, 10 being a difficult card. If a card is deemed difficult, it will be seen more frequently in reviews.

## Math behind space-repetition algorithm

This blogpost will be used to model the algorithm

http://www.blueraja.com/blog/477/a-better-spaced-repetition-learning-algorithm-sm2

## User Stories 

* Not signed in
  * /  -> I can browse cards and add to my collection.

* Signed in
  * /Decks - I can see my deck
    * I can add a card quickly here.
    * I can review my cards quickly
    * I can search records of my cards quickly
    * I can get card recommendation from others.
    * I can set my preferences, to indicate what cards I want to see
    * I can see what others tag with the same cards
  * /Decks/Stats
    * I can see my flash cards reviewed
    * I can see days I did not review cards
    * I can see how many cards I reviewed total, in past week, and averages
  * /Notes - I can see my notes
    * I see folder pane on left side
    * I can quickly tag content for later
    * I can search for notes quickly, either (1) by rich search, or (2) by tags
    * I can quickly add cards using "Question ? Front : Back" syntax 
    * I can see a list of quick commands