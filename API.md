## Data returned from backend:

This is currently based on pullrequest #11

### Notes

```
{
    "_id": "5cb7bce0adadf2749a29a25c",
    "title": "hey I'm a title",
    "text": "hey hello world",
    "user": "5cb4a7a468930b7ad924350d",
    "createdAt": "2019-04-17T23:55:12.767Z",
    "updatedAt": "2019-04-17T23:55:12.767Z",
    "__v": 0
},
```

### Cards

```
{
    "_id": "5cb7b987f909ae72082af60d",
    "question": "I'm a question",
    "answer": "I'm a question",
    "deck": "5cb502389116b920f626e874",
    "difficulty": 0.3,
    "daysBetweenReviews": 1,
    "user": "5cb4a7a468930b7ad924350d",
    "createdAt": "2019-04-17T23:40:55.042Z",
    "updatedAt": "2019-04-17T23:40:55.042Z",
    "__v": 0
},
```

### Users

```
{
    "id": "5cb4a7a468930b7ad924350d",
    "name": "Vincent Tang",
    "email": "vincentntang@gmail.com"
}
```

### Decks

```
{
    "_id": "5cb502389116b920f626e874",
    "title": "My First Deck",
    "user": "5cb4a7a468930b7ad924350d",
    "createdAt": "2019-04-15T22:14:16.014Z",
    "updatedAt": "2019-04-15T22:14:16.014Z",
    "__v": 0
}
```

## Endpoints

X refers to "decks", "users", "cards", or "notes"

- GET /x/      - Grab all X
- GET /x/:id   - Get a X
- DEL /x/:id   - Delete a X
- POST /x/     - Post a X