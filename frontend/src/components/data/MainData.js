// Mocked Data Response
const MainData = {
  cards: [
    {
      id: "ID1",
      question: "I'm question one",
      answer: "I'm answer one",
      createdAt: "DateTime",
      modifiedAt: "DateTime",
      deck: "Deck1"
    },
    {
      id: "ID2",
      question: "I'm question two",
      answer: "I'm answer two",
      createdAt: "DateTime",
      modifiedAt: "DateTime",
      deck: "Deck1"
    },
    {
      id: "ID3",
      question: "I'm question three",
      answer: "I'm answer three",
      createdAt: "DateTime",
      modifiedAt: "DateTime",
      deck: "Deck2"
    },
    {
      id: "ID4",
      question: "I'm question four",
      answer: "I'm answer four",
      createdAt: "DateTime",
      modifiedAt: "DateTime",
      deck: "Deck1"
    }
  ],
  decks: [
    {
      id: "Deck1",
      title: "Javascript Deck"
      // cardIds: ["ID1", "ID2"]
    },
    {
      id: "Deck2",
      title: "PHP Deck"
      // cardIds: ["ID3,ID4"]
    }
  ]
};

export default MainData;
