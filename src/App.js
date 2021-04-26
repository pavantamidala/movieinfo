import RequestMovie from './components/requestMovies'
import './App.css';
import SearchBar from './components/searchBar'
import { useState } from 'react';

function App() {
  const [searchValue,setSearchValue] = useState('avengers')
  const [loading, setLoading] = useState("")
  
  return (
    <div className="App">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <h4 className="warning"> {loading} </h4>
      <RequestMovie loading={loading} setLoading={setLoading}  searchValue={searchValue}  />
          </div>
  );
}

export default App;
