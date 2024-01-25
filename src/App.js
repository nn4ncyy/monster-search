import './App.css';
// import the <CardList> component
import CardList from "./components/cardlist/cardlist.component";
import { useState, useEffect } from "react"; 
import { SearchBar } from './components/searchbar/searchbar.component';
import axios from 'axios';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filtered, setFilteredMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await axios("https://jsonplaceholder.typicode.com/users");
      setMonsters(response.data);
    };
    fetchMonsters();
  }, []); // no dependencies

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = monsters
    } else {
      filtered = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      }
      setFilteredMonsters(filtered);
    }, [monsters, searchInput]); // dependencies

  // const [searchInput, setSearchInput] = useState("");
  const handleInput = e => {
    setSearchInput(e.target.value)
};

  return (
    
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar
        placeholder='Search Monster'
        handleInput={handleInput}
        />
      <CardList monsters={filtered}/>
      
    </div>
  );
}

export default App;
