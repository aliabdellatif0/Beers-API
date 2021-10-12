
import './App.css';
import React, {useState, useEffect} from 'react';
import BeerTiles from './Components/BeerTiles/BeerTiles';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BeerDisplay from './Components/BeerDisplay/BeerDisplay';
import Search from './Components/Search/Search';
import Filter from './Components/Filter/Filter';


function App() {
  const [count, setCount] = useState(0)
  const [beers, setBeers] = useState([])
  

  const [ searchTerm, setSearchTerm ] = useState("")
  const [filterItem, setFilterItem] = useState(false)

  const handleSearchTerm = (word) => {
    setSearchTerm(word)
  }

  const handleFilterItem = () => {
    setFilterItem(!filterItem)
  }

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
    .then((response) => response.json())
    .then((response) => {setBeers(response)})
    
  }

  
  useEffect(()=>{
    
    getBeers()
   
    
  }, [])

  console.log(beers)
  return (
    
    <div>
      <Search handleSearchTerm = {handleSearchTerm} />
      <Filter handleFilterItem = {handleFilterItem}/>
      <BeerDisplay beers={beers} searchTerm = {searchTerm} filterItem = {filterItem}/>
      
    </div>
  );
}

export default App;
