import * as React from 'react'

type SearchProps = {
    searchInput: string
}

const Search = ({ searchInput }: SearchProps): JSX.Element => {
    return (
        <div>
            <input type="text"></input>
        </div>
    )
}

export default Search