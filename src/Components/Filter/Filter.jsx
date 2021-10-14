import React from 'react'

const Filter = (props) => {
    const {handleFilterItemABV, handleFilterItemClassic, handleFilterItemPh} = props
    return (
        <div>
            <br></br>
            <br></br>
            <div>
            <label>{`High ABV > 6.0%`}</label>
            <input onChange = {handleFilterItemABV} type="checkbox"/> 
            </div>
            <br></br>
            <div>
            <label>Classic Range</label>
            <input onChange = {handleFilterItemClassic} type="checkbox"/> 
            </div>
            <br></br>
            <div>
            <label>{`Acidic (ph < 4)`}</label>
            <input onChange = {handleFilterItemPh} type="checkbox"/> 
            </div>
        </div>
    )
}

export default Filter
