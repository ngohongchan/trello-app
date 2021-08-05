import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
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

  const onCardDrop = (dropResult: any): void => {
    console.log(dropResult);
  };

  return (
    <div className='columns'>
      <header className='column-drag-handle'>{column.title}</header>
      <div className='task-list'>
        <Container
          orientation='vertical'
          groupName='col'
          onDrop={onCardDrop}
          getChildPayload={(index) => cards[index]}
          dragClass='card-ghost'
          dropClass='card-ghost-drop'
          onDropReady={(p) => console.log('Drop Ready', p)}
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview'
          }}
          // dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card: Card, index: number) => (
            <Draggable key={index}>
              <Task card={card} />
            </Draggable>
          ))}
        </Container>
      </div>
      <footer>Add another card</footer>
    </div>
  );
};

export default Columns;
