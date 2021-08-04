import React from 'react';
import Task from '../Task';
import './styles.scss';

type Props = {};

const Columns: React.FC<Props> = () => {
  return (
    <div className='columns'>
      <header>Brainstore</header>
      <ul className='task-list'>
        <Task />
        <li>Add what you'd like work on below</li>
        <li>Add what you'd like work on below</li>
        <li>Add what you'd like work on below</li>
        <li>Add what you'd like work on below</li>
        <li>Add what you'd like work on below</li>
        <li>Add what you'd like work on below</li>
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Columns;
