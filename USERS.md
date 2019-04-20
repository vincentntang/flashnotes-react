## UI/UX interface on flashcard review

This is how I see proper UI/UX design on flashcard queues.
It should be based off the principles of speed-reading

* A user sees a question
* User clicks `space` or whatever, to show answer.
* Answer takes the exact spot question was at
* Question is hidden, user can hover over answer to see question. originally asked as a tooltip popout (position - absolute with extra padding above)

## Additional featuresets for reviewing cards

User can select different options to see what works best for them, for quickly adding cards

* Reveal mode - time-based mode, user sees question and answer slowly reveals itself by slowly showcasing the word
* Color mode - "Green text = Question" , "Blue Text="Answer".

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