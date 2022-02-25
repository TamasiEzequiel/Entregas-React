
import React from 'react'

export const Memo = React.memo(() => {

    console.log("Memo")

    return (
        <h3>Memo</h3>
    )
})