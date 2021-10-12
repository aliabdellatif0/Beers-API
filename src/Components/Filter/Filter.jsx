import React from 'react'

const Filter = (props) => {
    const {handleFilterItem} = props
    return (
        <div>
            <label>High ABV > 6.0%</label>
            <input onChange = {handleFilterItem} type="checkbox"/> 
        </div>
    )
}

export default Filter
