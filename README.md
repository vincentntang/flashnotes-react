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

## Installation

Go to `backend` folder, add your `env` keys from `env.sample`

In root folder, type

```
npm install
npm run install-client
npm run install-server
npm run dev
```

On development mode, frontend starts on port 3000, backend port 5000


## Modelling the Space Repetition Algorithm

Memory based flashcard systems uses an algorithm created by Piotr Wozniack in 1995 called the "Space repetition algorithm".

The space-repetition algorithm (e.g. when flashcards need to be reviewed) will be defined under the `cards` table. Each card will have a rating from 1-10, 10 being a difficult card. If a card is deemed difficult, it will be seen more frequently in reviews.

## Math behind space-repetition algorithm

This blogpost will be used to model the algorithm

http://www.blueraja.com/blog/477/a-better-spaced-repetition-learning-algorithm-sm2

## Current issues with existing software on market

* Anki does not let you add images on it's web client
* Desktop client is just more things that aren't needed
* Ankidroid is nice, but really a webapp suffices. (react-native?)
* Anki web client is just not spaced out correctly (not at optimal read-space length of 60-80 chars per line)

## Additional Docs

See mocked up data sets currently being used under `data` folder. Not entirely secure (need to think about private routes)

- [API.md](/API.md) API / Spec docs
- [NOTES.md](/NOTES.md) personal notes to self
- [USERS.md](/USERS.md) user stories
- [ROADMAP.md](/ROADMAP.md) roadmap