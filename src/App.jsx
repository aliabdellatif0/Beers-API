
import './App.css';
import React, {useState, useEffect} from 'react';
import BeerTiles from './Components/BeerTiles/BeerTiles';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BeerDisplay from './Components/BeerDisplay/BeerDisplay';
import Search from './Components/Search/Search';
import Filter from './Components/Filter/Filter';
import "./App.css"


function App() {
  const [count, setCount] = useState(0)
  const [beers, setBeers] = useState([])
  

  const [ searchTerm, setSearchTerm ] = useState("")
  const [filterItemABV, setFilterItemABV] = useState(false)
  const [filterItemClassic, setFilterItemClassic] = useState(false)
  const [filterItemPh, setFilterItemPh] = useState(false)

  const handleSearchTerm = (word) => {
    setSearchTerm(word)
  }

  const handleFilterItemABV = () => {
    setFilterItemABV(!filterItemABV)
  }

  const handleFilterItemClassic = () => {
    setFilterItemClassic(!filterItemClassic)
  }

  const handleFilterItemPh = () => {
    setFilterItemPh(!filterItemPh)
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
    
    <div className="main-grid">
      <div className="main-grid__item">
      <Search handleSearchTerm = {handleSearchTerm} />
      <Filter handleFilterItemABV = {handleFilterItemABV} handleFilterItemClassic = {handleFilterItemClassic} handleFilterItemPh = {handleFilterItemPh}/>
      </div>
      <div>
      <BeerDisplay beers={beers} searchTerm = {searchTerm} filterItemABV = {filterItemABV} filterItemClassic = {filterItemClassic} filterItemPh = {filterItemPh}/>
      </div>
    </div>
  );
}

export default App;
