// Mocked Data Response
const MainData = {
  cards: [
    {
      id: "ID1",
      question: "What are pencils?",
      answer: "They are used to write things",
      createdAt: "DateTime",
      modifiedAt: "DateTime",
      deck: "Deck1",
      difficulty: 0.3, // [1-10 rating - 10 being difficult],
      daysBetweenReviews: 1,
      dateLastReviewed: ""
    },
    {
      id: "ID2",
      question: "What is a potato?",
      answer: "A type of crop",
      createdAt: "DateTime",
      modifiedAt: "DateTime",
      deck: "Deck1",
      difficulty: 0.3, // [1-10 rating - 10 being difficult],
      daysBetweenReviews: 1,
      dateLastReviewed: ""
    },
    {
      id: "ID3",
      question: "What is most popular state management for React?",
      answer: "Redux",
      createdAt: "DateTime",
      modifiedAt: "DateTime",
      deck: "Deck2",
      difficulty: 0.3, // [1-10 rating - 10 being difficult],
      daysBetweenReviews: 1,
      dateLastReviewed: ""
    },
    {
      id: "ID4",
      question: "What is common use case of React's componentDidMount?",
      answer: "Updating Data to Store",
      createdAt: "DateTime",
      modifiedAt: "DateTime",
      deck: "Deck1",
      difficulty: 0.3, // [1-10 rating - 10 being difficult],
      daysBetweenReviews: 1,
      dateLastReviewed: ""
    }
  ],
  decks: [
    {
      id: "Deck1",
      title: "Javascript Deck",
      createdAt: "DateTime",
      modifiedAt: "DateTime"
      // cardIds: ["ID1", "ID2"]
    },
    {
      id: "Deck2",
      title: "PHP Deck",
      createdAt: "DateTime",
      modifiedAt: "DateTime"
      // cardIds: ["ID3,ID4"]
    }
  ],
  // Space repetition algorithm.
  sessions: [
    {
      id: "SessionID1",
      dateFinished: "DateTime"
    }
  ]
};

export default MainData;
