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
    <li>
      {card.cover && <img src={card.cover} className='card-cover' alt={card.title} />}
      {card.title}
    </li>
  );
};

export default Task;
