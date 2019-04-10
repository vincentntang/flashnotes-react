// Mocked Data Response
const MainData = {
  notes: [
    {
      id: "ID1",
      content: "I'm CONTENT ONE YEAAA",
      parentId: "ID2",
      dateCreated: "DateCreated",
      docID: "DocID1",
      order: 1
    },
    {
      id: "ID2",
      content: "I'm CONTENT TWO YEAAA",
      parentId: "root",
      dateCreated: "DateCreated",
      docID: "DocID1",
      order: 1
    },
    {
      id: "ID3",
      content: "I'm CONTENT THREE YEAAA",
      parentId: "ID2",
      dateCreated: "DateCreated",
      docID: "DocID4",
      order: 1
    },
    {
      id: "ID4",
      content: "I'm CONTENT FOUR YEAAA",
      parentId: "ID2",
      dateCreated: "DateCreated",
      docID: "DocID1",
      order: 1
    }
  ],
  docs: [
    {
      id: "DocsID1",
      title: "Dock ID Title"
    },
    {
      id: "DocsID2",
      title: "Dock ID Title"
    }
  ]
};

export default MainData;
