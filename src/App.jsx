
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  const [beer, setBeer] = useState(0)
  const [ searchTerm, setSearchTerm ] = useState(null)

  useEffect(()=>{
    const getBeers = () => {
      fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((response) => response.json())
      .then((response) => {getBeers(response)})
    }
    getBeers()

  }, [searchTerm])
  return (
    
  );
}

export default App;
