import React from 'react'

const Song = ({title="", play=f=>f, skip=f=>f}) => {
    return (
        <div>
            <div>{title}</div>
            <button onClick={play}>Play</button>
            <button onClick={skip}>Skip</button>
        </div>
    )
} 
    

export default Song



