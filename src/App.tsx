import { Main } from 'Containers/Main';
import React from 'react';
import './App.css';

function App() {
  const handler = () => {
    console.log('Кнопка нажата');
  };
  return <Main />;
}

export default App;
