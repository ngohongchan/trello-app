import React from 'react';
import Columns from '../Columns';
import { isEmpty } from 'lodash';
import './styles.scss';

import { initialData } from '../../actions/initialData';
import { mapOrder } from '../../utilities/sort';

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

  if (isEmpty(board)) {
    return <div className='board-not-found'>Board not found</div>;
  }

  return (
    <div className='board-columns'>
      {columns.map((column: { title: string; cards: []; cardOrder: [] }, index: number) => (
        <Columns key={index} column={column} />
      ))}
    </div>
  );
};

export default BoardContent;
