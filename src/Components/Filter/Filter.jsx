import React from 'react'

const Filter = (props) => {
    const {handleFilterItemABV, handleFilterItemClassic, handleFilterItemPh} = props
    return (
        <div>
            <label>High ABV > 6.0%</label>
            <input onChange = {handleFilterItemABV} type="checkbox"/> 
            <label>Classic Range</label>
            <input onChange = {handleFilterItemClassic} type="checkbox"/> 
            <label>{`Acidic (ph < 4)`}</label>
            <input onChange = {handleFilterItemPh} type="checkbox"/> 
        </div>
    )
}

export default Filter
