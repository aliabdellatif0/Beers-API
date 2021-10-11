import React from 'react'
import BeerTiles from '../BeerTiles/BeerTiles'



const BeerDisplay = (props) => {
    const {beers, searchTerm} = props;

   const filteredBeers = beers.filter((beer)=> { 
       if(searchTerm == ""){
        return true
       }
       else{
        return beer.name.toLowerCase().includes(searchTerm.toLowerCase())
       }
    })
    const beerShow = filteredBeers.map((beer, index)=> {
        return <BeerTiles name={beer.name} image_url={beer.image_url}/>
    })

    return (
        <div>
            {beers && beerShow}
        </div>
    )
}

export default BeerDisplay
