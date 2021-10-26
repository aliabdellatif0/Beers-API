import React from "react";
import BeerTiles from "../BeerTiles/BeerTiles";
import "./BeerDisplay.scss";

const BeerDisplay = props => {
  const { beers, searchTerm, filterItemABV, filterItemClassic, filterItemPh } = props;

  const filteredBeers = beers.filter(beer => {
    let beerHasMatched = true;

    if (searchTerm) {
      beerHasMatched = beer.name.toLowerCase().includes(searchTerm);
    }

    if (filterItemABV) {
      beerHasMatched = beerHasMatched && beer.abv > 6;
    }

    if (filterItemClassic) {
      beerHasMatched = beerHasMatched && parseInt(beer.first_brewed.slice(3)) < 2010;
    }

    if (filterItemPh) {
      beerHasMatched = beerHasMatched && beer.ph < 4;
    }

    return beerHasMatched;
  });

  const beerShow = filteredBeers.map((beer, index) => {
    return (
      <BeerTiles
        name={beer.name}
        image_url={beer.image_url}
        tagline={beer.tagline}
        firstBrewed={beer.first_brewed}
        abv={beer.abv}
        ph={beer.ph}
      />
    );
  });

  return <div className="beer-display">{beers && beerShow}</div>;
};

export default BeerDisplay;
