import React from 'react';
import Columns from '../Columns';
import './styles.scss';

const BoardContent = () => {
  return (
    <div className='board-columns'>
      <Columns />
      <Columns />
      <Columns />
      <Columns />
      <Columns />
      <Columns />
      <Columns />
    </div>
  );
};

export default BoardContent;
