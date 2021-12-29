import * as React from 'react'

type SearchProps = {
    searchInput: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ searchInput, onChange }: SearchProps): JSX.Element => {
    return (
        <div>
            <input type="text" onChange={onChange}></input>
        </div>
    )
}

export default Search