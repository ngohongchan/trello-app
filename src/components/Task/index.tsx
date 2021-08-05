import React from 'react';

type Props = {
  card: {
    id: string;
    boardId: string;
    columnId: string;
    title: string;
    cover: string;
  };
};

const Task: React.FC<Props> = ({ card }) => {
  return (
    <div className='task-item'>
      {card.cover && (
        <img src={card.cover} className='card-cover' alt={card.title} onMouseDown={(e) => e.preventDefault()} />
      )}
      {card.title}
    </div>
  );
};

export default Task;
