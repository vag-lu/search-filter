import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import fruitsList from './itensList';

function App() {
  const [searchInput, setSearchInput] = useState("")

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Search searchInput={searchInput} onChange={onSearchChange}></Search>
        <List list={fruitsList}></List>
      </header>
    </div>
  );
}

export default App;
