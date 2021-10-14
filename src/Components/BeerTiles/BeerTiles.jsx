import React from 'react'
import "./BeerTiles.scss"

const BeerTiles = (props) => {
    const {name, image_url, tagline, firstBrewed, abv, ph} = props;

    return (
        
        <div className = "beer">
            <h2>{name}</h2>
            <img className = "beer__image"src={image_url}/>
            <p>{tagline}</p>
            <p>First brewed in {firstBrewed}</p>
            <p>Alcohol level of {abv}%</p>
            <p>pH level of {ph}</p>
        </div>
    )
}

export default BeerTiles
