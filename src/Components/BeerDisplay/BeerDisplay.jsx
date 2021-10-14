import React from 'react'
import BeerTiles from '../BeerTiles/BeerTiles'
import "./BeerDisplay.scss"



const BeerDisplay = (props) => {
    const {beers, searchTerm, filterItemABV, filterItemClassic, filterItemPh} = props;

   const filteredBeers = beers.filter((beer)=> { 
       return((searchTerm ? beer.name.toLowerCase().includes(searchTerm) : true) && (filterItemABV ? (beer.abv > 6) : true) && ( filterItemClassic ? (parseInt(beer.first_brewed.slice(3)) < 2010) : true) && (filterItemPh ? (beer.ph < 4) : true))
    })
    const beerShow = filteredBeers.map((beer, index)=> {
        return <BeerTiles name={beer.name} image_url={beer.image_url} tagline={beer.tagline} firstBrewed={beer.first_brewed} abv={beer.abv} ph={beer.ph}/>
    })

    return (
        <div className="beer-display">
            {beers && beerShow}
        </div>
    )
}

export default BeerDisplay
