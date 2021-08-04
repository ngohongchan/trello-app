import React from 'react';
import './App.scss';
import AppBar from './components/Appbar';
import BoardBar from './components/BoardBar';
import BoardContent from './components/BoardContent';

function App() {
  return (
    <div className='trello-master'>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
