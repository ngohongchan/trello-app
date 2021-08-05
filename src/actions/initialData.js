export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'To do column',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover: 'https://trungquandev.com/wp-content/uploads/2021/05/trungquandev-cover-animation-1024x758.jpg'
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 2',
              cover: 'https://trungquandev.com/wp-content/uploads/2021/05/trungquandev-cover-animation-1024x758.jpg'
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 3',
              cover: null
            },
            {
              id: 'card-4',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 4',
              cover: null
            }
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'To do column',
          cardOrder: ['card-5', 'card-6', 'card-7', 'card-8'],
          cards: [
            {
              id: 'card-5',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 5',
              cover: 'https://trungquandev.com/wp-content/uploads/2021/05/trungquandev-cover-animation-1024x758.jpg'
            },
            {
              id: 'card-6',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 6',
              cover: null
            },
            {
              id: 'card-7',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 7',
              cover: 'https://trungquandev.com/wp-content/uploads/2021/05/trungquandev-cover-animation-1024x758.jpg'
            },
            {
              id: 'card-8',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 8',
              cover: null
            }
          ]
        }
      ]
    }
  ]
};
