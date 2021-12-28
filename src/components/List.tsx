import React from "react"

type Props = {
    list: string[]
}

const List = ({ list }: Props): JSX.Element => {
    return (
        <>
            {list.map(item => <p>{item}</p>)}
        </>
    )
}

export default List