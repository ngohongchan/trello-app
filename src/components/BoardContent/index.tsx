import React from 'react';
import Columns from '../Columns';
import { isEmpty } from 'lodash';
import './styles.scss';

import { initialData } from '../../actions/initialData';
import { mapOrder } from '../../utilities/sort';
import { Container, Draggable } from 'react-smooth-dnd';

type Props = {};

const BoardContent: React.FC<Props> = () => {
  const [board, setBoard] = React.useState<any>({});
  const [columns, setColumns] = React.useState<any>([]);

  React.useEffect(() => {
    const boardFromDb = initialData.boards.find((boa) => boa.id === 'board-1');
    if (boardFromDb) {
      setBoard(boardFromDb);

      setColumns(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, 'id'));
    }
  }, [board]);

  const onColumnDrop = (dropResult: any): void => {
    console.log({ dropResult });
  };

  if (isEmpty(board)) {
    return <div className='board-not-found'>Board not found</div>;
  }

  return (
    <div className='board-columns'>
      <Container
        orientation='horizontal'
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector='.column-drag-handle'
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview'
        }}
      >
        {columns.map((column: { title: string; cards: []; cardOrder: [] }, index: number) => (
          <Draggable key={index}>
            <Columns column={column} />
          </Draggable>
        ))}
      </Container>
    </div>
  );
};

export default BoardContent;
