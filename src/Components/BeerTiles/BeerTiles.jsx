import React from 'react'

const BeerTiles = (props) => {
    const {name, image_url} = props;

    return (
        
        <div>
            <h2>{name}</h2>
            <img src={image_url}/>
        </div>
    )
}

export default BeerTiles
