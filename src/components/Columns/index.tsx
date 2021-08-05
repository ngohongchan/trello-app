import React from 'react';
import { mapOrder } from '../../utilities/sort';
import Task from '../Task';
import './styles.scss';

type Props = {
  column: {
    title: string;
    cards: [];
    cardOrder: [];
  };
};

type Card = {
  id: string;
  boardId: string;
  columnId: string;
  title: string;
  cover: string;
};

const Columns: React.FC<Props> = ({ column }) => {
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  return (
    <div className='columns'>
      <header>{column.title}</header>
      <ul className='task-list'>
        {cards.map((card: Card, index: number) => (
          <Task key={index} card={card} />
        ))}
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Columns;
