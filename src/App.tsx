import React from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import fruitsList from './itensList';

function App() {
  const searchInput = ""
  return (
    <div className="App">
      <header className="App-header">
        <Search searchInput={searchInput}></Search>
        <List list={fruitsList}></List>
      </header>
    </div>
  );
}

export default App;
