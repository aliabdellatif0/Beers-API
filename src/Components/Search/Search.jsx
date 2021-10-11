import React from 'react'

const Search = (props) => {
    const {handleSearchTerm} = props;
    const handleType = (event) => {
        console.log(event.target.value)
        handleSearchTerm(event.target.value)
    }
    return (
        <>
            <input type="text" onChange = {handleType}></input>
        </>
    )
}

export default Search
